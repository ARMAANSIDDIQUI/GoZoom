import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaNetworkWired, FaProjectDiagram, FaRobot, FaMicroscope, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa';

const AgenticDevelopment = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/HexPatterngrad4.jpg')] opacity-10 mix-blend-screen bg-cover bg-center"></div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] right-[20%] w-[clamp(200px,40vw,500px)] h-[clamp(200px,40vw,500px)] bg-indigo-600/30 rounded-full blur-[150px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] left-[20%] w-[clamp(150px,35vw,400px)] h-[clamp(150px,35vw,400px)] bg-violet-600/30 rounded-full blur-[150px]" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 text-center flex flex-col items-center mx-auto lg:mx-0" data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold text-sm mb-6 uppercase tracking-wider">The Future is Autonomous</span>
                            <h1 className="text-hero-title text-white mb-8 leading-[1.05] tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Agentic</span> Development
                            </h1>
                            <p className="text-hero-desc text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
                                We design, build, and deploy multi-agent LLM systems capable of reasoning, planning, and executing complex, multi-step tasks autonomously.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[180px] gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-center text-base sm:text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    Build Agents <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex justify-center w-full lg:justify-end" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative w-full max-w-[350px] sm:max-w-[450px] aspect-square animate-float">
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 rounded-[3rem] blur-3xl"></div>
                                <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md shadow-2xl p-8 flex flex-col items-center justify-center gap-8">
                                    <div className="grid grid-cols-2 gap-6 sm:gap-8 w-full place-items-center">
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-indigo-500/10 flex items-center justify-center shadow-lg border border-indigo-500/20"><FaRobot className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-400" /></div>
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-violet-500/10 flex items-center justify-center shadow-lg border border-violet-500/20"><FaNetworkWired className="w-8 h-8 sm:w-12 sm:h-12 text-violet-400" /></div>
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-fuchsia-500/10 flex items-center justify-center shadow-lg border border-fuchsia-500/20"><FaProjectDiagram className="w-8 h-8 sm:w-12 sm:h-12 text-fuchsia-400" /></div>
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-purple-500/10 flex items-center justify-center shadow-lg border border-purple-500/20"><FaMicroscope className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400" /></div>
                                    </div>
                                    <div className="w-2/3 h-1.5 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-full mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Beyond Simple Prompts</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Agentic development shifts the paradigm from chatbots that just answer questions to active agents that act. We utilize frameworks like LangChain, AutoGen, and custom cognitive architectures to build agents that break down goals, use external tools, and self-correct.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0 text-indigo-400">
                                        <FaProjectDiagram />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-1">Multi-Agent Swarms</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">Agents that collaborate, critique each other, and delegate tasks based on specialized roles.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0 text-violet-400">
                                        <FaNetworkWired />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-1">Tool Integration (RAG & APIs)</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">Agents that can browse the web, query private databases via RAG, and execute code in sandboxes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative" data-aos="fade-left">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 mt-12 backdrop-blur-md">
                                    <h4 className="text-indigo-400 font-bold mb-2">Planner Agent</h4>
                                    <p className="text-slate-400 text-xs text-left">Decomposes objectives into actionable JSON steps.</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                                    <h4 className="text-violet-400 font-bold mb-2">Executor Agent</h4>
                                    <p className="text-slate-400 text-xs text-left">Runs Python scripts and queries APIs based on plan.</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 col-span-2 text-center backdrop-blur-md">
                                    <h4 className="text-fuchsia-400 font-bold mb-2">Reviewer Agent</h4>
                                    <p className="text-slate-400 text-xs">Validates output and requests revisions if constraints fail.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build Section */}
            <section className="py-24 bg-black relative border-t border-white/5 overflow-hidden text-white">
                <div className="absolute inset-0 bg-[url('/images/HexPatterngrad4.jpg')] opacity-5 mix-blend-screen bg-cover bg-center"></div>

                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-violet-500/20 text-violet-300 font-bold text-sm mb-4 border border-violet-500/30">Capabilities</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">What We Build</h2>
                        <p className="text-xl text-slate-400 mt-6 max-w-3xl mx-auto">We architect specialized autonomous agents capable of transforming entire operational pipelines.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Research & Intelligence Agents', desc: 'Agents that scrape the web, read PDFs, synthesize vast amounts of competitive intelligence, and output structured reports automatically.', icon: FaMicroscope },
                            { title: 'Autonomous Coding Agents', desc: 'Engineering assistants that not only write boilerplate code but debug their own errors, write tests, and submit pull requests.', icon: FaProjectDiagram },
                            { title: 'Dynamic Trading Bots', desc: 'Agents that ingest live market data, interpret financial news sentiments, and execute algorithmic trades in real-time.', icon: FaExchangeAlt },
                            { title: 'Customer Success Swarms', desc: 'A network of agents where one drafts an email, another reviews it for tone, and a third fetches account data, ensuring perfect responses.', icon: FaRobot },
                            { title: 'Supply Chain Orchestrators', desc: 'Autonomous systems that monitor global logistics, predict disruptions based on news feeds, and automatically reroute shipments.', icon: FaNetworkWired },
                            { title: 'Cyber Defense Agents', desc: 'Active security bots that monitor network traffic, isolate compromised endpoints autonomously, and draft incident reports.', icon: FaShieldAlt },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-shadow duration-300 backdrop-blur-md group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center mb-6 border border-violet-500/30 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-violet-400" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-slate-900 relative text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-sm mb-4 border border-indigo-500/30">Why Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Why Pioneer with GoZoom?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: 'Advanced Framework Mastery', desc: 'We are experts in leveraging cutting-edge autonomous frameworks like AutoGen, LangGraph, and CrewAI to build robust multi-agent systems.', icon: FaNetworkWired },
                            { title: 'Deterministic Guardrails', desc: 'Agents can hallucinate. We specialize in building strict verification layers and deterministic fallback mechanisms to ensure agents never take destructive actions.', icon: FaShieldAlt },
                            { title: 'Scalable Infrastructure', desc: 'Running swarms of LLM agents requires intense compute management. Our DevOps team ensures your infrastructure auto-scales efficiently to manage API rate limits and costs.', icon: FaProjectDiagram },
                            { title: 'Custom Cognitive Architectures', desc: 'We don’t just use off-the-shelf scaffolding; we design custom reasoning loops (ReAct, Tree of Thoughts) tailored specifically to your business logic.', icon: FaRobot }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 font-bold text-lg border border-indigo-500/30 shadow-sm">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgenticDevelopment;
