import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Track Inspection",
  description: "TIGS-certified track inspections for industrial and agricultural rail operations.",
};

export default function TrackInspectionPage() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-6 py-12">
      <section className="rail-hero relative mb-12 rounded-3xl p-12 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/extracted-dedup/0b7014_a3fa3471968047c893c080b0ffaf81e3~mv2.jpg.jpg" alt="Railway work" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="rail-hero-overlay relative z-10">
          <h1 className="text-4xl font-bold md:text-5xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">Track Inspection & Maintenance</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
            Track Inspection Services You Can Count On.
          </p>
          <p className="mt-2 max-w-3xl mx-auto text-lg text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
            Certified, practical inspections that protect your siding, support compliance, and minimize operational risk.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
          <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">Who We Help</h2>
          <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
            Rail infrastructure is a critical part of your operation. When track performance fails, production delays, safety risks, and regulatory issues follow.
          </p>
          <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
            Prairie Rail Solutions provides track inspection services for customers with rail access who need professional, outcome-focused evaluations, including:
          </p>
          <ul className="mt-3 space-y-1 text-sm text-[color:rgb(17_34_53_/_0.82)]">
            <li>Grain Elevators & Terminals (high throughput sidings and seasonal load spikes)</li>
            <li>Industrial Facilities (energy, manufacturing, processing)</li>
            <li>Short Line Railways (without in-house maintenance capability)</li>
          </ul>
        </article>
        <article className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
          <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">What We Provide</h2>
          <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
            Our inspections are performed by TIGS-certified rail inspectors with deep operational experience. We don&apos;t just &quot;check the boxes&quot; — we assess conditions in terms that matter to the people running your operation.
          </p>
          <ul className="mt-3 space-y-1 text-sm text-[color:rgb(17_34_53_/_0.82)]">
            <li>Track structure and alignment</li>
            <li>Tie condition and fastener integrity</li>
            <li>Ballast condition and drainage assessment</li>
            <li>Switches, frogs, and crossings</li>
            <li>Defect identification and prioritization</li>
            <li>Documented reports with photos and recommendations</li>
          </ul>
        </article>
        <article className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
          <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">Why It Matters</h2>
          <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
            You choose PRS for inspection work because our reports help you:
          </p>
          <ul className="mt-3 space-y-1 text-sm text-[color:rgb(17_34_53_/_0.82)]">
            <li>Minimize derailment risk</li>
            <li>Plan maintenance before failures occur</li>
            <li>Meet regulatory expectations</li>
            <li>Budget more accurately for infrastructure work</li>
            <li>Communicate conditions to stakeholders and operations teams</li>
          </ul>
        </article>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">The PRS Difference</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-[var(--brand-ink)]">Experienced Inspectors</h3>
            <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              Experienced inspectors with real operational background.
            </p>
          </div>
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-[var(--brand-ink)]">Clear Reporting</h3>
            <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              Clear reporting you can act on.
            </p>
          </div>
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-[var(--brand-ink)]">Partnership Approach</h3>
            <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              A relationship approach that supports your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <a href="/contact" className="btn-primary inline-block">Talk To Our Team</a>
      </section>
    </div>
  );
}