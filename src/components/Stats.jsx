import { stats } from "../data/content";

export default function Stats() {
  return (
    <div className="mx-auto mt-8 grid grid-cols-1 max-w-[1200px] md:grid-cols-3 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-3xl bg-[#08285f] pt-[5px] pb-5 px-5 text-center text-white"
        >
          <p className="text-4xl font-black text-[#ffc20e]">{stat.value}</p>

          <p className="mt-1 text-lg text-white/75">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
