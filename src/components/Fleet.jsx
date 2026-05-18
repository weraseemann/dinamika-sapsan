import { CheckCircle2 } from "lucide-react";
import { benefits } from "../data/content";

export default function Fleet() {
  return (
    <section
      id="fuhrpark"
      className="w-full bg-[#08285f] px-6 py-20 text-white lg:px-20"
    >
      <div className="grid w-full gap-10 lg:grid-cols-2">
        <div>
          <p className="font-bold uppercase tracking-[0.2em] text-[#ffc20e]">
            Fuhrpark
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight">
            Flexibel, einsatzbereit und unabhängig.
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/75">
            Sapsan verfügt über einen modernen Fuhrpark mit mehr als 20
            Fahrzeugen. Dadurch sind wir flexibel aufgestellt und können
            gemeinsam mit unseren zuverlässigen Fahrern Transporte und
            logistische Einsätze in ganz Europa realisieren.
          </p>
          <p className="mt-5 text-lg leading-8 text-white/75">
            Unsere eigene Werkstatt mit erfahrenen Mechatronikern ermöglicht
            schnelle Wartungen und Reparaturen, wodurch wir unabhängig und
            jederzeit einsatzbereit bleiben. So können wir flexibel und
            effizient auf jede logistische Herausforderung reagieren.
          </p>
        </div>

        <div className="self-start rounded-[2rem] bg-white/10 p-8 ring-1 ring-white/10">
          <div className="flex flex-col items-start gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start justify-start gap-3 text-left"
              >
                <CheckCircle2
                  className="mt-1 flex-none text-[#ffc20e]"
                  size={22}
                />

                <p className="text-left font-semibold leading-6 text-white">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
