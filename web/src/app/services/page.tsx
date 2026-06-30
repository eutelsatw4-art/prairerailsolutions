import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "All Services",
  description: "Comprehensive rail services for industrial and agricultural operations.",
};

const services = [
  {
    title: "Track Inspection",
    href: "/track-inspection",
    image: "/images/track-inspection.jpg",
    description: "TIGS-aligned inspections for sidings and spurs with clear defect documentation.",
  },
  {
    title: "Routine Track Maintenance",
    href: "/routine-track-maintenance",
    image: "/images/track-maintenance.jpg",
    description: "Tie work, surfacing, switch maintenance, and corrective repairs.",
  },
  {
    title: "Preventative Maintenance",
    href: "/preventative-maintenance",
    image: "/images/track-maintenance.jpg",
    description: "Planned interventions to prevent shutdowns and preserve safety.",
  },
  {
    title: "Railcar Storage",
    href: "/railcar-storage",
    image: "/images/railcar-storage.jpg",
    description: "Flexible non-hazmat railcar storage with operational support.",
  },
  {
    title: "Locomotive & Railcar Maintenance",
    href: "/locomotive-and-railcar-maintenance",
    image: "/images/track-maintenance.jpg",
    description: "AAR-certified inspections and light maintenance services.",
  },
  {
    title: "Rail Operations",
    href: "/rail-operations",
    image: "/images/rail-operations.jpg",
    description: "Industrial switching and first-mile/last-mile movements.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-6 py-12">
      <section className="section-shell surface-glass">
        <h1 className="text-4xl font-bold text-[var(--brand-ink)]">All Services</h1>
        <p className="mt-3 max-w-3xl text-lg text-[color:rgb(17_34_53_/_0.85)]">
          Comprehensive rail services for agricultural and industrial operations.
        </p>
      </section>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="elevate-hover group block rounded-2xl border border-white/60 bg-white/75 overflow-hidden"
          >
            <div className="relative h-56 w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)] group-hover:text-[var(--brand-red)]">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}