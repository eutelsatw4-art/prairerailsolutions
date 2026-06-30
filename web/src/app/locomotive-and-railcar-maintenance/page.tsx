import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Locomotive & Railcar Maintenance",
  description: "AAR-certified railcar inspections and locomotive support services.",
};

const railcarInspections = [
  "Visual and mechanical safety inspections",
  "Brake system and running gear checks",
  "Coupler and draft gear condition reviews",
  "Minor mechanical repairs (as permitted)",
  "Defect identification and documentation",
  "Coordination for major repairs when required",
];

const locomotiveSupport = [
  "Pre-service and safety inspections",
  "M92 Inspections",
  "Basic mechanical checks",
  "Operational readiness reviews",
  "Minor servicing and adjustments",
  "Coordination with third-party providers for major repairs",
];

const prsBenefits = [
  "AAR-certified inspection capability",
  "Experienced, safety-focused personnel",
  "On-site service integration",
  "Practical documentation",
  "Responsive local support",
  "Partnership-driven operations",
];

export default function LocomotiveMaintenancePage() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-6 py-12">
      <section className="rail-hero relative mb-12 rounded-3xl p-12 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/extracted-dedup/0b7014_f57b2121aff94e88834d2e4a608ea9d3~mv2.jpg.jpg" alt="PRS Locomotive" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="rail-hero-overlay relative z-10">
          <h1 className="text-4xl font-bold md:text-5xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">Locomotive &amp; Railcar Maintenance</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
            Keeping Your Equipment Compliant, Reliable, and Ready to Move.
          </p>
        </div>
      </section>

      <section className="section-shell surface-glass">
        <h1 className="text-4xl font-bold text-[var(--brand-ink)]">Locomotive &amp; Railcar Maintenance</h1>
        <p className="mt-3 max-w-3xl text-lg text-[color:rgb(17_34_53_/_0.85)]">
          Prairie Rail Solutions provides professional locomotive maintenance and AAR-certified railcar inspections and minor repairs to support safe, compliant, and efficient rail operations.
        </p>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">AAR-Certified Railcar Inspections &amp; Minor Repairs</h2>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          Prairie Rail Solutions performs railcar inspections and approved minor repairs in accordance with standards established by the Association of American Railroads.
        </p>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          This allows customers to maintain compliance and equipment readiness while cars are in storage or between service cycles, minimizing downtime when equipment is returned to operation.
        </p>
        <h3 className="text-xl font-semibold text-[var(--brand-ink)] mt-6 mb-3">Our Inspection &amp; Repair Capabilities</h3>
        <ul className="space-y-2 text-lg text-[color:rgb(17_34_53_/_0.85)]">
          {railcarInspections.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">Locomotive Support &amp; Light Maintenance</h2>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          In addition to railcar services, PRS provides light locomotive maintenance and operational support to ensure dependable switching and first/last mile service.
        </p>
        <h3 className="text-xl font-semibold text-[var(--brand-ink)] mt-6 mb-3">Our locomotive support includes:</h3>
        <ul className="space-y-2 text-lg text-[color:rgb(17_34_53_/_0.85)]">
          {locomotiveSupport.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">Why Equipment Inspections Matter</h2>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          Uninspected or poorly maintained equipment can lead to:
        </p>
        <ul className="space-y-2 text-lg text-[color:rgb(17_34_53_/_0.85)]">
          <li>- Interchange rejections</li>
          <li>- Bad-order holds</li>
          <li>- Delayed shipments</li>
          <li>- Increased demurrage</li>
          <li>- Unexpected repair costs</li>
          <li>- Safety and compliance risks</li>
        </ul>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">The PRS Difference</h2>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          Customers choose PRS for inspection and maintenance services because we deliver:
        </p>
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