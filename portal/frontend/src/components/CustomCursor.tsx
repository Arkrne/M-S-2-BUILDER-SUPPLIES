import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, select, textarea, .service-card');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-safety-red z-[9999] pointer-events-none hidden md:flex items-center justify-center mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(255, 0, 0, 0.1)' : 'transparent',
        }}
        transition={{ scale: { type: 'spring', damping: 20, stiffness: 300 } }}
      >
        <motion.div 
          animate={{ scale: isHovering ? 0 : 1 }}
          className="w-1 h-1 bg-safety-red" 
        />
        
        {/* Corners */}
        <div className="absolute -top-1 -left-1 w-2 h-0.5 bg-safety-red" />
        <div className="absolute -top-1 -left-1 w-0.5 h-2 bg-safety-red" />
        <div className="absolute -bottom-1 -right-1 w-2 h-0.5 bg-safety-red" />
        <div className="absolute -bottom-1 -right-1 w-0.5 h-2 bg-safety-red" />
      </motion.div>
      
      {/* Trailing Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-white z-[9998] pointer-events-none hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export default CustomCursor;
