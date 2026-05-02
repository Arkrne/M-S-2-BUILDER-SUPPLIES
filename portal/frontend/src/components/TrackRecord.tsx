import { useRef } from 'react';
import type { FC } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TrackRecord: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.stat-item');
    
    items.forEach((item: any) => {
      const number = item.querySelector('.stat-number');
      const text = item.querySelector('.stat-text');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
        }
      });

      tl.from(number, {
        innerText: 0,
        duration: 2,
        snap: { innerText: 1 },
        ease: 'expo.out',
      })
      .from(text, {
        opacity: 0,
        x: -20,
        duration: 1,
      }, '-=1.5');
    });

    // Staggered entrance for images
    gsap.from('.record-img', {
      scrollTrigger: {
        trigger: '.record-grid',
        start: 'top 70%',
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: 'power4.out'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="pt-32 px-8 md:px-margin container mx-auto">
      <div className="border-b-white-1 pb-stack-md mb-stack-lg flex justify-between items-end">
        <h2 className="font-headline-lg text-headline-lg text-white uppercase tracking-tighter">
          <span className="text-white mr-4">05 //</span> PROVEN TRACK RECORD
        </h2>
        <div className="font-label-mono text-[10px] text-white/30 uppercase tracking-[0.5em] mb-2 hidden md:block">
          Operational History
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-l-white-1 border-t-white-1 p-8 md:p-16">
        <div className="lg:col-span-4 flex flex-col justify-center space-y-16 pr-8">
          <div className="stat-item group">
            <div className="flex items-baseline">
              <span className="stat-number font-display text-7xl md:text-8xl text-safety-red font-bold tracking-tighter">15</span>
              <span className="text-4xl text-safety-red font-bold ml-1">+</span>
            </div>
            <div className="stat-text font-label-mono text-white uppercase tracking-[0.3em] mt-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              Years Combined Experience
            </div>
          </div>
          
          <div className="stat-item group">
            <div className="flex items-baseline">
              <span className="stat-number font-display text-7xl md:text-8xl text-deep-blue font-bold tracking-tighter">100</span>
              <span className="text-4xl text-deep-blue font-bold ml-1">+</span>
            </div>
            <div className="stat-text font-label-mono text-white uppercase tracking-[0.3em] mt-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              Projects Completed
            </div>
          </div>
          
          <div className="stat-item group">
            <div className="font-display text-7xl md:text-8xl text-white font-bold tracking-tighter group-hover:text-safety-red transition-colors duration-500">ZERO</div>
            <div className="stat-text font-label-mono text-white uppercase tracking-[0.3em] mt-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              Compromise on Quality
            </div>
          </div>
        </div>
        
        <div className="record-grid lg:col-span-8 grid grid-cols-2 gap-4">
          <div className="record-img overflow-hidden">
            <img alt="Construction Site 1" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtN8PYgwqYlX-F8XcHvnTr_wb1zMzXN7nozWv-KuLDph43ADhCthuL4FEqzrluRVU6TUWXm16Gr7EPXDWBQqPl_5NcoCFlCnh7nr6PyDwQegmzrTkMRke5JGft3NzEdJk7T8_zonj--YfqR7UWpUTsMv8tIlHtZrLrjBvB6KImEUYuTWt9tjzW-HGD6VQCGDZWmm9RLFL7iAbw1ybKQSsmDUV1ufzhWGBQTVz_kE3OdhJIbhdnXSSU4SlU2FnMYQXSwkHPImnoJsS2"/>
          </div>
          <div className="record-img overflow-hidden">
            <img alt="Construction Site 2" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpCJc_fvdiNDSRPy8q-tM6imzyTh1pCFP5h7W0StAP4bnvZFvEOlX2Kb1Yknu9-ZSvDJZ-wzqEgEn3wRw-PWEHZbGAEK2z0UTEXJCulY4mb10WQ7EblecEPXsHKxK3Dhcv4JtYwyWZ1EK6uy1QRBtFYZ3TOjiMs63sjRS3ht2KvIZXyVFIrcDVrewK86noxogAPw1NfUjDMi66DZQLqoJzYB9-sYoA1CC9bEMtzQMtm-UKieWUZLa-ickS5PhM7W6NzfinDdzw6xoA"/>
          </div>
          <div className="record-img overflow-hidden col-span-2">
            <img alt="Construction Site 3" className="w-full h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8DAuclYJumQr1kLLa8w9JEDitM_ltoFNMu9n6G8YKgZsRoyE5ExBxtwflEBfHUQXAl7iBThs0WxCkCReboTGG3STD1UwMlnxAFX0QCCfC9A0PnelTsYTXcQb-f9JOAN1Ju1jwGH7db0KW4x--QbEYr1SLDjdy7-jePD06Cauv_X1jsQwalzZnhA8Lvm5-Q-JNtPlgUt3RggZ614xJxm-Y0ZHpj0Q0mGcwh7rdPb8rkeNrFkeP3f1MR7fPN80im5OMg185LskSJUdk"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
