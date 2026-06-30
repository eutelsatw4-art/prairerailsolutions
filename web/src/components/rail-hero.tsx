import Link from "next/link";

export default function RailHero() {
  return (
    <section className="rail-hero relative -mx-6 w-screen md:-mx-8 lg:-mx-12">
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
            {
              title: "Railway-Experienced Team",
              desc: "Former Class I and industrial rail professionals",
            },
            {
              title: "Compliance & Safety Focused",
              desc: "Built around standards, documentation, and prevention",
            },
            {
              title: "Industrial Switching Capability",
              desc: "Locomotives + operators for first/last mile and plant support",
            },
            {
              title: "Purpose-Built for Industry",
              desc: "Grain, industrial sidings and short line support",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg bg-black/30 p-4 text-white backdrop-blur-sm">
              <h3 className="font-bold text-amber-200">{item.title}</h3>
              <p className="mt-2 text-sm text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
