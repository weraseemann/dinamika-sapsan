import { ArrowRight, HeartHandshake } from "lucide-react";
import Consulting from "./Consulting";

export default function ConsultingSection() {
  return (
    <section id="consulting" className="w-full px-6 py-20 lg:px-20">
      <div className="grid w-full items-center gap-10 rounded-[2.5rem] bg-white p-8 shadow-xl md:grid-cols-[0.8fr_1.2fr] lg:p-12">
        <div className="self-start rounded-[2rem] bg-[#ffc20e] p-8 text-[#08285f]">
          <HeartHandshake size={42} />

          <h2 className="mt-5 text-3xl font-black">
            Consulting für Ihre Transportanfrage
          </h2>
          <p className="mt-4">
            Sapsan garantiert: Zur richtigen Zeit, am richtigen Ort - zu fairen
            Konditionen.
          </p>
        </div>

        <div>
          <Consulting />

          <a
            href="#kontakt"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#08285f] px-6 py-3 font-bold text-white"
          >
            Beratung vereinbaren <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
