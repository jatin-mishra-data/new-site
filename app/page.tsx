import Nav from "@/components/layout/Nav";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import Packages from "@/components/sections/Packages";
import About from "@/components/sections/About";
import Tools from "@/components/sections/Tools";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <Services />
        <Process />
        <Work />
        <Packages />
        <About />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
