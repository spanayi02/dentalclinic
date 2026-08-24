import { MotionConfig } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Journey from "./components/Journey";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
      >
        Μετάβαση στο περιεχόμενο
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <Journey />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
