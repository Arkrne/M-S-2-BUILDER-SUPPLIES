import { useRef } from 'react';
import type { FC } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Arsenal: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.fleet-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 150,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: 'expo.out',
    });
  }, { scope: containerRef });

  const fleet = [
    {
      title: 'Backhoe Excavators',
      models: 'CAT 320 / KOMATSU PC200',
      avail: '4 UNITS',
      tag: 'HEAVY DUTY',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYIoc5UgK8NNppOO-TDuK60gc5fi2Z8r_uRNFxD4CaF0b5V-ZlEhJsHnzw-XSPd-YfqGauTOOtJGPEwWTfSr5IXZQR6agP6Vz48RMIvs5tLS4hJTClnr_VOTi7Fa_U-F78yaIoboikCWclaQGS1aosYYn5ji70gnKvILdsWgGFTJ3y2aEoBHGj907K_mjCDkH4RUOxLiJNaOQGJmOSZaQ1znXKeUyGzUQCHqvMgO4cjwmFy-t_jdpUeAP3EfQFVAAzKw_744QcFAWC'
    },
    {
      title: 'Wheel Loaders',
      models: 'CAT 950 / VOLVO L120',
      avail: '2 UNITS',
      tag: 'VERSATILE',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbv_3vI8EUgnh-tXHZKfn1kOMXHtrBzPmDL4oTMmU9svS_yR0ibdMeVRZmALkJnaY6Om1irQ10eOLdUTfnCH5oVzfhZXTE-Wo97x3OdMOhACxcrxu6D0mkoBp2lRyMvMDFW8wERummOHEACufRb4yXi-_-HYX_OlrNsyL65H9nLHNpmLjv2A1_f_5NZ42Ps3WS9yMHLyTly45pE_zfARxKk1M88zrRpYKT71HUEPntoEQ5JrdvKPajGUlY1lumCuk4Ue023Y579p0n'
    },
    {
      title: 'Dump Trucks',
      models: 'ISUZU 10-WHEELER / FUSO',
      avail: '8 UNITS',
      tag: 'LOGISTICS',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATT8-7EHxx9bWxbVKj83ugawPOLzZd_pow7HyJMMOw_w18A4Y_0sFPvzamJjCci3MLpqtVlalUnlxEDMV84dNYLAn65HRRCVOH0GbZQdhBhKagBtt1QtbvR04eObGWAV9kmNQn0yFaXJgIJbeEbuxUpwCky-Fmrq79MTGt1CWMhbY3ghbomSVZfhzSfGuyYlsiJyNgO4vo2tvJX6mVTdGf2jEwcMvo8att3rsAC5AvrFszfBSJJ8vKBuiEkkg12Ff6hz7zso-BH9GH'
    }
  ];

  return (
    <section ref={containerRef} className="pt-32 px-8 md:px-margin container mx-auto" id="rentals">
      <div className="border-b-white-1 pb-stack-md mb-stack-lg flex justify-between items-end">
        <h2 className="font-headline-lg text-headline-lg text-white uppercase tracking-tighter">
          <span className="text-deep-blue mr-4">03 //</span> Heavy Equipment Fleet
        </h2>
        <div className="font-label-mono text-[10px] text-white/30 uppercase tracking-[0.5em] mb-2 hidden md:block">
          Asset Management
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-white-1">
        {fleet.map((item, index) => (
          <div key={index} className={`fleet-card md:col-span-4 ${index !== fleet.length - 1 ? 'border-b-white-1 md:border-b-0 md:border-r-white-1' : ''} bg-surface group relative overflow-hidden`}>
            <div className="h-80 bg-surface-container flex items-center justify-center border-b-white-1 relative overflow-hidden">
              <img 
                alt={item.title} 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                src={item.img}
              />
              <div className="absolute top-4 left-4 border border-white/20 px-3 py-1 font-label-mono text-label-mono text-white/50 text-[10px] bg-black/50 z-10 uppercase tracking-widest group-hover:border-safety-red group-hover:text-white transition-colors duration-500">
                {item.tag}
              </div>
              <div className="absolute top-4 right-4 border border-white px-2 py-1 font-label-mono text-label-mono text-white text-[10px] bg-black/80 z-10 uppercase font-bold">
                AVAIL: {item.avail}
              </div>
              
              {/* Scanline effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-20 -top-20 group-hover:top-full transition-all duration-1000 ease-linear pointer-events-none"></div>
            </div>
            <div className="p-8 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
              <h4 className="font-headline-md text-3xl text-white uppercase tracking-tight mb-3 group-hover:text-deep-blue transition-colors duration-500">{item.title}</h4>
              <div className={`font-label-mono text-label-mono text-secondary uppercase mb-8 tracking-[0.2em] border-l-2 border-white/20 pl-4 group-hover:border-deep-blue transition-colors duration-500`}>
                {item.models}
              </div>
              <a className="block w-full text-center border border-white/20 py-4 font-label-bold text-label-bold uppercase text-white hover:bg-white hover:text-background transition-all duration-500 tracking-widest relative overflow-hidden group/btn" href="#contact">
                <span className="relative z-10">Request Availability</span>
                <div className="absolute inset-0 bg-white transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>
            
            {/* Background number */}
            <div className="absolute -bottom-8 -right-4 font-display text-9xl text-white/5 uppercase select-none pointer-events-none group-hover:text-deep-blue/10 transition-colors duration-500">
              0{index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Arsenal;
