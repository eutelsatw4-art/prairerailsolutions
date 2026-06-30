"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  title: string;
  text: string;
  image: string;
};

const slides: Slide[] = [
  {
    title: "Inspection Clarity",
    text: "Detailed track condition visibility, documentation, and practical recommendations for safer operations.",
    image: "/images/track-inspection.jpg",
  },
  {
    title: "Maintenance Readiness",
    text: "Field-focused tie, surfacing, and switch work that keeps throughput reliable in peak operating windows.",
    image: "/images/track-maintenance.jpg",
  },
  {
    title: "Operational Flow",
    text: "Industrial switching and first-mile/last-mile support that helps remove delays and coordination friction.",
    image: "/images/rail-operations.jpg",
  },
  {
    title: "Storage Flexibility",
    text: "Secure non-hazmat railcar storage with support for seasonality, planning, and fleet balancing.",
    image: "/images/railcar-storage.jpg",
  },
  {
    title: "Rail Operations",
    text: "Industrial switching and maintenance workflows keeping your operations on track.",
    image: "/images/hero-yard.jpg",
  },
];

export default function HomeOperationsSlider() {
  const [index, setIndex] = useState(0);

  const activeSlide = useMemo(() => slides[index], [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-shell surface-glass mt-10 md:p-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">Operational Showcase</h2>
        <p className="text-sm font-semibold text-[var(--brand-steel)]">Live Service Highlights</p>
      </div>

      <div className="mt-5 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
<div className="relative h-72 overflow-hidden rounded-2xl border border-white/40 bg-slate-200 md:h-96">
          <Image
            key={activeSlide.image}
            src={activeSlide.image}
            alt={activeSlide.title}
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,37,59,0.05),rgba(18,37,59,0.72))]" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/85">Slide {index + 1} / {slides.length}</p>
            <h3 className="mt-2 text-2xl font-semibold">{activeSlide.title}</h3>
            <p className="mt-2 text-sm text-white/90 md:text-base">{activeSlide.text}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-4 md:p-5">
          <div className="grid gap-2">
            {slides.map((slide, i) => {
              const isActive = i === index;
              return (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`rounded-xl border px-4 py-3 text-left transition ${
                    isActive
                      ? "border-[var(--brand-ink)] bg-[var(--brand-ink)] text-white"
                      : "border-[var(--line)] bg-white text-[var(--brand-ink)] hover:border-[var(--brand-steel)]"
                  }`}
                >
                  <p className="text-sm font-bold">{slide.title}</p>
                  <p className={`mt-1 text-xs ${isActive ? "text-white/90" : "text-[var(--brand-steel)]"}`}>
                    {slide.text}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
