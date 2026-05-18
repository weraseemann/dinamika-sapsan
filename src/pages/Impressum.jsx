import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Impressum() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50 px-4 py-10 text-gray-800">
        <section className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm md:p-10">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">Impressum</h1>

          <h2 className="mt-8 text-xl font-semibold">Angaben gemäß § 5 DDG</h2>

          <p className="mt-3 leading-7">
            dinamika UG
            <br />
            Roman Deiloff
            <br />
            Hans-Henny-Jahnn-Weg 53
            <br />
            22085 Hamburg
            <br />
            Deutschland
          </p>

          <h2 className="mt-8 text-xl font-semibold">Kontakt</h2>

          <p className="mt-3 leading-7">
            E-Mail:{" "}
            <a
              href="mailto:info@dinamika.digital"
              className="text-blue-600 underline hover:text-blue-800"
            >
              info@dinamika.digital
            </a>
          </p>

          <h2 className="mt-8 text-xl font-semibold">
            Verantwortlich für den Inhalt
          </h2>

          <p className="mt-3 leading-7">
            Verantwortlich für journalistisch-redaktionelle Inhalte gemäß § 18
            Abs. 2 MStV:
            <br />
            Roman Deiloff
            <br />
            Anschrift wie oben angegeben.
          </p>

          <h2 className="mt-8 text-xl font-semibold">
            Verbraucherstreitbeilegung
          </h2>

          <p className="mt-3 leading-7">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Online-Streitbeilegung</h2>

          <p className="mt-3 leading-7">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>

          <h2 className="mt-8 text-xl font-semibold">Haftung für Inhalte</h2>

          <p className="mt-3 leading-7">
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur
            Überwachung übermittelter oder gespeicherter fremder Informationen
            besteht jedoch nicht.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Haftung für Links</h2>

          <p className="mt-3 leading-7">
            Unser Angebot kann Links zu externen Webseiten Dritter enthalten,
            auf deren Inhalte wir keinen Einfluss haben. Für diese fremden
            Inhalte übernehmen wir keine Gewähr. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber
            verantwortlich.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Urheberrecht</h2>

          <p className="mt-3 leading-7">
            Die durch uns erstellten Inhalte und Werke auf dieser Webseite
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung oder sonstige Nutzung außerhalb der Grenzen
            des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des
            jeweiligen Rechteinhabers.
          </p>

          <p className="mt-8 rounded-xl bg-gray-100 p-4 text-sm">
            Stand: Mai 2026
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
