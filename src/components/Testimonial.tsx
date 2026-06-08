import { motion } from "motion/react";

export default function Testimonial() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen bg-brand-burgundy text-brand-bg flex flex-col justify-center items-center py-24 px-6 md:px-12 select-none overflow-hidden paper-texture">
      
      {/* Editorial Grid Lines Accent (faint background lines on burgundy) */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-10">
        <div className="border-r border-brand-bg"></div>
        <div className="border-r border-brand-bg"></div>
        <div className="border-r border-brand-bg"></div>
        <div className="pointer-events-none"></div>
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col justify-center items-center text-center z-10 w-full">
        
        {/* Enormous oversized burgundy quote marks - placed in the upper layer or as backdrop */}
        <div 
          className="absolute -top-16 md:-top-28 left-1/2 -translate-x-1/2 select-none text-[#401111] font-serif font-black text-[18rem] md:text-[25rem] opacity-75 leading-none h-20 flex items-center justify-center pt-24"
        >
          “
        </div>

        {/* The single-line high-impact testimonial text in Playfair Display serif */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-2xl sm:text-3xl md:text-5xl lg:text-5xl text-brand-bg leading-snug sm:leading-relaxed md:leading-snug tracking-tight font-light relative z-20 mt-12 mb-10 max-w-4xl"
        >
          “Our digital presence went from standard web templates to an unshakeable symbol of brand authority. Rovoche doesn't just decorate; they structure.”
        </motion.p>

        {/* Bottom quotes mark decoration - offset bottom */}
        <div className="w-12 h-[1px] bg-brand-bg/20 mb-8 z-10" />

        {/* Minimal human credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col items-center space-y-1 relative z-20"
        >
          <span className="font-sans text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#EAE3D5] font-light">
            Alhaji Tunde Olayinka
          </span>
          <span className="font-mono text-[9px] text-[#8C7B6E] uppercase tracking-[0.2em]">
            London · Lagos
          </span>
        </motion.div>

      </div>

    </section>
  );
}
