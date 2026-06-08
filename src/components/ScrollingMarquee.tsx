export default function ScrollingMarquee() {
  const statement = [
    { text: "Your brand deserves", isAccent: false },
    { text: " — a foundation — ", isAccent: true },
    { text: "that doesn't move", isAccent: false },
    { text: " — Rovoche — ", isAccent: true },
  ];

  // Render a continuous repeating text track
  const renderTrackItems = (times = 6) => {
    return Array.from({ length: times }).flatMap((_, i) =>
      statement.map((item, idx) => (
        <span
          key={`${i}-${idx}`}
          className={`inline-block whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic tracking-tight mx-4 select-none ${
            item.isAccent ? "text-brand-burgundy font-semibold" : "text-brand-stone/70"
          }`}
        >
          {item.text}
        </span>
      ))
    );
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-brand-bg flex flex-col justify-center space-y-[-10px] md:space-y-[-24px] select-none border-y border-brand-stone/10 paper-texture">
      
      {/* Track 1: Moving Left */}
      <div className="w-full overflow-hidden flex whitespace-nowrap py-3">
        <div className="flex animate-marquee-left whitespace-nowrap pr-4">
          {renderTrackItems()}
        </div>
      </div>

      {/* Track 2: Moving Right */}
      <div className="w-full overflow-hidden flex whitespace-nowrap py-3">
        <div className="flex animate-marquee-right whitespace-nowrap pl-4">
          {renderTrackItems()}
        </div>
      </div>

    </section>
  );
}
