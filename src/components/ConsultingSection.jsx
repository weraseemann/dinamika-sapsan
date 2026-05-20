import { ArrowRight, HeartHandshake } from "lucide-react";
import Consulting from "./Consulting";
export default function ConsultingSection() {
  return (
    <section
      id="consulting"
      className="w-full px-4 py-14 sm:px-6 sm:py-20 lg:px-20"
    >
      <div className="grid w-full gap-6 rounded-3xl bg-white p-5 shadow-xl sm:p-8 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:gap-10 lg:rounded-[2.5rem] lg:p-12">
        <div className="self-start rounded-3xl bg-[#ffc20e] p-6 text-[#08285f] sm:p-8">
          <HeartHandshake size={38} />

          <h2 className="mt-5 text-2xl font-black leading-tight sm:text-3xl">
            Consulting für Ihre Transportanfrage
          </h2>

          <p className="mt-4 text-sm leading-6 sm:text-base">
            Sapsan garantiert: Zur richtigen Zeit, am richtigen Ort - zu fairen
            Konditionen.
          </p>
        </div>

        <div className="min-w-0">
          <Consulting />

          <a
            href="#kontakt"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#08285f] px-6 py-3 text-center text-sm font-bold text-white sm:w-auto sm:text-base"
          >
            Beratung vereinbaren <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
