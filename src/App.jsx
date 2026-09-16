import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import Process from "./components/Process";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import ServiceArea from "./components/ServiceArea";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <BeforeAfter />
        <Process />
        <About />
        <Testimonials />
        <CTA />
        <ServiceArea />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
