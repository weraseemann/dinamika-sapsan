import { Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="w-full px-6 pb-20 lg:px-20">
      <div className="grid w-full overflow-hidden rounded-[2.5rem] bg-[#0b3478] text-white lg:grid-cols-2">
        <div className="p-8 lg:p-12">
          <p className="font-bold uppercase tracking-[0.2em] text-[#ffc20e]">
            Kontakt
          </p>

          <h2 className="mt-3 text-4xl font-black">Transport anfragen</h2>

          <p className="mt-4 text-white/75">
            Senden Sie die Eckdaten Ihrer Anfrage: Abholort, Zielort,
            Zeitfenster, Gewicht/Volumen und Ansprechpartner.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href="tel:+4917612223348"
              className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 transition hover:bg-white/15"
            >
              <Phone className="text-[#ffc20e]" /> +49 176 12223348
            </a>

            <a
              href="mailto:info@sapsan-transporte.de"
              className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 transition hover:bg-white/15"
            >
              <Mail className="text-[#ffc20e]" /> info@sapsan-transporte.de
            </a>

            <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
              <Clock className="text-[#ffc20e]" /> Montag bis Freitag · 9-18 Uhr
            </div>
          </div>
          <div className="mt-4 overflow-hidden rounded-[2rem] border border-white/10">
            <iframe
              title="Sapsan Transporte Standort"
              src="https://www.google.com/maps?q=Richard+Pinkal+Sapsan+Transporte+Hannover&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>

        <div className="bg-white p-8 text-slate-950 lg:p-12">
          <form className="space-y-4">
            <input
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#08285f]"
              placeholder="Name / Unternehmen"
            />

            <input
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#08285f]"
              placeholder="E-Mail oder Telefonnummer"
            />

            <input
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#08285f]"
              placeholder="Abholort → Zielort"
            />

            <textarea
              className="min-h-64 w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#08285f]"
              placeholder="Was soll transportiert werden? Zeitfenster? Besonderheiten?"
            />
            <div className=" flex items-center gap-3">
              <input
                type="checkbox"
                readOnly
                className="self-start mt-1 h-5 w-5 accent-primary/90"
              />
              <p>
                Durch Klicken des „Anfrage versenden“-Buttons stimme ich zu,
                dass die im Formular eingegebenen personenbezogenen Daten zur
                Bearbeitung der Anfrage und der personalisierten Beratung
                verarbeitet werden. Meine Einwilligungen kann ich jederzeit mit
                Wirkung für die Zukunft postalisch oder per E-Mail widerrufen.
              </p>
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-[#ffc20e] px-6 py-4 font-black text-[#08285f] transition hover:bg-[#ffd34a]"
            >
              Anfrage versenden
            </button>

            <p className="text-xs leading-5 text-slate-500">
              Hinweis: Ihre Anfrage wird an unser E-mail-Service übermittelt.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
