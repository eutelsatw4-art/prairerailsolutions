import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Who We Are",
  description: "Prairie Rail Solutions delivers rail services grounded in safety, precision, and integrity.",
};

const timelineEvents = [
  { year: "2012", title: "FOUNDED", description: "Prairie Rail Solutions Established. Founded to support the Prairie Dog Central Railway, with an initial focus on rail car storage for agricultural and industrial customers." },
  { year: "2012-2019", title: "EARLY GROWTH", description: "PRS expands rail car storage services and establishes long-term relationships with major industrial and commodity-based customers." },
  { year: "2020-2022", title: "MARKET DISRUPTION", description: "Global supply chain disruptions impact rail storage demand, highlighting the risks of a single-revenue business model." },
  { year: "OCTOBER 2024", title: "STRATEGIC TRANSFORMATION", description: "Tim Brewer appointed Chief Executive Officer. PRS launches a diversification strategy focused on inspections, maintenance, and industrial switching." },
  { year: "2024-2025", title: "INFRASTRUCTURE INVESTMENT", description: "PRS rebuilds and deploys key Maintenance of Way equipment, including a ballast regulator, tamper, and tie insertion/removal systems." },
  { year: "2025", title: "PRAIRIE DOG CENTRAL REHABILITATION", description: "PRS completes phase 1 of the PDCR rehabilitation project, consisting of 17 miles of track, replacing more than 2,000 ties, installing over 1.5 million pounds of granite ballast, and restored regulatory compliance." },
  { year: "MAY 2025", title: "REGULATORY ACHIEVEMENT", description: "The Prairie Dog Central Railway is declared compliant and resumes full seasonal operations without incident." },
  { year: "TODAY", title: "A TRUSTED RAIL PARTNER", description: "PRS provides comprehensive inspection, maintenance, switching, first-mile/last-mile, and rail car storage services across Western Canada." },
  { year: "2025-2026", title: "RAPID EXPANSION", description: "PRS increases its customer base by more than 160 percent and grows from one to seven full-time employees in under eight months. PRS delivers projects in collaboration with CN and CPKC, strengthening its role as a trusted third-party rail services partner." },
];

const teamMembers = [
  {
    name: "Tim Brewer",
    title: "Chief Executive Officer",
    image: "/images/team/tim-brewer.jpg",
    bio: "Tim Brewer was appointed CEO in October 2024, marking the beginning of PRS's strategic transformation. Under his leadership, the company diversified its services, invested in maintenance equipment, and built a more resilient business model.",
  },
  {
    name: "Ed Clarkson",
    title: "Maintenance Of Way Manager",
    image: "/images/team/ed-clarkson.jpg",
    bio: "I am a life long Winnipeger with over 40 years of rail experience in a variety of positions. Starting in Winnipeg Yard with CP Rail in the Yard Car Department I received my introduction to railroading. Hiring on with the Greater Winnipeg Water District Railway starting as a Track Worker becoming a Trainman and Engine Driver before moving into a management position as Supervisor of the Water and Waste Department Aqueduct Railway Department. I was brought on to assist Prairie Dog Central with the maintenance of their Heritage Train, Track Infrastructure and a Track Foreman with Prairie Rail Solutions. A position I remain in as Track Manager to this day.",
  },
  {
    name: "Max Kimacovich",
    title: "Operations Supervisor",
    image: "/images/team/max-kimacovich.jpg",
    bio: "With over a century of combined family service in the railroad industry, I bring a deep-rooted commitment to safety, professionalism, and operational excellence. My career has been built on upholding the highest standards of rule compliance while driving safe, efficient, and customer-focused rail operations.",
  },
  {
    name: "Eric Hadden",
    title: "Maintenance of Way Supervisor",
    image: "/images/team/eric-hadden.jpg",
    bio: "Eric Hadden is a TIGS-certified track inspector and a fourth-generation railroader with a deep-rooted commitment to the industry. He brings years of hands-on experience, technical precision, and heritage-driven pride to every project. Eric is also a CWB-qualified welder, adding a versatile skill set that supports safe, reliable, and high-quality rail infrastructure work.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-6 py-12">
      <section className="rail-hero relative mb-12 rounded-3xl p-12 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/extracted-dedup/0b7014_27c0b842b57f49a39f739d4d459e740e~mv2.jpg.jpg" alt="PRS Train" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="rail-hero-overlay relative z-10">
          <h1 className="text-4xl font-bold md:text-5xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">Precise Work. Reliable Service. Integrity Always.</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
            Prairie Rail Solutions delivers rail services grounded in safety, precision, and a commitment to doing the right thing, every time.
          </p>
        </div>
      </section>

      <section className="section-shell surface-glass mb-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)]">Who We Are</h2>
        <p className="mt-4 text-lg text-[color:rgb(17_34_53_/_0.85)]">
          We partner with customers who rely on rail access to move product, support production, and keep supply chains running, from grain elevators and industrial facilities to short line railways that don&apos;t have their own maintenance of way capability.
        </p>
      </section>

      <section className="section-shell surface-glass mb-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">Our Story</h2>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-[var(--brand-ink)] mb-4">PRAIRIE FORGED</h3>
            <p className="text-[color:rgb(17_34_53_/_0.82)] mb-4">
              Founded in 2012, Prairie Rail Solutions began as a support organization for the Prairie Dog Central Railway, initially focused on rail car storage for customers across Western Canada.
            </p>
            <p className="text-[color:rgb(17_34_53_/_0.82)] mb-4">
              While this model was successful in strong markets, it proved vulnerable during periods of disruption. The COVID-19 pandemic exposed the risks of relying on a single revenue stream and underscored the need for long-term operational stability.
            </p>
            <p className="text-[color:rgb(17_34_53_/_0.82)] mb-4">
              In October 2024, PRS appointed Chief Executive Officer Tim Brewer, marking the beginning of a strategic transformation. With a small but committed team, the company set out to diversify its services, strengthen its infrastructure, and build a more resilient business.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden">
              <Image src="/assets/extracted-dedup/0b7014_a1ce322c228542a983bea46f5e510bd2~mv2.jpg.jpg" alt="Railway work" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell surface-glass mb-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">Prairie Rail Solutions Timeline</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--brand-red)]/30 hidden md:block"></div>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative md:pl-12">
                <div className="absolute left-0 top-2 w-8 h-8 bg-[var(--brand-red)] rounded-full flex items-center justify-center text-white font-bold text-xs hidden md:flex">
                  {index + 1}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-red)]">{event.year}</p>
                  <h3 className="text-xl font-semibold text-[var(--brand-ink)] mt-1">{event.title}</h3>
                  <p className="text-sm text-[color:rgb(17_34_53_/_0.82)] mt-2">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell surface-glass mb-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">Why Us?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-[var(--brand-ink)]">Local Expertise. National Standards.</h3>
            <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              Our team blends prairie-region knowledge with Transport Canada compliance and best-practice rail operations to deliver track inspection and maintenance programs that are safe and effective.
            </p>
          </div>
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-[var(--brand-ink)]">Safety Without Compromise.</h3>
            <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              Every inspection, every repair, every decision starts with safety — not just checking a box, but protecting your people, your products, and your infrastructure.
            </p>
          </div>
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-[var(--brand-ink)]">Real Experience. Proven Results.</h3>
            <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              Our crew includes former Class I railway personnel, experienced MOW managers, Logistics and Supply Chain leadership, and certified inspectors, professionals who bring real world operational experience to every project.
            </p>
          </div>
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-[var(--brand-ink)]">Built for Long-Term Partnerships.</h3>
            <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              We don&apos;t treat our customers like clients on a ticket. We work alongside your team to protect your operation, preserve uptime, and support growth.
            </p>
          </div>
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-xl font-semibold text-[var(--brand-ink)]">Community-Driven, Industry-Focused.</h3>
            <p className="mt-2 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              We&apos;re proud to support heritage rail, regional supply chains, and modern industrial partners — balancing respect for the past with solutions for the future.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell surface-glass mb-8">
        <h2 className="text-3xl font-bold text-[var(--brand-ink)] mb-6">Mission & Vision</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-2xl font-semibold text-[var(--brand-ink)]">Mission</h3>
            <p className="mt-3 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              To deliver safe, reliable, and professional rail services that support the long-term sustainability of rail operations in our communities.
            </p>
          </div>
          <div className="elevate-hover rounded-2xl border border-white/60 bg-white/75 p-6">
            <h3 className="text-2xl font-semibold text-[var(--brand-ink)]">Vision</h3>
            <p className="mt-3 text-sm text-[color:rgb(17_34_53_/_0.82)]">
              To be the rail partner communities trust, setting a standard in the industry by combining technical excellence with prairie values. Building safer, more sustainable rail operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell surface-glass">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-[var(--brand-ink)]">Our Management Team</h2>
          <a href="/contact" className="btn-ghost hidden md:inline-block">Talk To Our Team</a>
        </div>
        <p className="text-sm text-[color:rgb(17_34_53_/_0.82)] mb-6">
          Led by experienced rail professionals, the PRS team includes inspectors, operators, trainers, and technical specialists — all committed to safe and efficient rail operations.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="elevate-hover rounded-2xl border border-white/60 bg-white/75 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--brand-ink)]">{member.name}</h3>
                <p className="text-sm font-medium text-[var(--brand-red)] mt-1">{member.title}</p>
                <p className="mt-3 text-sm text-[color:rgb(17_34_53_/_0.82)] line-clamp-4">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 md:hidden">
          <a href="/contact" className="btn-ghost w-full text-center block">Talk To Our Team</a>
        </div>
      </section>
    </div>
  );
}