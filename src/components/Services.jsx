import { services } from "../data/content";

export default function Services() {
  return (
    <section id="leistungen" className="w-full px-6 py-16 lg:px-20">
      <div className="max-w-3xl">
        <p className="font-bold uppercase tracking-[0.2em] text-[#ffc20e]">
          Leistungen
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-tight text-[#08285f]">
          Keine Standardlösung. Sondern Transport, der zum Auftrag passt.
        </h2>
      </div>

      <div className="mt-10 grid w-full gap-5 md:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#08285f] text-[#ffc20e]">
                <Icon size={26} />
              </div>

              <h3 className="mt-6 text-xl font-black text-[#08285f]">
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
