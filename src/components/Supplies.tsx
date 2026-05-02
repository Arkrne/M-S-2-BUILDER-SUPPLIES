import type { FC } from 'react';
import { Hammer, HardHat, Construction, Package, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Supplies: FC = () => {
  return (
    <section className="pt-32 px-8 md:px-margin container mx-auto" id="supplies">
      <div className="border-b border-white/10 pb-stack-md mb-stack-lg flex justify-between items-end">
        <h2 className="font-headline-lg text-headline-lg text-white uppercase tracking-tighter">
          <span className="text-white/20 mr-4">04 //</span> Hardware & Supplies
        </h2>
        <div className="font-label-mono text-[10px] text-white/30 uppercase tracking-[0.5em] mb-2 hidden md:block">
          Inventory Control
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-white-1">
        {/* Main Featured Item */}
        <div className="md:col-span-8 border-b-white-1 md:border-r-white-1 bg-surface p-12 relative flex flex-col justify-end min-h-[500px] overflow-hidden group cursor-crosshair">
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          </div>
          
          <div className="absolute top-12 right-12">
            <motion.div 
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Construction className="text-safety-red opacity-20 group-hover:opacity-100 transition-opacity duration-700" size={120} />
            </motion.div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center bg-safety-red text-white font-label-mono text-[10px] uppercase px-4 py-1.5 mb-8 tracking-[0.3em] font-bold">
              <Package size={12} className="mr-2" /> Bulk Inventory Available
            </div>
            <h3 className="font-headline-lg text-6xl md:text-7xl leading-[0.8] text-white uppercase tracking-tighter mb-8 group-hover:translate-x-2 transition-transform duration-700">
              Cement & <br />Aggregates
            </h3>
            <p className="font-body-lg text-lg text-white/50 max-w-md mb-12 uppercase tracking-widest leading-relaxed">
              Premium grade Portland cement, crushed gravel, and washed sand sourced for massive structural requirements.
            </p>
            <div className="flex flex-wrap gap-8 font-label-mono text-white/30 uppercase text-[10px] tracking-[0.3em] border-t border-white/10 pt-8">
              <span className="hover:text-white transition-colors cursor-default">PORTLAND TYPE 1</span>
              <span className="hover:text-white transition-colors cursor-default">CRUSHED GRAVEL</span>
              <span className="hover:text-white transition-colors cursor-default">WASHED SAND</span>
            </div>
          </div>
        </div>

        {/* Secondary Items Column */}
        <div className="md:col-span-4 flex flex-col">
          <div className="h-1/2 border-b-white-1 bg-surface p-12 flex flex-col justify-between group cursor-pointer hover:bg-white/[0.02] transition-colors duration-500">
            <div className="flex justify-between items-start mb-8">
              <Hammer className="text-deep-blue group-hover:rotate-12 transition-transform duration-500" size={40} />
              <div className="border border-white/20 px-3 py-1 font-label-mono text-[10px] text-white/50 uppercase tracking-widest group-hover:border-white group-hover:text-white transition-colors">Industrial Grade</div>
            </div>
            <div>
              <h3 className="font-headline-md text-3xl text-white uppercase tracking-tight mb-4">Steel & Metals</h3>
              <p className="font-body-md text-white/40 mb-8 uppercase tracking-widest text-xs leading-loose">Rebars, structural steel beams, angular bars, and corrugated roofing sheets.</p>
              <Magnetic>
                <a className="text-white font-label-bold uppercase tracking-[0.3em] text-[10px] flex items-center group/link" href="#">
                  Technical Specs <ChevronRight size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </Magnetic>
            </div>
          </div>
          
          <div className="h-1/2 bg-surface p-12 flex flex-col justify-between group cursor-pointer hover:bg-white/[0.02] transition-colors duration-500 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 text-white/[0.03] font-black text-9xl select-none pointer-events-none group-hover:text-safety-red/5 transition-colors duration-700">04</div>
            <div className="flex justify-between items-start mb-8">
              <HardHat className="text-white group-hover:-rotate-12 transition-transform duration-500" size={40} />
            </div>
            <div>
              <h3 className="font-headline-md text-3xl text-white uppercase tracking-tight mb-4">Finishing & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['POWER TOOLS', 'PAINTS', 'PLUMBING'].map((item) => (
                  <span key={item} className="text-[9px] font-label-mono border border-white/10 px-3 py-1 text-white/30 uppercase tracking-widest group-hover:border-white/30 group-hover:text-white transition-all">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supplies;
