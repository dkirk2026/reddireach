import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-11-19",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

function scoreDomain(url: string) {
  let hostname: string;
  try {
    hostname = new URL(url).hostname.replace(/^www\./, "");
  } catch {
    // If it's not a full URL, treat the input as a hostname
    hostname = url.replace(/^(https?:\/\/)?(www\.)?/, "").split("/")[0];
  }

  const parts = hostname.split(".");
  const tld = parts[parts.length - 1];
  const domainName = parts.length >= 2 ? parts[parts.length - 2] : parts[0];

  // Deterministic base from domain hash — wider spread across 2-7
  const hash = hashString(hostname);
  const base = 2 + (hash % 6);

  // --- Domain Quality (1-10 sub-score) ---
  let domainQuality = 3 + ((hash >> 2) % 3);
  if (tld === "com") domainQuality += 2;
  else if (["io", "co", "ai", "app"].includes(tld)) domainQuality += 1.5;
  else if (["org", "net"].includes(tld)) domainQuality += 0.5;
  else domainQuality -= 0.5;

  if (domainName.length <= 6) domainQuality += 2;
  else if (domainName.length <= 10) domainQuality += 1;
  else if (domainName.length > 20) domainQuality -= 2;
  else if (domainName.length > 14) domainQuality -= 1;

  if (domainName.includes("-")) domainQuality -= 1.5;
  if (/\d/.test(domainName)) domainQuality -= 0.5;
  domainQuality = Math.max(2, Math.min(9, Math.round(domainQuality)));

  // --- Industry Opportunity (1-10 sub-score) ---
  let industryOpportunity = 3 + ((hash >> 5) % 3);
  const highOpportunity = [
    "saas", "tech", "health", "finance", "fintech", "legal", "edu",
    "real", "estate", "insur", "cloud", "data", "cyber", "med",
    "shop", "store", "market", "agency", "consult",
  ];
  const lowOpportunity = ["blog", "info", "free", "test", "demo", "temp"];
  const matchHigh = highOpportunity.some((kw) => domainName.includes(kw));
  const matchLow = lowOpportunity.some((kw) => domainName.includes(kw));
  if (matchHigh) industryOpportunity += 3;
  if (matchLow) industryOpportunity -= 2;

  // Use hash to add variation
  industryOpportunity += ((hash >> 8) % 3) - 1;
  industryOpportunity = Math.max(2, Math.min(9, Math.round(industryOpportunity)));

  // --- AI Discoverability (1-10 sub-score) ---
  let aiDiscoverability = 2 + ((hash >> 11) % 4);
  // Shorter, cleaner domains tend to be more discoverable
  if (domainName.length <= 6) aiDiscoverability += 2;
  else if (domainName.length <= 10) aiDiscoverability += 1;
  else if (domainName.length > 18) aiDiscoverability -= 1.5;
  if (!domainName.includes("-") && !/\d/.test(domainName)) aiDiscoverability += 1.5;
  if (domainName.includes("-")) aiDiscoverability -= 1;
  if (["com", "io", "ai"].includes(tld)) aiDiscoverability += 1;

  aiDiscoverability = Math.max(2, Math.min(9, Math.round(aiDiscoverability)));

  // --- Final score: weighted average of sub-scores with hash influence ---
  let score = Math.round(
    base * 0.4 +
    domainQuality * 0.2 +
    industryOpportunity * 0.2 +
    aiDiscoverability * 0.2
  );

  // Clamp to 2-8
  score = Math.max(2, Math.min(8, Math.round(score)));

  return {
    score,
    breakdown: {
      domainQuality,
      industryOpportunity,
      aiDiscoverability,
    },
  };
}

export async function POST(request: Request) {
  try {
    const { website } = await request.json();

    if (!website || typeof website !== "string") {
      return NextResponse.json(
        { error: "A website URL is required." },
        { status: 400 }
      );
    }

    // Normalize to a full URL for scoring
    let normalizedUrl = website.trim();
    if (!/^https?:\/\//i.test(normalizedUrl)) {
      normalizedUrl = `https://${normalizedUrl}`;
    }

    const { score, breakdown } = scoreDomain(normalizedUrl);

    // Save to Sanity
    if (process.env.SANITY_API_WRITE_TOKEN) {
      await client.create({
        _type: "lead",
        website: normalizedUrl,
        score,
        breakdown,
        convertedToCall: false,
        submittedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({ score, breakdown });
  } catch (error) {
    console.error("Score API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
