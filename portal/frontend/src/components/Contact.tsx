import { FC, useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const Contact: FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'CONSTRUCTION SERVICES',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', category: 'CONSTRUCTION SERVICES', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="pt-32 pb-32 px-8 md:px-margin container mx-auto" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 border border-white/10 bg-surface shadow-2xl relative overflow-hidden group/container">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-deep-blue/5 transform skew-x-12 translate-x-1/2 group-hover/container:translate-x-1/3 transition-transform duration-1000"></div>

        <div className="p-8 md:p-20 border-b border-white/10 lg:border-b-0 lg:border-r border-white/10 relative z-10">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-1 bg-safety-red"></div>
            <h2 className="font-headline-md text-4xl text-white uppercase tracking-tighter">
              Initiate Request
            </h2>
          </div>
          
          <form className="space-y-12" onSubmit={handleSubmit}>
            <div className="relative group">
              <label className="block font-label-mono text-white/30 uppercase tracking-[0.3em] text-[9px] mb-4 group-focus-within:text-safety-red transition-colors">Full Name / Company</label>
              <input 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-0 border-b border-white/10 focus:border-safety-red focus:ring-0 text-white font-body-lg px-0 py-4 rounded-none transition-all placeholder:text-white/10" 
                placeholder="Ex. Industrial Corp Inc." 
                type="text"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <label className="block font-label-mono text-white/30 uppercase tracking-[0.3em] text-[9px] mb-4 group-focus-within:text-safety-red transition-colors">Direct Line</label>
                <input 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-transparent border-0 border-b border-white/10 focus:border-safety-red focus:ring-0 text-white font-body-lg px-0 py-4 rounded-none transition-all placeholder:text-white/10" 
                  placeholder="+63 9XX XXX XXXX" 
                  type="tel"
                />
              </div>
              <div className="relative group">
                <label className="block font-label-mono text-white/30 uppercase tracking-[0.3em] text-[9px] mb-4 group-focus-within:text-safety-red transition-colors">Category</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-transparent border-0 border-b border-white/10 focus:border-safety-red focus:ring-0 text-white font-body-lg px-0 py-4 rounded-none transition-all appearance-none cursor-pointer"
                >
                  <option className="bg-[#0a0a0a] text-white">CONSTRUCTION SERVICES</option>
                  <option className="bg-[#0a0a0a] text-white">EQUIPMENT RENTAL</option>
                  <option className="bg-[#0a0a0a] text-white">HARDWARE SUPPLIES</option>
                  <option className="bg-[#0a0a0a] text-white">GENERAL INQUIRY</option>
                </select>
              </div>
            </div>
            
            <div className="relative group">
              <label className="block font-label-mono text-white/30 uppercase tracking-[0.3em] text-[9px] mb-4 group-focus-within:text-safety-red transition-colors">Project Specifications</label>
              <textarea 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-transparent border-0 border-b border-white/10 focus:border-safety-red focus:ring-0 text-white font-body-lg px-0 py-4 rounded-none transition-all placeholder:text-white/10 resize-none" 
                placeholder="Briefly describe your requirements..." 
                rows={4}
              ></textarea>
            </div>
            
            <div className="flex items-center gap-8">
              <Magnetic>
                <motion.button 
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative overflow-hidden ${status === 'success' ? 'bg-green-600 border-green-600' : 'bg-safety-red border-safety-red'} text-white font-label-bold px-12 py-6 uppercase tracking-[0.3em] text-xs transition-all duration-500 border`} 
                  type="submit"
                >
                  <span className="relative z-10 flex items-center gap-3 transition-colors duration-300">
                    {status === 'loading' ? <Loader2 className="animate-spin" size={14} /> : status === 'success' ? <CheckCircle size={14} /> : 'Transmit Message'} 
                    {status === 'idle' && <Send size={14} />}
                  </span>
                  <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
                </motion.button>
              </Magnetic>
              
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="font-label-mono text-[9px] text-green-500 uppercase tracking-widest"
                  >
                    Transmission Successful.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
        
        <div className="p-8 md:p-20 flex flex-col justify-center bg-white/[0.01] relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.85] text-white uppercase tracking-tighter mb-16 border-l-8 border-deep-blue pl-8 text-reveal">
              BUILT ON TRUST.<br />
              <span className="text-white/20">BASED IN VIRAC.</span>
            </h2>
            
            <div className="space-y-12">
              {[
                { icon: Phone, label: 'Central Registry', val: '0917 166 4315' },
                { icon: Mail, label: 'Data Transmission', val: 'ms2builder@gmail.com' },
                { icon: MapPin, label: 'Operations Base', val: 'Purok 3 Brgy. Bigaa, Virac, Catanduanes' },
              ].map((item, i) => (
                <div key={i} className="flex items-start group/info">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center mr-8 group-hover/info:border-deep-blue group-hover/info:bg-deep-blue/10 transition-all duration-500">
                    <item.icon className="text-white/30 group-hover/info:text-deep-blue transition-colors duration-500" size={20} />
                  </div>
                  <div>
                    <div className="font-label-mono text-[9px] text-white/30 uppercase tracking-[0.4em] mb-2">{item.label}</div>
                    <div className="text-white font-body-lg uppercase tracking-widest text-sm md:text-base">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 text-[300px] font-black text-white/[0.02] select-none pointer-events-none">
            MS2
          </div>
        </div>
      </div>
      <style>{`.group:hover .relative.z-10 { color: #0a0a0a !important; }`}</style>
    </section>
  );
};

export default Contact;
