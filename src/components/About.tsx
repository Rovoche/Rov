import { motion } from "motion/react";

export default function About() {
  return (
    <section 
      className="relative py-28 md:py-40 bg-[#F2EDE4] select-none text-brand-black" 
      id="about"
    >
      {/* Editorial layout grid */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 pointer-events-none">
        <div className="md:col-span-3 border-r border-[#8C7B6E]/10 h-full" />
        <div className="md:col-span-6 border-r border-[#8C7B6E]/10 h-full" />
        <div className="md:col-span-3 h-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 space-y-28 md:space-y-40 z-20">
        
        {/* PART 1: THE METHOD (01 / 02) */}
        <div>
          {/* Section Marker Header */}
          <div className="mb-16 md:mb-24">
            <span className="text-[10px] font-mono tracking-[0.45em] uppercase text-brand-stone block mb-3">
              operating philosophies
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-black">
              The Method
            </h2>
            <div className="w-12 h-[1px] bg-[#5C1A1A] mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {/* Method 01 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-left"
            >
              <div className="flex items-baseline space-x-4">
                <span className="font-serif text-4xl font-extrabold text-[#5C1A1A] italic">01</span>
                <h3 className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-brand-black">
                  ARCHITECTURE
                </h3>
              </div>
              <p className="font-serif text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-brand-black">
                "We map the strategy and information hierarchy before a single element is designed. Form follows strategy."
              </p>
              <p className="font-sans text-sm text-[#8C7B6E] font-light leading-relaxed max-w-md">
                Every layout is drafted like a load-bearing column. No superficial shapes. No decorative clutter. Every pixel survives because it serves a direct strategic conversion goal.
              </p>
            </motion.div>

            {/* Method 02 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6 text-left"
            >
              <div className="flex items-baseline space-x-4">
                <span className="font-serif text-4xl font-extrabold text-[#5C1A1A] italic">02</span>
                <h3 className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-brand-black">
                  PRECISION CRAFT
                </h3>
              </div>
              <p className="font-serif text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-brand-black">
                "Hand-crafted directly in code. No templates. No shortcuts. Pixel-precise on every screen."
              </p>
              <p className="font-sans text-sm text-[#8C7B6E] font-light leading-relaxed max-w-md">
                We avoid restrictive drag-and-drop page builders. We compile bespoke React and Tailwind systems directly to run at lightning-fast speeds with zero administrative overhead.
              </p>
            </motion.div>
          </div>
        </div>

        {/* PART 2: THE FOUNDER & CREATIVE DIRECTOR (Sammie Friday) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-[#8C7B6E]/15">
          {/* Logo Brand Silhouette backdrop */}
          <div className="lg:col-span-4 flex flex-col justify-start items-start space-y-4">
            <span className="text-[10px] font-mono tracking-[0.45em] uppercase text-brand-stone block">
              direction & command
            </span>
            <div className="font-serif font-black text-6xl text-[#5C1A1A]/10 select-none leading-none -ml-1">
              SAMMIE<br />
              FRIDAY
            </div>
            <div className="text-xs font-serif italic text-brand-stone mt-2">
              Lagos — London Outpost
            </div>
          </div>

          {/* Headline & Copy content */}
          <div className="lg:col-span-8 space-y-6 text-left max-w-2xl">
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-2xl sm:text-3xl font-normal text-brand-black tracking-tight"
            >
              Sammie Friday — Founder & Creative Director.
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="font-serif text-lg sm:text-xl md:text-2xl text-brand-black leading-relaxed font-light italic"
            >
              "A decade spent building organizations across Nigeria embedded a singular truth in my work: the difference between a brand people remember and one they scroll past lies entirely in how it is presented. ROVOCHÉ exists because premium brands deserve an unshakeable digital foundation."
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="w-10 h-[1px] bg-brand-stone/30" />
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8C7B6E]">
                CREATIVE CABINET // ROVOCHÉ
              </span>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
