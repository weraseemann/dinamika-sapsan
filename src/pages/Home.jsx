import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Fleet from "../components/Fleet";
import ConsultingSection from "../components/ConsultingSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#f7f8fb] text-slate-950">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Fleet />
      <ConsultingSection />
      <Contact />
      <Footer />
    </main>
  );
}
