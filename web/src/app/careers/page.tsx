import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Prairie Rail Solutions in operations, maintenance, and rail infrastructure support roles.",
};

const openings = [
  "Track Labourer",
  "Trackmobile Operator / Yard Maintenance Labourer",
  "Maintenance of Way Support",
];

export default function CareersPage() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-6 py-12">
      <section className="section-shell surface-glass">
        <h1 className="text-4xl font-bold text-[var(--brand-ink)]">Build Your Rail Career</h1>
        <p className="mt-3 max-w-3xl text-lg text-[color:rgb(17_34_53_/_0.85)]">
          Join a field-focused team committed to safety, professionalism, and keeping customer operations moving.
        </p>
      </section>

      <section className="elevate-hover mt-8 rounded-2xl border border-white/60 bg-white/75 p-6">
        <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">Current Openings</h2>
        <ul className="mt-4 space-y-2 text-[color:rgb(17_34_53_/_0.85)]">
          {openings.map((job) => (
            <li key={job}>- {job}</li>
          ))}
        </ul>
        <p id="apply" className="mt-5 text-sm text-[color:rgb(17_34_53_/_0.82)]">
          To apply, send your resume to operations@prairierailsolutions.com with the position title in your subject line.
        </p>
      </section>
    </div>
  );
}
