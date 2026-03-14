import { motion, useTransform } from 'motion/react';

export default function RotatingShape({ scrollYProgress, mouseX, mouseY }) {
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], ['0%', '0%', '-120%']);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // 3D Tilt effect based on mouse
  const rotateX = useTransform(mouseY, [-1, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [-1, 1], [-15, 15]);

  return (
    <motion.div
      style={{ scale, y, opacity, willChange: 'transform, opacity' }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 perspective-[1000px]"
    >
      <motion.div
        style={{ rotateX, rotateY, willChange: 'transform' }}
        className="relative w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] min-w-[300px] min-h-[300px] transform-style-3d"
      >
        <motion.div
          style={{ rotate: scrollRotate, willChange: 'transform' }}
          className="absolute inset-0 flex items-center justify-center transform-style-3d"
        >
          {/* Core Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-gozoom-blue)] via-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)] rounded-full blur-[60px] opacity-20" />

          {/* Abstract Sphere */}
          <div className="relative w-3/4 h-3/4 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-[inset_0_0_50px_rgba(255,255,255,0.05)] flex items-center justify-center overflow-hidden">
            {/* Inner floating light */}
            <motion.div
              animate={{
                x: ['-25%', '25%', '-25%'],
                y: ['-25%', '25%', '-25%'],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-3/5 h-3/5 bg-[var(--color-gozoom-blue)]/30 rounded-full blur-[30px]"
            />
          </div>

          {/* Orbiting Rings */}
          <motion.div
            animate={{ rotateX: 360, rotateY: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-white/5"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          />
          <motion.div
            animate={{ rotateX: -360, rotateZ: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-[var(--color-gozoom-blue)]/20"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          />
          <motion.div
            animate={{ rotateY: -360, rotateZ: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-[var(--color-gozoom-green)]/20"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
