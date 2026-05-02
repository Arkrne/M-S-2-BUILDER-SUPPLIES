import { useRef } from 'react';
import type { FC } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Blueprint: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the vertical lines
    gsap.from('.blueprint-v-line', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      scaleY: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: 'power4.inOut',
      transformOrigin: 'top'
    });

    gsap.from('.blueprint-item', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'expo.out',
    });
  }, { scope: containerRef });

  const steps = [
    { num: '01', title: 'SITE ASSESSMENT & LOGISTICS', desc: 'Deep topographical analysis and logistical routing for heavy machinery deployment.' },
    { num: '02', title: 'PROCUREMENT & STAGING', desc: 'Sourcing of high-grade raw materials and strategic staging at our Virac facility.' },
    { num: '03', title: 'HEAVY-DUTY EXECUTION', desc: 'Precision engineering and construction phase using our state-of-the-art fleet.' },
    { num: '04', title: 'TURNOVER & SUPPORT', desc: 'Final structural audit and handoff with comprehensive maintenance documentation.' },
  ];

  return (
    <section ref={containerRef} className="pt-32 px-8 md:px-margin container mx-auto relative overflow-hidden">
      <div className="border-b border-white/10 pb-stack-md mb-stack-lg flex justify-between items-end">
        <h2 className="font-headline-lg text-headline-lg text-white uppercase tracking-tighter">
          <span className="text-white/20 mr-4">02 //</span> THE BLUEPRINT
        </h2>
        <div className="font-label-mono text-[10px] text-white/30 uppercase tracking-[0.5em] mb-2 hidden md:block">
          Methodology
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 relative">
        {/* Vertical lines that draw themselves */}
        <div className="blueprint-v-line absolute left-0 top-0 w-px h-full bg-white/10 hidden md:block"></div>
        <div className="blueprint-v-line absolute left-1/4 top-0 w-px h-full bg-white/10 hidden md:block"></div>
        <div className="blueprint-v-line absolute left-2/4 top-0 w-px h-full bg-white/10 hidden md:block"></div>
        <div className="blueprint-v-line absolute left-3/4 top-0 w-px h-full bg-white/10 hidden md:block"></div>
        <div className="blueprint-v-line absolute right-0 top-0 w-px h-full bg-white/10 hidden md:block"></div>

        {steps.map((step, i) => (
          <div key={i} className="blueprint-item p-12 border-b border-white/10 group hover:bg-white/[0.02] transition-colors duration-500 min-h-[300px] flex flex-col">
            <div className="font-label-mono text-safety-red mb-8 text-2xl tracking-[0.3em] font-bold group-hover:translate-x-2 transition-transform duration-500">{step.num}</div>
            <h3 className="font-headline-md text-xl text-white uppercase tracking-widest mb-6 leading-tight group-hover:text-safety-red transition-colors duration-500">{step.title}</h3>
            <p className="font-body-md text-sm text-white/40 leading-relaxed uppercase tracking-widest mt-auto opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
              {step.desc}
            </p>
            
            {/* Corner deco */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-white/0 group-hover:border-safety-red transition-all duration-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"></div>
          </div>
        ))}
      </div>
      
      {/* Horizontal background lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/[0.03] pointer-events-none"></div>
    </section>
  );
};

export default Blueprint;
