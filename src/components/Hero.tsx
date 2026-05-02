import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.5 } });

    // Initial state
    gsap.set('.word-reveal', { y: '100%' });

    tl.from(lineRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      duration: 1.2,
      ease: 'power4.inOut'
    })
    .to('.word-reveal', {
      y: '0%',
      stagger: 0.1,
      duration: 1.2,
    }, '-=0.8')
    .from(textRef.current, {
      opacity: 0,
      x: -30,
      duration: 1,
    }, '-=1')
    .from(buttonsRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
    }, '-=0.8');

    // Parallax for background image
    gsap.to('.hero-bg-img', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: containerRef });

  const renderTitle = () => {
    const lines = ["Heavy Duty", "Solutions", "For Catanduanes."];
    return lines.map((line, i) => (
      <div key={i} className="overflow-hidden mb-1">
        <span className={`word-reveal inline-block ${line === "Solutions" ? "text-safety-red" : ""}`}>
          {line}
        </span>
      </div>
    ));
  };

  return (
    <header ref={containerRef} className="relative w-full h-screen flex items-center bg-transparent overflow-hidden border-b-white-1 mt-16 md:mt-0">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <img 
          alt="" 
          className="hero-bg-img w-full h-[140%] object-cover object-center grayscale opacity-40 absolute top-[-20%]" 
          src="https://lh3.googleusercontent.com/aida/ADBb0uhI9ZU2PX9pF7PqA6MWbk-uf5P3ePfGwFvVFZxgmT9Rq_iHaZ_EKNOWgtYtTDzU1667nU-R02C3y5cBPCpy7P7v19lth9UhcoTxm8sKXCC4jHhLot3DXJdsSkje6yQpIQrzL7ay1nRzJbDEdrkaJqiMfvrXPE5JEs1i5RGS2k0gM97EM5IeNTH05mfxj4Xp9CAxVjYcWEfsoc4hGznccTZYuFA8cjagq78s4AOnydHA-xS1L8pEI5xPviNIImXODS0TvIU2zMCCYL4"
        />
      </div>
      
      <div className="relative z-20 container mx-auto px-8 md:px-margin grid grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-span-10 lg:col-span-8">
          <div className="flex">
            <div ref={lineRef} className="w-1.5 md:w-2 bg-safety-red mr-6 md:mr-10 h-auto self-stretch"></div>
            <div>
              <h1 ref={titleRef} className="font-display text-5xl md:text-display text-white mb-stack-md uppercase leading-[0.9] tracking-tighter">
                {renderTitle()}
              </h1>
              <p ref={textRef} className="font-body-lg text-body-lg text-secondary mb-stack-lg max-w-2xl uppercase tracking-[0.2em] border-l border-white/10 pl-6 ml-1 leading-relaxed">
                Premium construction services, heavy equipment rentals, and bulk hardware supplies based in Virac. Built on trust, driven by precision.
              </p>
              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-8 ml-1 items-start">
                <Magnetic>
                  <a className="group relative overflow-hidden bg-safety-red text-white font-label-bold text-label-bold px-10 py-5 uppercase tracking-widest transition-all duration-300 inline-flex items-center justify-center border border-safety-red" href="#contact">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-safety-red">Initiate Request</span>
                    <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
                    <ArrowRight className="ml-3 relative z-10 transition-colors duration-300 group-hover:text-safety-red" size={18} />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a className="group relative overflow-hidden bg-transparent text-white border border-white font-label-bold text-label-bold px-10 py-5 uppercase tracking-widest transition-all duration-300 inline-flex items-center justify-center" href="#services">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-background">Explore Services</span>
                    <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-expo"></div>
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-8 bottom-12 font-label-mono text-[10px] text-white/20 uppercase tracking-[0.4em] hidden md:block">
        Scale: 1:100 // Project: MS2-2026
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 hidden md:flex">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="rotate-90 font-label-mono text-[10px] text-white/40 uppercase tracking-[0.3em] whitespace-nowrap">Structural Integrity</div>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      </div>
    </header>
  );
};

export default Hero;
