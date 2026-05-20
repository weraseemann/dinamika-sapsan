import { navItems } from "../data/content";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between px-6 py-3 lg:px-20">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}sapsan-logo.png`}
            alt="Logo"
            className="h-12 w-auto"
          />

          <div>
            <p className="font-bold text-[#08285f]">Richard Pinkal Sapsan</p>
            <p className="text-xs text-slate-500">Wenn&apos;s dringend wird</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#08285f]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+4917612223348"
          className="hidden rounded-full bg-[#08285f] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#08285f]/20 transition hover:-translate-y-0.5 hover:bg-[#0b3478] md:inline-flex"
        >
          Jetzt anrufen
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#08285f] shadow-sm transition hover:bg-slate-50 md:hidden"
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
        >
          <span className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-5 rounded bg-current transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded bg-current transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 block h-0.5 w-5 rounded bg-current transition ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200/70 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#08285f]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="tel:+4917612223348"
            className="mt-3 rounded-full bg-[#08285f] px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#08285f]/20 transition hover:bg-[#0b3478]"
          >
            Jetzt anrufen
          </a>
        </nav>
      </div>
    </header>
  );
}
