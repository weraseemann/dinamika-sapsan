import { navItems } from "../data/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between px-6 py-3 lg:px-20">
        <a href="#top" className="flex items-center gap-3">
          <img src="/sapsan-logo.png" alt="Logo" className="h-12 w-auto" />

          <div>
            <p className="font-bold text-[#08285f]">Richard Pinkal Sapsan</p>

            <p className="text-xs text-slate-500">Wenn's dringend wird</p>
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
      </div>
    </header>
  );
}
