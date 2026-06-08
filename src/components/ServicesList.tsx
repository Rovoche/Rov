import { SERVICES_DATA } from "../data";
import { motion } from "motion/react";

export default function ServicesList() {
  return (
    <section className="relative py-24 md:py-36 bg-brand-bg select-none" id="services">
      
      {/* Title block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <span className="text-[10px] font-mono tracking-[0.45em] uppercase text-brand-stone block mb-3">
          capabilities & valuation
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-black">
          Design Directory
        </h2>
        <div className="w-16 h-[1px] bg-brand-burgundy/40 mt-6" />
      </div>

      {/* Services rows index */}
      <div className="w-full border-t border-brand-stone/10">
        <div className="max-w-7xl mx-auto">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group w-full border-b border-brand-stone/10 bg-transparent transition-all duration-[400ms] ease-in-out hover:bg-brand-burgundy text-brand-black hover:text-brand-bg select-none py-10 sm:py-12 md:py-16 px-6 md:px-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 interactive-element cursor-pointer"
            >
              {/* Column 1: Ghost numbered index */}
              <div className="flex items-center">
                <span 
                  className="font-serif text-5xl sm:text-7xl md:text-8xl font-black transition-all duration-[400ms] text-transparent select-none opacity-30 group-hover:opacity-60"
                  style={{ WebkitTextStroke: "1px currentColor" }}
                >
                  {service.number}
                </span>
              </div>

              {/* Column 2: Service descriptor name */}
              <div className="flex-1 flex items-center sm:pl-8 md:pl-16">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-left">
                  {service.name}
                </h3>
              </div>

              {/* Column 3: Fixed Valuation range */}
              <div className="flex items-center justify-start sm:justify-end">
                <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-brand-stone group-hover:text-brand-bg/80 transition-colors duration-[400ms] whitespace-nowrap">
                  {service.priceRange}
                </span>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
