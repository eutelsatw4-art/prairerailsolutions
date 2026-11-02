"use client";

import { useState } from "react";

type Event = { year: string; title: string; description: string };

export default function TimelineAccordion({ events }: { events: Event[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--brand-red)]/30 hidden md:block"></div>
      <div className="space-y-4">
        {events.map((event, index) => {
          const open = openIndex === index;
          return (
            <div key={index} className="relative md:pl-12">
              <div className="absolute left-0 top-2 w-8 h-8 bg-[var(--brand-red)] rounded-full flex items-center justify-center text-white font-bold text-xs hidden md:flex">
                {index + 1}
              </div>
              <button
                onClick={() => setOpenIndex(open ? null : index)}
                className="w-full text-left rounded-xl border border-white/60 bg-white/75 p-4 transition hover:bg-white"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-red)]">{event.year}</p>
                <h3 className="text-xl font-semibold text-[var(--brand-ink)] mt-1">{event.title}</h3>
                {open && (
                  <p className="text-sm text-[color:rgb(17_34_53_/_0.82)] mt-2 animate-fade-in">
                    {event.description}
                  </p>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}