import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaBrain, FaMicrochip, FaRobot, FaLightbulb, FaNetworkWired, FaCheckCircle } from 'react-icons/fa';

const AiApplications = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#0a0a0a] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute inset-0 bg-[url('/images/HexPatterngrad4.jpg')] opacity-5 mix-blend-screen bg-cover bg-center"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold text-sm mb-6 uppercase tracking-wider">Machine Learning</span>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight uppercase">
                                AI Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400">Applications</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium">
                                Transform your business with intelligent applications that learn, adapt, and drive growth. Let data be your ultimate competitive advantage.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-rose-600 to-fuchsia-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-rose-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    Build AI App <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-2 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] border border-white/20 backdrop-blur-xl w-full max-w-[450px] shadow-[0_0_50px_rgba(225,29,72,0.3)] animate-float">
                                <img src="/images/20943839.jpg" alt="AI Applications" className="w-full h-auto rounded-[1.8rem] opacity-90" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-4">Core Capabilities</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-fuchsia-600">Engineered</span></h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300 text-center" data-aos="fade-up">
                            <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
                                <FaBrain className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Predictive Analytics</h3>
                            <p className="text-slate-600">Anticipate market trends and customer behavior using historical data and complex machine learning algorithms.</p>
                        </div>
                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300 text-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-20 h-20 bg-fuchsia-100 text-fuchsia-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
                                <FaMicrochip className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Neural Networks</h3>
                            <p className="text-slate-600">Deep learning models designed for image recognition, natural language processing, and complex pattern mapping.</p>
                        </div>
                        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300 text-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-2xl mx-auto flex items-center justify-center mb-6">
                                <FaRobot className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Smart Automation</h3>
                            <p className="text-slate-600">End-to-end automation of repetitive cognitive tasks, freeing your team to focus on strategic initiatives.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-fuchsia-100 text-fuchsia-700 font-bold text-sm mb-4">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">What We Build</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">From cutting-edge Generative AI to robust Recommendation Engines, our bespoke AI solutions cater to diverse industry needs.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Generative AI Applications', desc: 'Custom apps powered by LLMs (GPT-4, Llama 3) for content generation, coding assistants, and complex problem solving.', icon: FaBrain },
                            { title: 'Recommendation Engines', desc: 'Highly personalized product and content recommendation systems that drastically improve user engagement and sales.', icon: FaNetworkWired },
                            { title: 'Anomaly Detection System', desc: 'Real-time monitoring systems that use AI to detect fraud, network intrusions, or manufacturing defects instantly.', icon: FaLightbulb },
                            { title: 'AI-Enhanced CRMs', desc: 'Integrating AI into customer relationship management tools to predict leads, churn, and draft customer responses automatically.', icon: FaBrain },
                            { title: 'Speech & Audio Processing', desc: 'Applications capable of real-time transcription, sentiment analysis from voice, and voice cloning.', icon: FaNetworkWired },
                            { title: 'Autonomous Workflows', desc: 'Systems that chain multiple AI agents together to execute long-running, multi-step processes autonomously.', icon: FaMicrochip },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-fuchsia-500/10 transition-shadow duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <item.icon className="w-10 h-10 text-fuchsia-500 mb-4" />
                                <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-4">Why Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Why Choose Our AI Experts?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: 'Deep Technical Expertise', desc: 'Our engineers are proficient in PyTorch, TensorFlow, LangChain, and deploying models to edge devices or scalable cloud architectures.' },
                            { title: 'Data Privacy & Security', desc: 'We build systems with strict data segregation, ensuring your proprietary data never leaks into public models or third-party APIs inadvertently.' },
                            { title: 'End-to-End Delivery', desc: 'From initial data pipeline architecture and model training to frontend integration and MLOps maintenance, we handle the entire lifecycle.' },
                            { title: 'Performance Optimization', desc: 'We specialize in model quantization and caching strategies to ensure your AI applications respond instantly without exorbitant compute costs.' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 font-bold text-lg shadow-sm">
                                    <FaCheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AiApplications;
