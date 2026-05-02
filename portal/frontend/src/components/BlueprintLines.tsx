import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlueprintLines = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = gsap.utils.toArray('.blueprint-line');
    
    lines.forEach((line: any) => {
      gsap.fromTo(line, 
        { scaleX: 0, opacity: 0 },
        { 
          scaleX: 1, 
          opacity: 0.1, 
          duration: 2, 
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: line,
            start: 'top 90%',
            end: 'bottom 10%',
            scrub: 1,
          }
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      <div className="blueprint-line absolute top-1/4 left-0 w-full h-px bg-white transform-gpu origin-left"></div>
      <div className="blueprint-line absolute top-1/2 left-0 w-full h-px bg-white transform-gpu origin-left"></div>
      <div className="blueprint-line absolute top-3/4 left-0 w-full h-px bg-white transform-gpu origin-left"></div>
      <div className="blueprint-line absolute left-1/4 top-0 w-px h-full bg-white transform-gpu origin-top"></div>
      <div className="blueprint-line absolute left-1/2 top-0 w-px h-full bg-white transform-gpu origin-top"></div>
      <div className="blueprint-line absolute left-3/4 top-0 w-px h-full bg-white transform-gpu origin-top"></div>
    </div>
  );
};

export default BlueprintLines;
