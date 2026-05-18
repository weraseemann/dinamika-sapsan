import { useState } from "react";

export default function Consulting() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p className="text-lg leading-8 text-slate-600">
        Sapsan Transporte bietet professionelle Consulting - und
        Beratungsleistungen für Transport- und Logistiklösungen bis 3,5 Tonnen.
        Als zuverlässiger Partner für Privatpersonen und Unternehmen entwickeln
        wir flexible, effiziente und zielorientierte Konzepte für
        unterschiedlichste Transport- und Projektanforderungen.
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Ob kurzfristige Anfrage, besondere Route oder komplexe logistische
          Herausforderung - unser Team berät Sie kompetent, plant präzise und
          findet die passende Lösung für Ihr Vorhaben. Auch bei dringenden
          Transportanfragen reagieren wir schnell und zuverlässig, um eine
          reibungslose Umsetzung sicherzustellen.
        </p>
        {expanded && (
          <>
            {" "}
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Wir sind darauf spezialisiert, innovative und kreative Lösungswege
              zu entwickeln und Ihnen individuelle Möglichkeiten der
              Zusammenarbeit anzubieten. Dabei stehen Flexibilität, Effizienz
              und eine praxisorientierte
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Umsetzung stets im Mittelpunkt. Wenn Sie neue Wege suchen, um
                Projekte erfolgreich und unkompliziert zu realisieren,
                unterstützt Sie Sapsan mit maßgeschneiderten Konzepten und
                einzigartigen Lösungen für Ihre logistischen Herausforderungen.
              </p>
            </p>
          </>
        )}
      </p>

      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="mt-4 font-semibold text-[#ffc20e] transition hover:opacity-80"
      >
        {expanded ? "Weniger anzeigen" : "Mehr lesen"}
      </button>
    </div>
  );
}
