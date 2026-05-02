import { useRef } from 'react';
import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Services: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.service-card');
    cards.forEach((card: any) => {
      const img = card.querySelector('img');
      const line = card.querySelector('.line-anim');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      tl.from(card, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from(line, {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 0.6,
      }, '-=0.4')
      .from(img, {
        scale: 1.5,
        duration: 1.5,
        ease: 'power2.out',
      }, '-=0.6');

      // Parallax effect on image
      gsap.to(img, {
        y: -30,
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
  }, { scope: containerRef });

  const services = [
    {
      title: 'Residential',
      desc: 'Precision-engineered residential builds, from custom homes to multi-unit complexes, ensuring lasting durability.',
      color: 'bg-safety-red',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN9dNZro_urDCKYRguAlj8PZK8FrJhin9SqFTsTX2wH8ZbURvasvvH5Gnzee86gxl3-rsYcXPYP_WNvDitImUWbyAsLh_2i6YxRTI0TfcR4iXCXP15cN8bmzaKAIHvDHSBi1w_P0Jj8j9pj7SmpKlw8406srtHHU1LW_TTAO5igAAdRevNQuegLzazsSnWhC7V0n5PUZ3jgkFJU_Ppri_SpALtgXhY3HXSTBWLvHhGEi9dyVslrsEjmMmyoeV-kfco2gsTJ9KTRIhu'
    },
    {
      title: 'Commercial',
      desc: 'Scalable commercial construction delivering functional, high-performance facilities for robust business operations.',
      color: 'bg-deep-blue',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjzs5SzahF-OiaeUjnVyjWHPIip9HSyGimBVgtdxacVfPcW5uZtGLUOVuw-QKJGxxirSAKvvkvWGw4ZGHCSmB1gkkOa0DhOV6oSNp40Ozdsfz2xvGwbtBRDjWl-DXHHTr-G0iNsKN05OnVpmd_wKuAkGcu_3llqgOU8yzOUn0mhMnlI1-kvglwdiJJITJDS2QDB8uDyvwh-U1H8AXMZEkvJeliRThxy3KjM5PYfUY4sHy6GVElGdtopCxWExDcTki2dpXDkQJBWeVg'
    },
    {
      title: 'Road Works',
      desc: 'Heavy-duty infrastructure development, including paving, grading, and civil engineering projects.',
      color: 'bg-white',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPDKOzVF7S4ZszEACdpQJUSvM6sF2WFfNICqgQev38qSE0ldTTzr-KbCqpcCaTmlmRRuTmXQw80cXhaBplJD4D1Slwlzo-haDYxIZJ0phbQaSkh-t17o78UJSyGiJc6afk-OPFCm3bp4Qvy_ktOMK2U3Bk7uTeJ825oZlFj_td-UOPG51GI47KYd3o28NDH_0CgRkRJyE3fqpY2G_J7IIw5Wswywf0Vh8DXinZhH0Nyu0ejeOt3RIxz4k-vke1ewSnlTmQNy8_Ne_9'
    }
  ];

  return (
    <section ref={containerRef} className="pt-24 px-8 md:px-margin container mx-auto overflow-hidden" id="services">
      <div className="border-b-white-1 pb-stack-md mb-stack-lg flex flex-col md:flex-row justify-between items-end">
        <h2 className="font-headline-lg text-headline-lg text-white uppercase tracking-tighter">
          <span className="text-safety-red mr-4">01 //</span> Engineering & Construction
        </h2>
        <div className="text-right mt-4 md:mt-0 font-label-mono text-label-mono text-secondary uppercase tracking-widest">
          Structural Integrity Guaranteed
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 border-l-white-1 border-t-white-1">
        {services.map((service, index) => (
          <div key={index} className="service-card border-r-white-1 border-b-white-1 p-8 group hover:bg-surface-container-high transition-colors relative overflow-hidden flex flex-col cursor-pointer">
            <div className="w-full h-64 mb-8 overflow-hidden relative">
              <img 
                alt={service.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                src={service.img}
              />
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-500 scale-95 group-hover:scale-100"></div>
            </div>
            <div className={`line-anim w-16 h-1 ${service.color} mb-6`}></div>
            <h3 className="font-headline-md text-3xl text-white mb-4 uppercase tracking-tight group-hover:text-safety-red transition-colors">{service.title}</h3>
            <p className="font-body-md text-secondary mb-8 leading-relaxed">{service.desc}</p>
            <a className="inline-flex items-center font-label-bold text-label-bold text-white group-hover:translate-x-2 transition-transform uppercase tracking-widest mt-auto" href="#">
              Explore <ArrowRight className="ml-3" size={18} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
