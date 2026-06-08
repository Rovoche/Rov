import Navigation from "./components/Navigation";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import ScrollingMarquee from "./components/ScrollingMarquee";
import About from "./components/About";
import ServicesList from "./components/ServicesList";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F2EDE4] text-[#1A1614] overflow-hidden selection:bg-[#5C1A1A] selection:text-[#F2EDE4]">
      {/* Premium square custom cursor */}
      <CustomCursor />
      
      {/* Absolute top-left logo & magazine-rotated right-edge sidebar nav */}
      <Navigation />

      {/* Main Single Page Layout Content Stream */}
      <main className="relative">
        <Hero />
        <ScrollingMarquee />
        <About />
        <ServicesList />
        <Portfolio />
        <Testimonial />
        <Contact />
      </main>

      {/* Minimal 3-Column Footer */}
      <Footer />
    </div>
  );
}

