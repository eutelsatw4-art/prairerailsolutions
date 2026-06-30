import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rail Operations",
  description: "Industrial switching and first/last mile rail services for agricultural and industrial customers.",
};

const switchingServices = [
  "Plant and terminal switching",
  "Car spotting and pulling",
  "Inbound and outbound coordination",
  "Seasonal surge support",
  "Equipment repositioning",
  "Interface with Class I railways",
  "Yard and siding management",
];

const switchingCustomers = [
  "Grain Elevators & Terminals: Managing seasonal volumes, export programs, and surge traffic without congestion.",
  "Industrial & Processing Facilities: Supporting continuous production with dependable switching schedules.",
  "Short Line Railways: Providing local movement support where in-house resources are limited.",
];

const prsBenefits = [
  "Experienced locomotive operators",
  "In-house motive power",
  "Safety-first operating standards",
  "Reliable scheduling",
  "Responsive local management",
  "Partnership-driven service",
];

export default function RailOperationsPage() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-6 py-12">
      <section className="rail-hero relative mb-12 rounded-3xl p-12 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/extracted-dedup/0b7014_d99e7ec97ca44604ba773a03519f82b1~mv2.jpeg.jpeg" alt="Rail operations" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="rail-hero-overlay relative z-10">
          <h1 className="text-4xl font-bold md:text-5xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">RAIL OPERATIONS</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
            Reliable Rail Movements Where Your Operation Meets the Network.
          </p>
        </div>
      </section>

      <section className="section-shell surface-glass">
        <h1 className="text-4xl font-bold text-[var(--brand-ink)]">RAIL OPERATIONS</h1>
        <p className="mt-3 max-w-3xl text-lg text-[color:rgb(17_34_53_/_0.85)]">
          Prairie Rail Solutions provides industrial switching and first mile/last mile rail services for customers who depend on efficient, well-coordinated car movements.
        </p>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">Why Switching Matters</h2>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          For many industrial and agricultural operations, the most challenging part of rail service isn&apos;t the long haul.
        </p>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          It&apos;s what happens at your door. Poor switching coordination leads to missed loading windows, congested yards, production delays, demurrage exposure, and increased administrative burden.
        </p>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)]">
          PRS eliminates these issues by managing local movements professionally and predictably.
        </p>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">What PRS Provides</h2>
        <h3 className="text-xl font-semibold text-[var(--brand-ink)] mb-4">End-to-End Local Rail Support</h3>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          Our industrial switching and first/last mile services include:
        </p>
        <ul className="space-y-2 text-lg text-[color:rgb(17_34_53_/_0.85)]">
          {switchingServices.map((service) => (
            <li key={service}>- {service}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">Integrated Network Access</h2>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          With established access through Canadian Pacific Kansas City (CPKC) and the ability to coordinate alongside Canadian National Railway (CN), PRS provides reliable connectivity between your facility and the broader rail network.
        </p>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)]">
          We manage routing, timing, and handoffs to minimize delays and simplify coordination.
        </p>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">Designed for Demanding Operations</h2>
        <ul className="space-y-3 text-lg text-[color:rgb(17_34_53_/_0.85)]">
          {switchingCustomers.map((customer) => (
            <li key={customer}>- {customer}</li>
          ))}
        </ul>
        <p className="mt-4 text-lg text-[color:rgb(17_34_53_/_0.85)]">
          Every operation is different. Our service model adapts to yours.
        </p>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">How We Work with You</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-[var(--brand-ink)]">Operational Review</h3>
            <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              We assess your siding layout, traffic patterns, and volume requirements.
            </p>
          </div>
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-[var(--brand-ink)]">Service Planning</h3>
            <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              Together, we develop a switching and movement plan that fits your operation.
            </p>
          </div>
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-[var(--brand-ink)]">Execution &amp; Communication</h3>
            <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              Our crews execute movements safely and efficiently, with clear communication throughout.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">The PRS Difference</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {prsBenefits.map((benefit) => (
            <div key={benefit} className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
              <h3 className="text-xl font-semibold text-[var(--brand-ink)]">{benefit}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <a href="/contact" className="btn-primary inline-block">Talk To Our Team</a>
      </section>
    </div>
  );
}