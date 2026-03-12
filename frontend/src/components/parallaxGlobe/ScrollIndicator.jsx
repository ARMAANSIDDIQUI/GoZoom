import { motion, useTransform } from 'motion/react';

export default function ScrollIndicator({ scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 z-20 pointer-events-none"
    >
      <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden rounded-full">
        <motion.div
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent"
        />
      </div>
    </motion.div>
  );
}
