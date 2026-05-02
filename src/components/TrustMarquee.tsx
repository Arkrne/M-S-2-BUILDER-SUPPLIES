import type { FC } from 'react';

const TrustMarquee: FC = () => {
  const items = [
    { text: 'FULLY ACCREDITED', color: 'bg-safety-red' },
    { text: 'PCAB REGISTERED', color: 'bg-deep-blue' },
    { text: 'DTI CERTIFIED', color: 'bg-white' },
    { text: 'LOCAL LGU PARTNER', color: 'bg-safety-red' },
  ];

  return (
    <div className="w-full bg-surface-container-highest border-b-white-1 py-4 overflow-hidden relative">
      <div className="animate-marquee font-label-mono text-label-mono text-on-surface tracking-[0.2em] uppercase">
        <div className="animate-marquee-content">
          {items.map((item, index) => (
            <span key={index} className="flex items-center">
              <span className={`w-2 h-2 ${item.color} mr-3`}></span> {item.text}
            </span>
          ))}
        </div>
        <div className="animate-marquee-content">
          {items.map((item, index) => (
            <span key={`dup-${index}`} className="flex items-center">
              <span className={`w-2 h-2 ${item.color} mr-3`}></span> {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustMarquee;
