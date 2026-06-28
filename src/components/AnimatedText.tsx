import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {words.map((word, i) => {
        return (
          <span key={i} className="inline-flex mr-1 sm:mr-2">
            {word.split("").map((char, j) => {
              // Calculate overall index for this character
              const previousCharsCount = words.slice(0, i).join("").length;
              const charIndex = previousCharsCount + j;
              const totalChars = text.replace(/ /g, "").length;
              
              // Define the range where this character should animate from 0.2 to 1
              const start = charIndex / totalChars;
              const end = start + (1 / totalChars);
              
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

              return (
                <span key={j} className="relative inline-block">
                  <span className="invisible">{char}</span>
                  <motion.span 
                    className="absolute left-0 top-0"
                    style={{ opacity }}
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
