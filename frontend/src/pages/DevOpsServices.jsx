import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaDocker, FaLayerGroup, FaSyncAlt, FaServer, FaShieldAlt, FaCodeBranch, FaCheckCircle, FaCloudsmith } from 'react-icons/fa';

const DevOpsServices = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#0f172a] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="flex-1 text-center lg:text-left mx-auto lg:mx-0">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-6 uppercase tracking-wider" data-aos="fade-down">DevOps & Infrastructure</span>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight uppercase" data-aos="fade-down" data-aos-delay="100">
                                Kubernetes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">& Docker</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 max-w-2xl font-medium" data-aos="fade-up" data-aos-delay="200">
                                Modernize your deployment pipeline. We specialize in containerization, microservices architecture, and deploying high-availability clusters using Kubernetes and Docker.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full" data-aos="fade-up" data-aos-delay="300">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    Scale Your App <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex justify-center w-full lg:justify-end" data-aos="zoom-in" data-aos-delay="400">
                            <div className="relative w-full max-w-[450px] aspect-square animate-float">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-[3rem] blur-3xl"></div>
                                <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md shadow-2xl p-8 flex flex-col items-center justify-center gap-8">
                                    <div className="grid grid-cols-2 gap-8 w-full place-items-center">
                                        <div className="w-24 h-24 rounded-3xl bg-[#2496ED]/10 flex items-center justify-center shadow-lg border border-[#2496ED]/20"><FaDocker className="w-12 h-12 text-[#2496ED]" /></div>
                                        <div className="w-24 h-24 rounded-3xl bg-[#326CE5]/10 flex items-center justify-center shadow-lg border border-[#326CE5]/20"><FaLayerGroup className="w-12 h-12 text-[#326CE5]" /></div>
                                        <div className="w-24 h-24 rounded-3xl bg-cyan-500/10 flex items-center justify-center shadow-lg border border-cyan-500/20"><FaSyncAlt className="w-12 h-12 text-cyan-400" /></div>
                                        <div className="w-24 h-24 rounded-3xl bg-blue-500/10 flex items-center justify-center shadow-lg border border-blue-500/20"><FaServer className="w-12 h-12 text-blue-400" /></div>
                                    </div>
                                    <div className="w-2/3 h-1.5 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 rounded-full mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up">
                            <FaDocker className="text-[#2496ED] w-14 h-14 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Containerization (Docker)</h3>
                            <p className="text-slate-600">Standardizing your application environment so it runs identically on developer machines, staging, and production servers.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay="100">
                            <FaLayerGroup className="text-[#326CE5] w-14 h-14 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">K8s Orchestration</h3>
                            <p className="text-slate-600">Managing containerized workloads natively with Kubernetes. We handle load balancing, self-healing, and automated rollouts/rollbacks.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay="200">
                            <FaSyncAlt className="text-cyan-500 w-14 h-14 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">CI/CD Pipelines</h3>
                            <p className="text-slate-600">Automating the building, testing, and deployment of Docker images to your Kubernetes cluster on every commit using GitHub Actions or GitLab CI.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">What We Build & Automate</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">From complete architecture redesigns to seamless migrations, our expert engineers deliver robust cloud solutions.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Microservices Architecture', desc: 'Transitioning monolithic applications into agile, loosely-coupled microservices that scale independently and deploy rapidly.', icon: FaDocker },
                            { title: 'Infrastructure as Code (IaC)', desc: 'Managing your IT infrastructure using configuration files (Terraform, Ansible) to ensure repeatability, fewer errors, and instant environment spin-ups.', icon: FaCodeBranch },
                            { title: 'Continuous Integration', desc: 'Automated code testing and merging pipelines (GitHub Actions, Jenkins) to detect bugs early and maintain a pristine codebase.', icon: FaSyncAlt },
                            { title: 'Continuous Deployment', desc: 'Automated release strategies (blue/green, canary) ensuring zero-downtime updates and rapid feature delivery to your users.', icon: FaCloudsmith },
                            { title: 'Server Health Monitoring', desc: 'Implementing robust logging and monitoring stacks (Prometheus, Grafana, ELK) for real-time visibility into cluster health and alerting.', icon: FaLayerGroup },
                            { title: 'DevSecOps Implementation', desc: 'Integrating security checks, vulnerability scanning, and compliance audits directly into your deployment pipeline automatically.', icon: FaShieldAlt },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <item.icon className="w-10 h-10 text-blue-500 mb-4" />
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
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 text-cyan-700 font-bold text-sm mb-4">Why Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Why Choose Our DevOps Engineers?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: 'Kubernetes Certified', desc: 'Our team includes Certified Kubernetes Administrators (CKA) deeply experienced in designing and troubleshooting complex clusters.', icon: FaCheckCircle },
                            { title: 'Faster Time to Market', desc: 'By automating testing and deployment pipelines, we drastically reduce the time it takes to get new features from development to production.', icon: FaLayerGroup },
                            { title: 'High Availability Guarantees', desc: 'We design architectures with auto-scaling and self-healing configurations to ensure your application remains online during massive traffic spikes.', icon: FaServer },
                            { title: 'Cloud-Agnostic Approach', desc: 'We build portable containerized solutions that prevent vendor lock-in, allowing seamless migration between AWS, GCP, or Azure if needed.', icon: FaDocker }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold text-lg shadow-sm border border-blue-100">
                                    <item.icon className="w-5 h-5" />
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

export default DevOpsServices;
