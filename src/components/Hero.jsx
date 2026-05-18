import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden">
      <div className="absolute left-1/2 top-12 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ffc20e]/30 blur-3xl" />

      <div className="grid w-full items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="flex justify-center lg:justify-start">
            <span className="inline-flex rounded-full border border-[#ffc20e]/40 bg-white px-4 py-2 text-sm font-semibold text-[#08285f] shadow-sm">
              Direktfahrten · Sonderfahrten · Consulting
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-5xl font-black tracking-tight text-[#08285f] sm:text-6xl lg:text-7xl">
            Schnelle Transporte bis 3,5 Tonnen - europaweit geplant.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Sapsan Transporte unterstützt Unternehmen und Privatkunden mit
            flexiblen Transportdiensten, kurzfristiger Beratung und
            individuellen Lösungen - zur richtigen Zeit, am richtigen Ort, zu
            fairen Konditionen.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffc20e] px-7 py-4 font-bold text-[#08285f]"
            >
              Transport anfragen <ArrowRight size={19} />
            </a>

            <a
              href="https://wa.me/4917612223348"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 font-bold text-[#08285f]"
            >
              WhatsApp schreiben <MessageCircle size={19} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="rounded-[2rem] border border-white bg-white/90 p-8 shadow-2xl">
            <img
              //   src="/sapsan-logo.png"
              src={`${import.meta.env.BASE_URL}sapsan-logo.png`}
              alt="Sapsan Logo"
              className="mx-auto w-full max-w-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
