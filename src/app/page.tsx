import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specialties />
        <WhyChooseUs />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
