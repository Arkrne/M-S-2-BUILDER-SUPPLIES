import type { FC } from 'react';
import { MessageCircle, Camera, Mail, Code, Palette, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

const Footer: FC = () => {
  return (
    <footer className="bg-[#0a0a0a] w-full border-t border-white/10 relative z-10 pt-24 pb-24 md:pb-12 overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-0 right-0 font-black text-[20vw] text-white/[0.02] leading-none select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
        MS2
      </div>

      <div className="container mx-auto px-8 md:px-margin relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Column 1: Brand & Socials */}
          <div className="space-y-8">
            <Magnetic>
              <div className="text-2xl font-black tracking-tighter text-white flex items-center cursor-pointer">
                <span className="text-safety-red">M</span>S<span className="text-safety-red">2</span> 
                <span className="ml-3 text-xs tracking-[0.4em] text-white/50">EST. 2011</span>
              </div>
            </Magnetic>
            <p className="text-white/40 font-body-md text-sm leading-relaxed max-w-xs uppercase tracking-widest">
              Providing heavy-duty engineering solutions and bulk hardware supplies for the islands of Catanduanes.
            </p>
            <div className="flex space-x-6">
              {[MessageCircle, Camera, Mail, Code, Palette].map((Icon, i) => (
                <Magnetic key={i}>
                  <a className="text-white/30 hover:text-safety-red transition-colors duration-300" href="#">
                    <Icon size={20} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Column 2: About Us */}
          <div>
            <h4 className="font-label-mono text-white uppercase tracking-[0.4em] text-[10px] mb-10 border-l-2 border-safety-red pl-4">Operations</h4>
            <ul className="space-y-6 font-label-bold text-xs uppercase tracking-[0.2em] text-white/40">
              {['Company History', 'Meet the Team', 'Employee Handbook', 'Careers'].map((link) => (
                <li key={link}>
                  <a className="hover:text-white transition-all duration-300 flex items-center group" href="#">
                    {link} <ArrowUpRight size={12} className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Helpful Links & Services */}
          <div>
            <h4 className="font-label-mono text-white uppercase tracking-[0.4em] text-[10px] mb-10 border-l-2 border-deep-blue pl-4">Resources</h4>
            <ul className="space-y-6 font-label-bold text-xs uppercase tracking-[0.2em] text-white/40">
              {['FAQs', 'Support', 'Client Portal', 'Marketing & Ads'].map((link) => (
                <li key={link}>
                  <a className="hover:text-white transition-all duration-300 flex items-center group" href="#">
                    {link} <ArrowUpRight size={12} className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-label-mono text-white uppercase tracking-[0.4em] text-[10px] mb-10 border-l-2 border-white pl-4">Headquarters</h4>
            <ul className="space-y-6 font-label-bold text-xs uppercase tracking-[0.2em] text-white/40">
              <li className="flex items-start">
                <Mail className="mr-4 mt-0.5 text-white/20" size={16} />
                <a className="hover:text-white transition-colors lowercase tracking-normal" href="mailto:ms2builder@gmail.com">ms2builder@gmail.com</a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-4 mt-0.5 text-white/20" size={16} />
                <span className="tracking-widest">0917 166 4315</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-4 mt-0.5 text-white/20" size={16} />
                <span className="leading-relaxed">Purok 3 Brgy. Bigaa,<br/>Virac, Catanduanes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="font-label-mono text-[9px] tracking-[0.5em] uppercase text-white/20 mb-6 md:mb-0">
            © 2026 MS2 BUILDER AND SUPPLIES INC. // SITE BY GEMINI CORE
          </div>
          <div className="flex space-x-12 font-label-mono text-[9px] tracking-[0.4em] uppercase">
            {['Privacy Policy', 'Terms of Service', 'Compliance'].map((link) => (
              <a key={link} className="text-white/20 hover:text-white transition-colors duration-300" href="#">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
