import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-6 md:py-8 flex justify-between items-center ${
        scrolled ? "bg-[#F2EDE4]/90 backdrop-blur-md border-b border-[#8C7B6E]/10" : "bg-transparent"
      }`}
    >
      {/* Top Left Logo: Elegant Serif */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-serif text-lg md:text-xl tracking-[0.25em] font-semibold text-brand-black hover:text-brand-burgundy transition-colors duration-300 uppercase cursor-pointer interactive-element"
      >
        ROVOCHÉ
      </button>

      {/* Top Right links: Spaced mini caps */}
      <div className="flex items-center space-x-6 md:space-x-8">
        <button 
          onClick={() => handleScrollTo("work")}
          className="font-sans text-[10px] md:text-xs font-medium tracking-[0.35em] text-brand-black hover:text-brand-burgundy transition-colors duration-300 uppercase cursor-pointer relative py-1 group interactive-element"
        >
          WORK
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-burgundy transition-all duration-300 group-hover:w-full" />
        </button>
        <button 
          onClick={() => handleScrollTo("contact")}
          className="font-sans text-[10px] md:text-xs font-medium tracking-[0.35em] text-brand-black hover:text-brand-burgundy transition-colors duration-300 uppercase cursor-pointer relative py-1 group interactive-element"
        >
          CONTACT
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-burgundy transition-all duration-300 group-hover:w-full" />
        </button>
      </div>
    </nav>
  );
}
