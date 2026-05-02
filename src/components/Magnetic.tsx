import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Magnetic = ({ children }: { children: React.ReactElement }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"});
    const yTo = gsap.quickTo(ref.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"});

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    const element = ref.current;
    element?.addEventListener("mousemove", handleMouseMove);
    element?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element?.removeEventListener("mousemove", handleMouseMove);
      element?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={ref} className="inline-block">
      {children}
    </div>
  );
};

export default Magnetic;
