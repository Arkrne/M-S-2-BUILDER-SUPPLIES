import { useRef } from 'react';
import type { FC } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ShieldAlert } from 'lucide-react';

const Safety: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.safety-icon', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      scale: 0,
      rotate: -180,
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)'
    });

    gsap.from('.safety-text', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="mt-40 w-full relative overflow-hidden group">
      {/* Background kinetic grid */}
      <div className="absolute inset-0 bg-safety-red z-0">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 10px, transparent 10px, transparent 20px)' }}></div>
      </div>
      
      <div className="container mx-auto px-8 md:px-margin py-32 text-center max-w-5xl relative z-10">
        <div className="safety-icon mb-12 inline-block">
          <div className="relative">
            <ShieldAlert size={120} className="text-white" />
            <div className="absolute inset-0 bg-white blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse"></div>
          </div>
        </div>
        
        <h2 className="safety-text font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-12 leading-[0.9]">
          STRICT SAFETY<br />PROTOCOLS
        </h2>
        
        <div className="safety-text grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {[
            { label: 'OSHA COMPLIANT', desc: 'Zero-incident site management.' },
            { label: 'CERTIFIED CREW', desc: 'Expertly trained heavy machinery operators.' },
            { label: 'FULL INSURANCE', desc: 'Comprehensive coverage for every project.' },
          ].map((item, i) => (
            <div key={i} className="border-l border-white/30 pl-8 text-left">
              <div className="font-label-mono text-white text-sm mb-4 tracking-[0.3em] font-bold">{item.label}</div>
              <div className="font-body-md text-white/70 text-xs uppercase tracking-widest leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
        
        <p className="safety-text font-body-lg text-lg md:text-2xl text-white/90 leading-relaxed uppercase tracking-[0.2em] mt-24 max-w-4xl mx-auto border-t border-white/20 pt-12">
          We operate our machinery and manage our sites with an ironclad commitment to the safety of our crew, your property, and the public. <span className="font-black text-white underline decoration-white/30 underline-offset-8">FULLY INSURED. FULLY COMPLIANT.</span>
        </p>
      </div>
    </section>
  );
};

export default Safety;
