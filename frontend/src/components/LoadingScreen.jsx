import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LoadingScreen = ({ onFinished }) => {
    const { t } = useTranslation();
    const [isWritingDone, setIsWritingDone] = useState(false);

    useEffect(() => {
        // Timeline:
        // 0.0s: Start writing "g"
        // 1.5s: Start writing "z"
        // 3.0s: Writing done, start curtain lift
        const timer = setTimeout(() => {
            setIsWritingDone(true);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    const curtainVariants = {
        initial: { y: 0 },
        exit: {
            y: '-100%',
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.2
            }
        }
    };

    const pathVariants = {
        initial: { pathLength: 0, opacity: 0 },
        animate: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0a0a]"
            variants={curtainVariants}
            initial="initial"
            animate={isWritingDone ? "exit" : "initial"}
            onAnimationComplete={(definition) => {
                if (definition === "exit") {
                    onFinished();
                }
            }}
        >
            {/* Hexagon Beehive Background */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='100' viewBox='0 0 60 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15zM30 50l25.98 15v30L30 110 4.02 95V65z' fill-rule='evenodd' stroke='%2360a5fa' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 100px'
                }}
            />
            <div className="relative flex flex-col items-center">
                <svg
                    width="200"
                    height="120"
                    viewBox="0 0 200 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible"
                >
                    {/* Styled "g" */}
                    <motion.path
                        d="M60 40 C 40 40, 30 55, 30 70 C 30 85, 40 100, 60 100 C 80 100, 90 85, 90 70 L 90 110 C 90 125, 75 130, 60 130"
                        stroke="url(#gzGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        variants={pathVariants}
                        initial="initial"
                        animate="animate"
                    />
                    {/* Styled "z" */}
                    <motion.path
                        d="M110 50 L 160 50 L 110 100 L 160 100"
                        stroke="url(#gzGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        variants={pathVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 1.5 }}
                    />

                    {/* Subtle glow and Gradient */}
                    <defs>
                        <linearGradient id="gzGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-8 tracking-[0.3em] font-medium uppercase text-xs bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                >
                    {t('loading_screen.title')}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
