import { useRef, useEffect, useCallback } from 'react';
import { useScroll, useMotionValue, useSpring } from 'motion/react';
import ParallaxBackground from './ParallaxBackground';
import RotatingShape from './RotatingShape';
import HeroText from './HeroText';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth the scroll progress so the globe animations don't feel jittery/broken
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 40,
    restDelta: 0.001
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const scrollToNext = useCallback(() => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Browser zoom triggers a resize; keep the current scroll position stable.
  return (
    <div ref={containerRef} className="relative h-[180vh] bg-[#020617]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#020617]">
        <ParallaxBackground scrollYProgress={smoothScrollYProgress} mouseX={smoothMouseX} mouseY={smoothMouseY} />
        <RotatingShape scrollYProgress={smoothScrollYProgress} mouseX={smoothMouseX} mouseY={smoothMouseY} />
        <HeroText scrollYProgress={smoothScrollYProgress} onScrollNext={scrollToNext} />
        <ScrollIndicator scrollYProgress={smoothScrollYProgress} onScrollNext={scrollToNext} />
      </div>
    </div>
  );
}
