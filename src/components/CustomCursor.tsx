import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    // Hide normal native cursor
    document.body.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = 
        target.closest("a") || 
        target.closest("button") || 
        target.closest("input") || 
        target.closest("textarea") || 
        target.closest("[role='button']") ||
        target.closest("[data-hover='true']") ||
        target.classList.contains("interactive-element") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", updateHoverState, { passive: true });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", updateHoverState);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-[60ms] ease-out will-change-transform"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        marginLeft: isHovered ? "-4px" : "-12px", // dynamic offsets based on shape size
        marginTop: isHovered ? "-4px" : "-12px",
      }}
    >
      {isHovered ? (
        // Hover State: Solid burgundy elegant dot
        <div className="w-2.5 h-2.5 bg-brand-burgundy rounded-full transition-all duration-300 shadow-[0_2px_10px_rgba(92,26,26,0.3)]" />
      ) : (
        // Standard State: Raw, asymmetric geometric rock fragment
        <div 
          className="w-6 h-6 bg-brand-black transition-all duration-300"
          style={{
            clipPath: "polygon(36% 0%, 75% 8%, 97% 42%, 82% 84%, 32% 96%, 6% 67%, 12% 24%)",
            backgroundColor: "#1A1614",
          }}
        />
      )}
    </div>
  );
}
