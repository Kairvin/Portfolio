import { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = ""
}: MagnetProps) => {
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = magnetRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Check if mouse is within padding
      if (distance < (rect.width / 2 + padding)) {
        el.style.transition = activeTransition;
        el.style.transform = `translate3d(${distanceX / strength}px, ${distanceY / strength}px, 0)`;
      } else {
        el.style.transition = inactiveTransition;
        el.style.transform = 'translate3d(0px, 0px, 0)';
      }
    };

    const handleMouseLeave = () => {
      el.style.transition = inactiveTransition;
      el.style.transform = 'translate3d(0px, 0px, 0)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div ref={magnetRef} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};
