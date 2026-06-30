import type { Metadata } from "next";
import Link from "next/link";
import { Rajdhani, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const headingFont = Rajdhani({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prairierailsolutions.com"),
  title: {
    default: "Prairie Rail Solutions",
    template: "%s | Prairie Rail Solutions",
  },
  description:
    "Safety-first rail inspections, maintenance, and operations support for industrial and agricultural rail customers.",
};

const serviceLinks = [
  { title: "Track Inspection", href: "/track-inspection" },
  { title: "Routine Track Maintenance", href: "/routine-track-maintenance" },
  { title: "Preventative Maintenance", href: "/preventative-maintenance" },
  { title: "Railcar Storage", href: "/railcar-storage" },
  { title: "Locomotive & Railcar Maintenance", href: "/locomotive-and-railcar-maintenance" },
  { title: "Rail Operations", href: "/rail-operations" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--surface)]/88 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-[96rem] items-center justify-between px-6 py-4">
            <Link href="/" className="group">
              <p className="text-2xl font-bold tracking-wide text-[var(--brand-ink)]">PRS</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-steel)]/90">
                Prairie Rail Solutions
              </p>
            </Link>
            <nav aria-label="Primary" className="flex items-center gap-6 text-sm font-semibold text-[var(--brand-ink)]">
              <div className="relative group">
                <button className="hover:text-[var(--brand-red)] flex items-center gap-1">
                  Services
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-lg border border-white/60 bg-white/95 backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <Link href="/services" className="block px-3 py-2 text-sm hover:bg-[var(--sand)] rounded">
                      All Services
                    </Link>
                    <div className="my-1 border-t border-[var(--line)]"></div>
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-3 py-2 text-sm hover:bg-[var(--sand)] rounded"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/about" className="hover:text-[var(--brand-red)]">About</Link>
              <Link href="/careers" className="hover:text-[var(--brand-red)]">Careers</Link>
              <Link href="/contact" className="btn-primary">
                Request Quote
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 pb-8">{children}</main>
        <footer className="border-t border-[var(--line)] bg-[linear-gradient(140deg,#12253b,#1f3b56)] text-[var(--sand)]">
          <div className="mx-auto grid w-full max-w-[96rem] gap-8 px-6 py-10 text-sm md:grid-cols-3">
            <div>
              <p className="text-base font-semibold tracking-wide">Prairie Rail Solutions</p>
              <p className="mt-2 text-[13px] text-white/80">
                Safety-first rail support for industrial, agricultural, and short-line operations.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">Contact</p>
              <div className="mt-3 space-y-1.5 text-[14px]">
                <a className="hover:text-white" href="mailto:operations@prairierailsolutions.com">operations@prairierailsolutions.com</a>
                <a className="block hover:text-white" href="tel:+14319771231">(431) 977-1231</a>
                <p className="text-white/80">64099 Prairie Dog Trail, Rosser, MB</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">Quick Links</p>
              <div className="mt-3 grid gap-1.5 text-[14px]">
                <Link className="hover:text-white" href="/services">Services</Link>
                <Link className="hover:text-white" href="/about">Who We Are</Link>
                <Link className="hover:text-white" href="/careers">Careers</Link>
                <Link className="hover:text-white" href="/contact">Contact</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/65">
            © Prairie Rail Solutions
          </div>
        </footer>
      </body>
    </html>
  );
}