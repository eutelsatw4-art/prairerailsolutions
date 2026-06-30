import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Preventative Maintenance",
  description: "Preventative maintenance programs that reduce failures and extend asset life.",
};

const preventativeServices = [
  "Tie renewal programs",
  "Ballast cleaning and placement planning",
  "Geometry corrections",
  "Switch and crossing care",
  "Surface and alignment management",
];

const benefits = [
  "Reduces derailment risk",
  "Extends the useful life of ties and ballast",
  "Minimizes unplanned repairs",
  "Supports regulatory compliance",
  "Protects uptime and throughput",
];

const prsBenefits = [
  "Industry-experienced crews",
  "Certified inspection alignment",
  "Programs tailored to your priorities",
  "Integrated execution and follow-through",
  "Documentation that supports compliance and budgeting",
];

export default function PreventativeMaintenancePage() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-6 py-12">
      <section className="rail-hero relative mb-12 rounded-3xl p-12 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/extracted-dedup/0b7014_77fcddd463444c23894b882446024dbe~mv2.jpg.jpg" alt="PRS Work" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="rail-hero-overlay relative z-10">
          <h1 className="text-4xl font-bold md:text-5xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">Preventative Maintenance</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
            Preventative Track Maintenance That Protects Your Operation.
          </p>
        </div>
      </section>

      <section className="section-shell surface-glass">
        <h1 className="text-4xl font-bold text-[var(--brand-ink)]">Preventative Maintenance</h1>
        <p className="mt-3 max-w-3xl text-lg text-[color:rgb(17_34_53_/_0.85)]">
          Proactive programs that reduce unplanned failures, extend asset life, and improve overall rail reliability.
        </p>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">Targeted Infrastructure Care</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {preventativeServices.map((service) => (
            <div key={service} className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
              <h3 className="text-xl font-semibold text-[var(--brand-ink)]">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-[var(--brand-ink)]">Inspection &amp; Baseline Evaluation</h3>
            <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              We begin with a detailed condition assessment to understand current track performance.
            </p>
          </div>
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-[var(--brand-ink)]">Program Development</h3>
            <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              Using inspection data and operational input, we build a preventative maintenance strategy.
            </p>
          </div>
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-[var(--brand-ink)]">Execution &amp; Monitoring</h3>
            <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              Scheduled work is performed by trained crews using professional MOW equipment.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">Why Preventative Maintenance Matters</h2>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          Routine maintenance keeps your track working on a day-to-day basis. Preventative maintenance goes further.
        </p>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          It&apos;s a strategic investment that:
        </p>
        <ul className="space-y-2 text-lg text-[color:rgb(17_34_53_/_0.85)]">
          {benefits.map((benefit) => (
            <li key={benefit}>- {benefit}</li>
          ))}
        </ul>
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