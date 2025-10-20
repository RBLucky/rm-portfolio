import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export const AnimatedTextLines = ({ text, className }) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  useGSAP(() => {
    if (lineRefs.current.length > 0) {
      gsap.from(lineRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }
  });

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => {
        
        // --- START OF UPDATED LOGIC ---
        
        // 1. Check if the line starts with "##"
        const isHeading = line.trim().startsWith("##");
        
        // 2. If it is a heading, remove the "##". Otherwise, use the line as-is.
        const lineText = isHeading ? line.trim().substring(2).trim() : line;
        
        // 3. Apply different styles based on whether it's a heading or not
        const lineClasses = isHeading
          ? "block font-cute text-xl tracking-wide text-white/90 mt-4 mb-2" // NEW: Cute font, smaller, with spacing
          : "block leading-relaxed tracking-wide text-pretty"; // Original classes
        
        // --- END OF UPDATED LOGIC ---

        return (
          <span
            key={index}
            ref={(el) => (lineRefs.current[index] = el)}
            className={lineClasses} // <-- Use our new dynamic classes
          >
            {lineText} {/* <-- Use our new cleaned-up text */}
          </span>
        );
      })}
    </div>
  );
};