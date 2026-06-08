import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface ProjectIndexItem {
  number: string;
  name: string;
  category: string;
  link?: string;
  isSoon?: boolean;
}

export default function Portfolio() {
  const projects: ProjectIndexItem[] = [
    {
      number: "01",
      name: "Styledbylayo",
      category: "Luxury Fashion",
      link: "https://rovoche.github.io/luxuryfashion/"
    },
    {
      number: "02",
      name: "Glamsbykiki",
      category: "Beauty Atelier",
      link: "https://rovoche.github.io/Glam-and-Makeup/"
    },
    {
      number: "03",
      name: "Twayne Safe Haven",
      category: "Community NGO",
      link: "https://twaynesafehaven.org"
    },
    {
      number: "04",
      name: "Peasis",
      category: "Fashion & Couture",
      link: "https://peasis.com"
    },
    {
      number: "05",
      name: "Coming Soon",
      category: "Ateliers & Services",
      isSoon: true
    }
  ];

  return (
    <section 
      className="relative py-28 md:py-40 bg-[#F2EDE4] select-none text-brand-black" 
      id="work"
    >
      {/* Structural layout grid lines */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 pointer-events-none">
        <div className="md:col-span-3 border-r border-[#8C7B6E]/10 h-full" />
        <div className="md:col-span-6 border-r border-[#8C7B6E]/10 h-full" />
        <div className="md:col-span-3 h-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-20">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-32">
          <span className="text-[10px] font-mono tracking-[0.45em] uppercase text-brand-stone block mb-3">
            vouched digital systems
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-black">
            Selected Works
          </h2>
          <p className="font-serif italic text-xs text-brand-stone mt-2 max-w-sm">
            High-end web assets built on unshakeable structural grounds. Click to view the live flagship deployments.
          </p>
          <div className="w-12 h-[1px] bg-[#5C1A1A] mt-6" />
        </div>

        {/* Minimalist Editorial Index List */}
        <div className="border-t border-[#8C7B6E]/20">
          {projects.map((project, idx) => {
            const isSoon = project.isSoon;
            
            return (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`group border-b border-[#8C7B6E]/20 py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 ${
                  isSoon ? "opacity-45" : "hover:bg-[#5C1A1A]/5 px-2 md:px-4"
                }`}
              >
                {/* Column 1: Number Index + Name */}
                <div className="flex items-center space-x-6 md:space-x-10 min-w-[280px]">
                  <span className="font-mono text-xs text-[#8C7B6E] tracking-[0.1em]">{project.number}</span>
                  
                  {isSoon ? (
                    <span className="font-serif text-xl md:text-2xl font-light text-brand-black">
                      {project.name}
                    </span>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-xl md:text-2xl font-semibold text-brand-black group-hover:text-[#5C1A1A] transition-colors duration-300 hover:underline decoration-[#5C1A1A] underline-offset-4 cursor-pointer interactive-element"
                    >
                      {project.name}
                    </a>
                  )}
                </div>

                {/* Column 2: Category Description */}
                <div className="flex-1">
                  <span className="font-serif text-sm italic text-[#8C7B6E] group-hover:text-brand-black transition-colors duration-300">
                    {project.category}
                  </span>
                </div>

                {/* Column 3: Live Link Action Target */}
                <div className="flex items-center md:justify-end">
                  {isSoon ? (
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#8C7B6E] uppercase select-none">
                      IN PRODUCTION
                    </span>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-[#8C7B6E] group-hover:text-[#5C1A1A] transition-colors duration-300 py-1.5 px-3 border border-[#8C7B6E]/10 rounded hover:border-[#5C1A1A]/30 bg-transparent active:scale-95 cursor-pointer interactive-element"
                    >
                      <span>VIEW DEPLOYMENT</span>
                      <ArrowUpRight size={12} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
