"use client";

import { useState } from "react";
import Image from "next/image";

export default function TeamMemberCard({
  name,
  title,
  image,
  bio,
}: {
  name: string;
  title: string;
  image: string;
  bio: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article className="elevate-hover rounded-2xl border border-white/60 bg-white/75 overflow-hidden">
        <div className="relative h-64 w-full">
          <Image src={image} alt={name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-[var(--brand-ink)]">{name}</h3>
          <p className="text-sm font-medium text-[var(--brand-red)] mt-1">{title}</p>
          <p className="mt-3 text-sm text-[color:rgb(17_34_53_/_0.82)] line-clamp-4">{bio}</p>
          <button
            onClick={() => setOpen(true)}
            className="mt-3 text-sm font-semibold text-[var(--brand-red)] hover:underline"
          >
            Read more
          </button>
        </div>
      </article>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-4">
              <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-xl">
                <Image src={image} alt={name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--brand-ink)]">{name}</h3>
                <p className="text-sm font-medium text-[var(--brand-red)]">{title}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-[color:rgb(17_34_53_/_0.85)] whitespace-pre-line">{bio}</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 btn-ghost"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}