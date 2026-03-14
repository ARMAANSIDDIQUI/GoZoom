import { useMemo } from 'react';
import { motion, useTransform } from 'motion/react';

export default function ParallaxBackground({ scrollYProgress, mouseX, mouseY }) {
  // Match the reference parallax behavior: background layers drift on scroll and fade out near the end.
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const particlesY1 = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const particlesY2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  const bgX = useTransform(mouseX, [-1, 1], ['-2%', '2%']);
  const bgY = useTransform(mouseY, [-1, 1], ['-2%', '2%']);

  const lightX = useTransform(mouseX, [-1, 1], ['-20%', '20%']);
  const lightY = useTransform(mouseY, [-1, 1], ['-20%', '20%']);

  // Keep particle positions stable across renders (resize/zoom can otherwise reshuffle them).
  const particles1 = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      key: `p1-${i}`,
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 15,
      delay: -(Math.random() * 20),
    }));
  }, []);

  const particles2 = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      key: `p2-${i}`,
      size: Math.random() * 4 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 15 + 20,
      delay: -(Math.random() * 20),
    }));
  }, []);

  return (
    <motion.div 
      style={{ opacity, willChange: 'transform, opacity' }} 
      className="absolute inset-0 pointer-events-none"
    >
      {/* Dynamic Gradient Lighting */}
      <motion.div
        style={{ x: lightX, y: lightY, willChange: 'transform' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.15)_0%,rgba(0,245,160,0.05)_40%,transparent_70%)] blur-[100px]"
      />

      {/* Grid */}
      <motion.div
        style={{ y: gridY, x: bgX, willChange: 'transform' }}
        className="absolute inset-[-5%] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      {/* Particle Field - Layer 1 (Fast) */}
      <motion.div style={{ y: particlesY1, x: bgX, willChange: 'transform' }} className="absolute inset-[-10%]">
        {particles1.map((p) => (
          <div
            key={p.key}
            className="absolute rounded-full bg-white/40"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `${p.top}%`,
              left: `${p.left}%`,
              animation: `float ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Particle Field - Layer 2 (Slow) */}
      <motion.div style={{ y: particlesY2, willChange: 'transform' }} className="absolute inset-[-10%]">
        {particles2.map((p) => (
          <div
            key={p.key}
            className="absolute rounded-full bg-blue-500/20"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `${p.top}%`,
              left: `${p.left}%`,
              animation: `float ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
