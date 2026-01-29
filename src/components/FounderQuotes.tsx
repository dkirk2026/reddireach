"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const founderQuotes = [
  {
    name: "Guillermo Rauch",
    handle: "@rauchg",
    role: "CEO of Vercel",
    avatar: "/avatars/rauchg.jpg",
    quote: "ChatGPT now refers 10% of new @vercel signups, which have also accelerated",
    date: "Apr 10, 2025",
    time: "3:58 AM",
  },
  {
    name: "Pieter Levels",
    handle: "@levelsio",
    role: "Founder of Photo AI",
    avatar: "/avatars/levelsio.jpg",
    quote: "20% of my Google traffic is now ChatGPT. A month ago it was just 5%. So it grew by 4x in a month",
    date: "May 3, 2025",
    time: "8:01 PM",
  },
  {
    name: "Zeno Rocha",
    handle: "@zenorocha",
    role: "CEO of Resend",
    avatar: "/avatars/zenorocha.jpg",
    quote: "ChatGPT is now the top 3 source of traffic for resend.com. It surpassed both GitHub, and Twitter.",
    date: "May 16, 2025",
    time: "8:24 PM",
  },
  {
    name: "Marc Louvion",
    handle: "@marc_louvion",
    role: "Founder of ShipFast",
    avatar: "/avatars/marc_louvion.jpg",
    quote: "ChatGPT is now sending significant traffic to my little startup. At $3.34 revenue per visitor, it's also one of the top converting marketing channels.",
    date: "Jun 1, 2025",
    time: "6:33 PM",
  },
  {
    name: "James Ivings",
    handle: "@JamesIvings",
    role: "Co-founder of Leavemealone",
    avatar: "/avatars/jamesivings.jpg",
    quote: "ChatGPT has almost overtaken search engines for how we get new users now 🤯",
    date: "Jun 11, 2025",
    time: "3:09 PM",
  },
  {
    name: "Jeff Weinstein",
    handle: "@jeff_weinstein",
    role: "Product at Stripe",
    avatar: "/avatars/jeff_weinstein.jpg",
    quote: "Just off the phone with a growth person from a major internet company: 'We're seeing much higher conversion rates from prospective users coming from organic LLM traffic versus organic search.'",
    date: "Jun 15, 2025",
    time: "2:45 PM",
  },
];

export default function FounderQuotes() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPos += scrollSpeed;

      // Reset when we've scrolled half (since we duplicate the content)
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }

      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    // Start scrolling after a brief delay
    const timeout = setTimeout(() => {
      animationId = requestAnimationFrame(scroll);
    }, 1000);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate quotes for seamless loop
  const allQuotes = [...founderQuotes, ...founderQuotes];

  return (
    <section className="pt-6 pb-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-10">
        <div className="text-center">
          <span className="text-[#ff4500] font-semibold text-sm uppercase tracking-wider">
            Industry Leaders
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 max-w-2xl mx-auto">
            Top founders are already tracking and optimizing their AI visibility
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden px-6"
        style={{ scrollBehavior: "auto" }}
      >
        {allQuotes.map((founder, index) => (
          <div
            key={`${founder.handle}-${index}`}
            className="flex-shrink-0 w-[340px] bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-600 font-bold text-lg flex-shrink-0 overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center">{founder.name.split(" ").map(n => n[0]).join("")}</span>
                {founder.avatar && (
                  <Image
                    src={founder.avatar}
                    alt={founder.name}
                    width={48}
                    height={48}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-gray-900 truncate">{founder.name}</span>
                  <svg className="w-4 h-4 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-500 truncate">{founder.handle} · {founder.role}</div>
              </div>
              {/* X/Twitter logo */}
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>

            {/* Quote */}
            <p className="text-[15px] text-gray-800 leading-relaxed mb-3">
              {founder.quote}
            </p>

            {/* Timestamp */}
            <p className="text-sm text-gray-400">
              {founder.time} · {founder.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
