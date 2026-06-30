"use client";

import Image from "next/image";
import Link from "next/link";
import HomeOperationsSlider from "@/components/home-operations-slider";
import { useEffect, useMemo, useState } from "react";

const serviceCards = [
  {
    title: "Track Inspection Services",
    image: "/images/track-inspection.jpg",
    summary:
      "TIGS-certified inspections to support safe, compliant customer track, with documentation and defect reporting.",
  },
  {
    title: "Routine Track Maintenance",
    image: "/images/track-maintenance.jpg",
    summary:
      "Hands-on maintenance that keeps sidings working properly: ties, surfacing, switch work, and corrective repairs.",
  },
  {
    title: "Preventative Maintenance",
    image: "/images/track-maintenance.jpg",
    summary:
      "Stop small issues before they become shutdowns, with early detection and corrective action.",
  },
  {
    title: "Railcar Storage",
    image: "/images/railcar-storage.jpg",
    summary:
      "Secure, flexible non-hazmat rail car storage in CentrePort with operational support.",
  },
  {
    title: "Locomotive and Railcar Maintenance",
    image: "/images/track-maintenance.jpg",
    summary:
      "On-site and mobile mechanical services with inspections, light repairs, and readiness support.",
  },
  {
    title: "Rail Operations",
    image: "/images/rail-operations.jpg",
    summary:
      "Industrial switching and first mile/last-mile movements with in-house locomotives and operators.",
  },
];

const teamMembers = [
  {
    name: "Tim Brewer",
    role: "Chief Executive Officer",
    image: "/images/team/tim-brewer.jpg",
  },
  {
    name: "Ed Clarkson",
    role: "Maintenance of Way Manager",
    image: "/images/team/ed-clarkson.jpg",
  },
  {
    name: "Max Kimacovich",
    role: "Operations Supervisor",
    image: "/images/team/max-kimacovich.jpg",
  },
  {
    name: "Eric Hadden",
    role: "Maintenance of Way Supervisor",
    image: "/images/team/eric-hadden.jpg",
  },
];

const heroSlides = [
  { image: "/images/track-inspection.jpg", title: "Track Inspection" },
  { image: "/images/track-maintenance.jpg", title: "Track Maintenance" },
  { image: "/images/rail-operations.jpg", title: "Rail Operations" },
  { image: "/images/railcar-storage.jpg", title: "Railcar Storage" },
  { image: "/images/hero-yard.jpg", title: "Rail Operations" },
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const activeHeroSlide = useMemo(() => heroSlides[slideIndex], [slideIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="flex-1 relative -mx-6 w-screen md:-mx-8 lg:-mx-12 overflow-hidden">
        <div className="rail-hero relative w-full h-full">
          <Image
            key={activeHeroSlide.image}
            src={activeHeroSlide.image}
            alt={activeHeroSlide.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,34,53,0.05),rgba(17,34,53,0.7))]" />
          <div className="rail-hero-overlay mx-auto flex w-full max-w-full flex-col items-center justify-center px-6 py-24 text-center md:py-40">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
                Prairie Rail Solutions
              </h1>
              <p className="text-xl font-semibold text-amber-200 drop-shadow md:text-2xl">
                Prairie Forged
              </p>
              <p className="mx-auto max-w-2xl text-lg text-white/95 drop-shadow md:text-xl">
                Keeping Our Customers On Track
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/services" className="btn-primary bg-white text-[var(--brand-red)] hover:bg-white/90">
                All Services
              </Link>
              <Link href="/contact" className="btn-ghost border-white bg-transparent text-white hover:bg-white/15">
                Request Quote
              </Link>
            </div>

            <div className="mt-16 grid max-w-4xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Railway-Experienced Team", desc: "Former Class I and industrial rail professionals" },
                { title: "Compliance & Safety Focused", desc: "Built around standards, documentation, and prevention" },
                { title: "Industrial Switching Capability", desc: "Locomotives + operators for first/last mile and plant support" },
                { title: "Purpose-Built for Industry", desc: "Grain, industrial sidings and short line support" },
              ].map((item) => (
                <div key={item.title} className="rounded-lg bg-black/30 p-4 text-white backdrop-blur-sm">
                  <h3 className="font-bold text-amber-200">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto w-full max-w-full px-6 py-12">
        <div className="mx-auto w-full max-w-[96rem] space-y-0">
      <section className="section-shell surface-glass grid gap-6 md:grid-cols-2 md:p-12">
        <div className="space-y-5">
          <p className="inline-block rounded-full bg-[var(--brand-ink)] px-3 py-1 text-xs font-bold tracking-wider text-white">
            PRAIRIE FORGED. BUILT FOR INDUSTRY.
          </p>
          <h1 className="text-4xl font-bold leading-tight text-[var(--brand-ink)] md:text-5xl">
            We Handle The Rail. You Focus On The Business.
          </h1>
          <p className="max-w-xl text-lg text-[color:rgb(17_34_53_/_0.88)]">
            Your partner in rail, keeping your supply chain on track with safety-first inspections, maintenance, and operations support.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <a href="tel:+14319771231" className="btn-ghost">
              Call Operations
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/30 bg-[linear-gradient(145deg,#12253b,#2c4762)] text-[var(--sand)]">
          <div className="relative h-56 w-full">
            <Image
              src="/images/hero-yard.jpg"
              alt="Prairie Rail yard operations"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,34,53,0.05),rgba(17,34,53,0.7))]" />
          </div>
          <div className="p-6">
          <h2 className="text-2xl font-semibold">Why Teams Choose PRS</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>Rail-experienced crews with Class I and industrial backgrounds</li>
            <li>Compliance-focused execution and field-ready documentation</li>
            <li>Practical support for high-throughput operations</li>
            <li>Responsive scheduling with accountability</li>
          </ul>
          </div>
        </div>
      </section>

      <HomeOperationsSlider />

      <section className="section-shell surface-glass mt-10 md:p-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">Rail Services. Done Right.</h2>
          <Link href="/services" className="text-sm font-semibold text-[var(--brand-red)]">
            View All Services
          </Link>
        </div>
        <p className="mt-3 max-w-3xl text-[color:rgb(17_34_53_/_0.82)]">
          Practical rail solutions built for industrial operations, delivered with accountability and responsiveness.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((item, index) => (
            <article key={item.title} className="elevate-hover overflow-hidden rounded-2xl border border-white/50 bg-white/70">
              <div className="relative h-44 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--brand-ink)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell surface-glass mt-10 md:p-10">
        <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">Who We Are</h2>
        <p className="mt-3 text-[color:rgb(17_34_53_/_0.85)]">
          Prairie Rail Solutions supports customers with rail access, grain elevators, industrial facilities, and short-line railways by taking ownership of the work that keeps rail operations safe, compliant, and reliable.
        </p>
        <p className="mt-3 text-[color:rgb(17_34_53_/_0.85)]">
          From inspections and maintenance to industrial switching, first-mile/last-mile service, and non-hazmat rail car storage, we work alongside your team to prevent disruptions and remove day-to-day guesswork.
        </p>
        <div className="mt-5">
          <Link href="/about" className="btn-ghost inline-block">
            Learn More About PRS
          </Link>
        </div>
      </section>

      <section className="section-shell surface-glass mt-10 md:p-10">
        <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">Our Management Team</h2>
        <p className="mt-3 max-w-3xl text-[color:rgb(17_34_53_/_0.82)]">
          Led by rail-experienced professionals, our team brings operations discipline, maintenance expertise, and accountability to every engagement.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name} className="elevate-hover overflow-hidden rounded-2xl border border-white/50 bg-white/70">
              <div className="relative h-56 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-[var(--brand-ink)]">{member.name}</h3>
                <p className="mt-1 text-sm text-[color:rgb(17_34_53_/_0.8)]">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell surface-glass mt-10 md:p-10">
        <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">Who We Serve</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Grain Elevators",
              "Switching, inspections, maintenance, and continuity support during peak seasons.",
            ],
            [
              "Industrial Facilities",
              "Rail operations support for energy, manufacturing, and municipal infrastructure.",
            ],
            [
              "Short Line Railways",
              "Inspections and maintenance support for railways without in-house MOW equipment.",
            ],
            [
              "All Industries",
              "Non-hazmat rail car storage with operational support.",
            ],
          ].map(([title, desc]) => (
            <article key={title} className="elevate-hover rounded-2xl bg-[var(--surface)] p-5">
              <h3 className="text-xl font-semibold text-[var(--brand-ink)]">{title}</h3>
              <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell surface-glass mt-10 md:p-10">
        <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">Members Of</h2>
        <p className="mt-3 text-[color:rgb(17_34_53_/_0.85)]">
          PRS is proud to be an industry member of organizations that strengthen short line railways and industrial rail collaboration.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
          <a className="btn-ghost" href="https://centreportcanada.ca/" target="_blank" rel="noreferrer">
            CentrePort Canada
          </a>
          <a className="btn-ghost" href="https://railwaysuppliers.ca/" target="_blank" rel="noreferrer">
            Railway Association of Canada
          </a>
          <a className="btn-ghost" href="https://www.railcan.ca/" target="_blank" rel="noreferrer">
            RailCan
          </a>
          <a className="btn-ghost" href="https://www.wcslra.com/" target="_blank" rel="noreferrer">
            WCSLRA
          </a>
        </div>
      </section>

      <section className="section-shell surface-glass mt-10 md:p-10">
        <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">How Engagement Works</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ["1. Discovery", "We capture your rail constraints, throughput targets, and compliance requirements."],
            ["2. Site Review", "Our team reviews track, operations flow, and risk points for practical recommendations."],
            ["3. Execution", "You get clear deliverables, coordinated field support, and measurable operational outcomes."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-xl bg-[var(--surface)] p-5">
              <h3 className="text-xl font-semibold text-[var(--brand-ink)]">{title}</h3>
              <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 flex flex-col gap-3 rounded-2xl bg-[linear-gradient(130deg,#b13f34,#8f332b)] p-8 text-white md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Talk to Our Team</h2>
          <p className="mt-2 text-sm text-white/90">Tell us what you are dealing with, and we will recommend the right solution and support plan.</p>
        </div>
        <Link href="/contact" className="btn-ghost border-white bg-white text-[var(--brand-red)] hover:bg-white/90 hover:text-[var(--brand-red)]">
          Send Inquiry
        </Link>
      </section>
        </div>
      </div>
    </>
  );
}