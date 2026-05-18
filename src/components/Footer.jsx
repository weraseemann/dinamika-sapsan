import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white px-6 py-10 lg:px-20">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-xl font-black text-[#08285f]">
            Sapsan Transporte
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
            Flexible Direkt- und Sonderfahrten bis 3,5 Tonnen.
          </p>
        </div>

        {/*  <div className="flex flex-col gap-3 text-sm text-slate-600 lg:items-end">
          <Link to="/impressum" className="transition hover:text-[#08285f]">
            Impressum
          </Link>

          <Link to="/datenschutz" className="transition hover:text-[#08285f]">
            Datenschutz
          </Link>

          <p className="pt-2 text-xs text-slate-400">
            © {new Date().getFullYear()} Sapsan Transporte
          </p>
        </div> */}

        <div className="flex flex-col gap-3 text-sm text-slate-600 lg:items-end">
          <span
            className="cursor-not-allowed text-slate-400"
            title="Seite derzeit nicht verfügbar"
          >
            Impressum
          </span>

          <span
            className="cursor-not-allowed text-slate-400"
            title="Seite derzeit nicht verfügbar"
          >
            Datenschutz
          </span>

          <p className="pt-2 text-xs text-slate-400">
            © {new Date().getFullYear()} Sapsan Transporte
          </p>
        </div>
      </div>
    </footer>
  );
}
