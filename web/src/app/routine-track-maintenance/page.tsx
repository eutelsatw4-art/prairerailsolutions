import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Routine Track Maintenance",
  description: "Routine track maintenance services for industrial sidings and short line railways.",
};

const maintenanceItems = [
  {
    title: "Tie Replacement & Renewal",
    description: "Replace failing ties before they compromise your rail structure.",
  },
  {
    title: "Surfacing & Lining",
    description: "Correct geometry issues to improve ride quality and reduce wear.",
  },
  {
    title: "Ballast Placement",
    description: "Improve drainage and load support for ongoing reliability.",
  },
  {
    title: "Switch & Crossing Maintenance",
    description: "Ensure critical components operate properly under throughput.",
  },
  {
    title: "Drainage Correction",
    description: "Prevent soft spots, frost heave, and accelerated tie rot.",
  },
];

export default function RoutineMaintenancePage() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-6 py-12">
      <section className="rail-hero relative mb-12 rounded-3xl p-12 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/extracted-dedup/0b7014_7123bf623bee4fbcbb4962d124f63c14~mv2.jpg.jpg" alt="Railway work 3" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="rail-hero-overlay relative z-10">
          <h1 className="text-4xl font-bold md:text-5xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">Routine Track Maintenance</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
            Routine Track Maintenance That Keeps Your Operation Moving.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3 md:p-8 md:bg-white/70 md:rounded-2xl md:border md:border-white/60">
        <article className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
          <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">Why This Matters</h2>
          <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
            Your siding or spur is more than just track; it&apos;s a direct extension of your rail operation.
          </p>
          <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
            When maintenance gets postponed, small problems escalate into delays, disruptions, and safety risks.
          </p>
        </article>
        <article className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
          <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">What PRS Provides</h2>
          <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
            Proactive, practical track upkeep with experienced crews and professional equipment.
          </p>
        </article>
        <article className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
          <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">Designed for Your Operation</h2>
          <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
            Built for grain elevators, industrial facilities, and short line railways.
          </p>
        </article>
      </section>

      <section className="mt-8">
        <a href="/contact" className="btn-primary inline-block">Talk To Our Team</a>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">What PRS Provides</h2>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-6">
          Proactive, Practical Track Upkeep:
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {maintenanceItems.map((item) => (
            <div key={item.title} className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
              <h3 className="text-xl font-semibold text-[var(--brand-ink)]">{item.title}</h3>
              <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">Designed for Your Operation</h2>
        <ul className="space-y-2 text-lg text-[color:rgb(17_34_53_/_0.85)]">
          <li>Grain elevators and terminals: seasonal peaks create heavy stress on infrastructure.</li>
          <li>Industrial facilities: manufacturing and processing operations cannot wait for service windows.</li>
          <li>Short line railways: without in-house MOW equipment, relying on external partners for infrastructure support.</li>
        </ul>
      </section>
    </div>
  );
}