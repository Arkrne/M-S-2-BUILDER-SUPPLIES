import type { FC } from 'react';
import { Menu } from 'lucide-react';
import Magnetic from './Magnetic';

const Navbar: FC = () => {
  const navLinks = [
    { label: 'Construction', href: '#construction' },
    { label: 'Rentals', href: '#rentals' },
    { label: 'Supplies', href: '#supplies' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/10 flex justify-between items-center px-8 h-20 w-full max-w-none transition-all duration-300 hover:border-white/30">
        <div className="text-2xl font-black tracking-tighter text-white flex items-center group cursor-pointer">
          <span className="text-safety-red group-hover:text-white transition-colors duration-500">M</span>
          <span>S</span>
          <span className="text-safety-red group-hover:text-white transition-colors duration-500">2</span> 
          <span className="ml-3 text-sm font-bold tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-500">BUILDER & SUPPLIES</span>
        </div>
        
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Magnetic key={link.label}>
              <a 
                className="text-white/50 hover:text-white transition-colors font-display uppercase tracking-widest font-bold text-xs relative group" 
                href={link.href}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-safety-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            </Magnetic>
          ))}
        </div>

        <Magnetic>
          <a className="hidden md:inline-block bg-transparent text-white border border-white/20 px-8 py-3 font-display uppercase tracking-widest font-bold text-xs hover:bg-white hover:text-[#0a0a0a] transition-all duration-500" href="#contact">
            GET A QUOTE
          </a>
        </Magnetic>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white hover:text-safety-red transition-colors focus:outline-none">
          <Menu size={24} />
        </button>
      </nav>
      
      {/* Bottom Nav for Mobile */}
      <div className="md:hidden fixed bottom-0 w-full z-40 bg-[#111] border-t border-white/10 flex justify-around items-center h-20 shadow-2xl backdrop-blur-md">
        {[
          { label: 'Construct', icon: 'foundation', href: '#construction' },
          { label: 'Rentals', icon: 'front_loader', href: '#rentals' },
          { label: 'Supplies', icon: 'hardware', href: '#supplies' },
        ].map((item) => (
          <a key={item.label} className="flex flex-col items-center justify-center w-full h-full text-white/50 hover:text-safety-red transition-colors" href={item.href}>
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>{item.icon}</span>
            <span className="text-[10px] uppercase font-bold mt-2 tracking-widest">{item.label}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
