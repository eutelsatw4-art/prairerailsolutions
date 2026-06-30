import type { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk with Prairie Rail Solutions about inspections, maintenance, storage, and operations support.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-[96rem] px-6 py-12">
      <section className="section-shell surface-glass">
        <h1 className="text-4xl font-bold text-[var(--brand-ink)]">Talk to Our Team</h1>
        <h2 className="mt-3 text-2xl font-semibold text-[var(--brand-ink)]">
          Tell us what you&apos;re dealing with, we&apos;ll recommend the right solution and support plan.
        </h2>
      </section>

      <ContactForm />
    </div>
  );
}
