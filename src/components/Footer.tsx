export default function Footer() {
  return (
    <footer className="w-full bg-[#F2EDE4] select-none pb-12 pt-8 z-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Simple 1px rule above the footer */}
        <div className="w-full h-[1px] bg-[#8C7B6E]/20 mb-8" />

        {/* Minimalized Single-Line Symmetrical Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          
          {/* Symmetrical Left item */}
          <div className="flex items-center space-x-2">
            <span className="font-serif text-xs font-semibold text-brand-black tracking-widest uppercase">
              RVC
            </span>
            <span className="text-brand-stone/30">|</span>
            <span className="font-serif italic text-xs text-brand-stone">
              Form follows strategy.
            </span>
          </div>

          {/* Symmetrical Right: Precise requested footer statement */}
          <div>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#8C7B6E]">
              © 2026 ROVOCHÉ • LAGOS • LONDON • NEW YORK • ALL INFRASTRUCTURE ROOTED ON ROCK.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
