import { motion, useTransform } from 'motion/react';
import { FaChevronDown } from 'react-icons/fa';

export default function ScrollIndicator({ scrollYProgress, onScrollNext }) {
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const scrollToNext = () => {
    if (typeof onScrollNext === 'function') return onScrollNext();
    const nextSection = document.getElementById('about-section');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
    >
      <motion.button
        onClick={scrollToNext}
        className="group flex flex-col items-center gap-3 cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden rounded-full">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"
          />
        </div>
        
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60 group-hover:text-white transition-colors"
        >
          <FaChevronDown size={24} />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
