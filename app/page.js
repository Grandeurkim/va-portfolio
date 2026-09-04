import Navbar from "@/components/layout/Navbar";
import MobileHireButton from "@/components/layout/MobileHireButton";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Tools from "@/components/sections/Tools";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";



export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Tools />
        <Projects />
        <Contact />
      </main>
      <MobileHireButton />
    </>
  );
}