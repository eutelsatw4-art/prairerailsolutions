import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Railcar Storage",
  description: "Non-hazmat railcar storage with operational support for agricultural and industrial customers.",
};

const customerTypes = [
  "Grain elevators and terminals",
  "Industrial and processing facilities",
  "Short line railways",
  "Equipment and fleet owners",
];

const railcarTypes = [
  "Covered hoppers",
  "Boxcars",
  "Tank cars (non-hazmat)",
  "Depressed flat cars",
  "Loaded or empty equipment",
];

export default function RailcarStoragePage() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-6 py-12">
      <section className="rail-hero relative mb-12 rounded-3xl p-12 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/extracted-dedup/0b7014_4cfe512c6f664e62a587f49b1d89bba6~mv2.jpeg.jpeg" alt="Railcar storage" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="rail-hero-overlay relative z-10">
          <h1 className="text-4xl font-bold md:text-5xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">Railcar Storage</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
            Secure, Flexible Storage for Industrial Rail Operations
          </p>
        </div>
      </section>

      <section className="section-shell surface-glass">
        <h1 className="text-4xl font-bold text-[var(--brand-ink)]">Railcar Storage</h1>
        <p className="mt-3 max-w-3xl text-lg text-[color:rgb(17_34_53_/_0.85)]">
          Prairie Rail Solutions provides non-hazmat rail car storage for agricultural, industrial, and short line customers who need dependable space and operational support.
        </p>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">Purpose-Built Storage for Industry</h2>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          Our storage services are designed for customers with active rail operations who need flexibility during seasonal peaks, maintenance cycles, or network disruptions.
        </p>
        <ul className="space-y-2 text-lg text-[color:rgb(17_34_53_/_0.85)]">
          {customerTypes.map((type) => (
            <li key={type}>- {type}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">Supported Railcar Types (Non-Hazmat Only)</h2>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          Prairie Rail Solutions offers storage for non-hazardous materials only.
        </p>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          Supported equipment includes:
        </p>
        <ul className="space-y-2 text-lg text-[color:rgb(17_34_53_/_0.85)]">
          {railcarTypes.map((type) => (
            <li key={type}>- {type}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-[color:rgb(17_34_53_/_0.82)]">
          All equipment is stored on maintained, inspected track.
        </p>
      </section>

      <section className="section-shell surface-glass mt-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">AAR-Certified Railcar Inspections &amp; Minor Repairs</h2>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          Prairie Rail Solutions provides AAR-certified railcar inspections and approved minor repairs in accordance with standards set by the Association of American Railroads.
        </p>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          This allows customers to maintain compliance and equipment readiness while cars are in storage, reducing delays when equipment is returned to service.
        </p>
        <p className="text-lg text-[color:rgb(17_34_53_/_0.85)] mb-4">
          Our on-site capabilities include:
        </p>
        <ul className="space-y-2 text-lg text-[color:rgb(17_34_53_/_0.85)]">
          <li>- Visual and mechanical safety inspections</li>
          <li>- Brake and running gear checks</li>
          <li>- Coupler and draft gear condition reviews</li>
          <li>- Minor mechanical repairs (as permitted)</li>
          <li>- Defect identification and documentation</li>
          <li>- Coordination for major repairs when required</li>
        </ul>
      </section>

      <section className="mt-8">
        <a href="/contact" className="btn-primary inline-block">Talk To Our Team</a>
      </section>
    </div>
  );
}