"use client";

import { useActionState } from "react";

import { submitContactForm } from "./actions";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactFormState,
  );

  return (
    <form action={formAction} className="surface-glass mt-8 grid gap-4 rounded-2xl p-6 md:grid-cols-2">
      <label className="text-sm font-semibold text-[var(--brand-ink)]">
        First Name*
        <input
          className="mt-1 w-full rounded-lg border border-[var(--line)] bg-white px-3 py-2"
          name="firstName"
          required
        />
      </label>
      <label className="text-sm font-semibold text-[var(--brand-ink)]">
        Last Name*
        <input
          className="mt-1 w-full rounded-lg border border-[var(--line)] bg-white px-3 py-2"
          name="lastName"
          required
        />
      </label>
      <label className="text-sm font-semibold text-[var(--brand-ink)]">
        Phone*
        <input className="mt-1 w-full rounded-lg border border-[var(--line)] bg-white px-3 py-2" name="phone" required />
      </label>
      <label className="text-sm font-semibold text-[var(--brand-ink)]">
        Email Address*
        <input
          className="mt-1 w-full rounded-lg border border-[var(--line)] bg-white px-3 py-2"
          name="email"
          type="email"
          required
        />
      </label>
      <label className="text-sm font-semibold text-[var(--brand-ink)] md:col-span-2">
        Service Interest
        <select className="mt-1 w-full rounded-lg border border-[var(--line)] bg-white px-3 py-2" name="service">
          <option>Track Inspection</option>
          <option>Track Maintenance</option>
          <option>Rail Operations</option>
          <option>Railcar Storage</option>
          <option>Mechanical Services</option>
        </select>
      </label>
      <label className="text-sm font-semibold text-[var(--brand-ink)] md:col-span-2">
        Message
        <textarea
          className="mt-1 w-full rounded-lg border border-[var(--line)] bg-white px-3 py-2"
          name="message"
          rows={5}
          placeholder="Share your rail operations challenge or project scope."
          required
        />
      </label>
      <button
        type="submit"
        className="btn-primary disabled:opacity-70 md:col-span-2 md:justify-self-start"
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Send"}
      </button>
      {state.message ? (
        <p
          className={`text-sm md:col-span-2 ${
            state.status === "success" ? "text-emerald-700" : "text-red-700"
          }`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
