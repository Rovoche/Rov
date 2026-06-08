import { motion } from "motion/react";
import ThreeCanvas from "./ThreeCanvas";

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex flex-col justify-between pt-36 pb-16 px-6 md:px-12 bg-[#F2EDE4] select-none paper-texture overflow-hidden" 
      id="hero"
    >
      {/* Editorial Grid Lines Accent (10% stone grey opacity forming asymmetric layout grid) */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 pointer-events-none">
        <div className="md:col-span-3 border-r border-[#8C7B6E]/10 h-full" />
        <div className="md:col-span-6 border-r border-[#8C7B6E]/10 h-full" />
        <div className="md:col-span-3 h-full" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-20">
        
        {/* Left Side: Editorial Typography Column (A24 Poster mood) */}
        <div className="md:col-span-5 flex flex-col justify-center space-y-8 text-left z-20">
          
          {/* Subtle Label Marker */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3 text-[10px] font-mono uppercase tracking-[0.35em] text-[#8C7B6E]"
          >
            <span>EST. 2022</span>
            <span>•</span>
            <span className="text-[#5C1A1A]">LAGOS • TO THE WORLD</span>
          </motion.div>

          {/* Headline to A24 Standards */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-semibold text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[4rem] text-brand-black leading-[1.1] tracking-tighter"
          >
            Digital presence,<br />
            crafted on solid ground.
          </motion.h1>

          {/* Sub-narrative text block */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm sm:text-base leading-relaxed text-[#8C7B6E] font-light max-w-md"
          >
            Bespoke web architecture for brands that demand distinction. Handcrafted directly in code with flawless unshakeable layouts.
          </motion.p>

          {/* Interactive micro element indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.0 }}
            className="flex items-center space-x-4 pt-4"
          >
            <div className="w-12 h-[1px] bg-[#5C1A1A]" />
            <span className="font-serif italic text-xs text-[#5C1A1A] tracking-wider">Move cursor to orbit 3D view</span>
          </motion.div>

        </div>

        {/* Right/Center: Interactive ThreeJS 3D WebGL centerpiece */}
        <div className="md:col-span-7 relative h-[450px] sm:h-[550px] md:h-[650px] w-full flex items-center justify-center order-first md:order-last">
          {/* Subtle frame behind 3D Scene */}
          <div className="absolute inset-4 rounded-xl border border-[#8C7B6E]/5 bg-[#F2EDE4]/30 pointer-events-none z-0" />
          
          {/* Three.js canvas loader */}
          <ThreeCanvas />
        </div>

      </div>

      {/* Hero Bottom Banner Segment */}
      <div className="relative w-full max-w-7xl mx-auto border-t border-[#8C7B6E]/15 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 z-20">
        <div className="flex flex-col">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8C7B6E]">ROOT MEANING</span>
          <span className="font-serif italic text-xs text-[#1A1614] mt-0.5">ROCHE — French word for rock. Unshakeable digital foundations.</span>
        </div>
        <div className="text-left sm:text-right">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8C7B6E]">CURRENT OUTPOST</span>
          <span className="font-serif italic text-xs text-[#1A1614] block mt-0.5">Lagos, Nigeria</span>
        </div>
      </div>

    </section>
  );
}
