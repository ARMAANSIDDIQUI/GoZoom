import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const TechSpotlight = () => {
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredTech, setHoveredTech] = useState(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const techStack = [
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'OpenAI', icon: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Three.js', icon: 'https://cdn.worldvectorlogo.com/logos/threejs-1.svg' },
        { name: 'Framer', icon: '/images/framer.png' },
        { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        { name: 'Vercel', icon: 'https://cdn.worldvectorlogo.com/logos/vercel.svg' },
        { name: 'Stripe', icon: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
        { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' }
    ];

    return (
        <section className="py-24 bg-[#050505] overflow-hidden relative">
            <div className="container mx-auto px-8 md:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-2/5" data-aos="fade-right">
                        <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
                            The build <br />
                            <span className="text-white/40">environment.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                            A proven stack for speed and scale. We leverage these high-trend technologies to ensure reliability and uncompromising polish.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-[#c85a4a] text-white font-bold rounded-full shadow-[0_10px_30px_rgba(200,90,74,0.3)] transition-all"
                        >
                            Start a project
                        </motion.button>
                    </div>

                    <div
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => {
                            setIsHovered(false);
                            setHoveredTech(null);
                        }}
                        className="lg:w-3/5 relative min-h-[400px] flex items-center justify-center p-4"
                        data-aos="fade-left"
                    >
                        {/* Spotlight Layer */}
                        <motion.div
                            className="absolute pointer-events-none inset-0 z-0 opacity-0 transition-opacity duration-300"
                            style={{
                                opacity: isHovered ? 1 : 0,
                                background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(200,90,74,0.15), transparent 80%)`
                            }}
                        />

                        {/* Floating Name Div */}
                        <AnimatePresence mode="wait">
                            {isHovered && hoveredTech && (
                                <motion.div
                                    key={hoveredTech}
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                    className="pointer-events-none px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl text-white font-bold text-sm tracking-wider z-50"
                                    style={{
                                        position: 'absolute',
                                        left: springX,
                                        top: springY,
                                        translateX: '-50%',
                                        translateY: '-160%',
                                    }}
                                >
                                    {hoveredTech}
                                    <div className="absolute inset-x-0 -bottom-1 flex justify-center">
                                        <div className="w-2 h-2 bg-white/10 backdrop-blur-xl border-r border-b border-white/20 rotate-45" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Grid of Icons - Optimized for 20 icons */}
                        <div className="grid grid-cols-4 md:grid-cols-5 gap-4 relative z-10">
                            {techStack.map((tech, idx) => (
                                <motion.div
                                    key={idx}
                                    onMouseEnter={() => setHoveredTech(tech.name)}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center p-5 group relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-90">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className={`w-12 h-12 md:w-14 md:h-14 object-contain transition-all duration-500 
                                                ${(tech.name === 'Next.js' || tech.name === 'Vercel' || tech.name === 'OpenAI' || tech.name === 'Three.js')
                                                    ? 'invert grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0'
                                                    : 'grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100'
                                                }`}
                                        />
                                    </div>

                                    {/* Border Glow for Spotlight */}
                                    <motion.div
                                        className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#c85a4a] to-transparent opacity-0 group-hover:opacity-100"
                                        layoutId="glow-border"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c85a4a]/5 rounded-full blur-[120px] -ml-64 -mb-64" />
        </section>
    );
};

export default TechSpotlight;
