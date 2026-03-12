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
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const scrollToNext = useCallback(() => {
    const heroEl = containerRef.current;
    if (heroEl) {
      const heroTop = heroEl.offsetTop;
      const heroMaxScroll = heroTop + heroEl.offsetHeight - window.innerHeight;
      const currentY = window.scrollY || 0;
      const nextY = Math.min(currentY + window.innerHeight, heroMaxScroll);

      if (nextY > currentY + 2) {
        window.scrollTo({ top: nextY, behavior: 'smooth' });
        return;
      }
    }

    const nextSection = document.getElementById('about-section');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
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
  useEffect(() => {
    const lastScrollY = { current: window.scrollY || 0 };

    const onScroll = () => {
      lastScrollY.current = window.scrollY || 0;
    };

    const restoreScroll = () => {
      const y = lastScrollY.current;
      window.scrollTo(0, y);
      requestAnimationFrame(() => window.scrollTo(0, y));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', restoreScroll);
    const vv = window.visualViewport;
    vv?.addEventListener('resize', restoreScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', restoreScroll);
      vv?.removeEventListener('resize', restoreScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#020617]">
        <ParallaxBackground scrollYProgress={smoothScrollYProgress} mouseX={smoothMouseX} mouseY={smoothMouseY} />
        <RotatingShape scrollYProgress={smoothScrollYProgress} mouseX={smoothMouseX} mouseY={smoothMouseY} />
        <HeroText scrollYProgress={smoothScrollYProgress} onScrollNext={scrollToNext} />
        <ScrollIndicator scrollYProgress={smoothScrollYProgress} onScrollNext={scrollToNext} />
      </div>
    </div>
  );
}
