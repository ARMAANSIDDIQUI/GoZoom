import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaCloud, FaRobot, FaCode, FaArrowRight, FaCogs, FaProjectDiagram, FaUserTie, FaNetworkWired, FaServer, FaPaintBrush, FaShieldAlt, FaMobileAlt, FaDatabase, FaMagic, FaChartLine, FaDesktop, FaComments, FaSearch, FaAndroid, FaApple, FaTabletAlt, FaGlobe, FaPython, FaLayerGroup, FaJava } from 'react-icons/fa';

const AllServices = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const translatedCategories = t('all_services_page.serviceCategories', { returnObjects: true });

    const serviceCategories = [
        {
            title: translatedCategories[0].title,
            icon: <FaCloud className="w-8 h-8 text-cyan-500" />,
            description: translatedCategories[0].description,
            services: [
                { name: translatedCategories[0].services[0].name, path: "/cloud-services", desc: translatedCategories[0].services[0].desc, icon: FaCloud },
                { name: t('header.devops_cloud_automation'), path: "/devops-services", desc: translatedCategories[0].services[1].desc, icon: FaServer },
                { name: translatedCategories[0].services[2].name, path: "/service-consulting", desc: translatedCategories[0].services[2].desc, icon: FaUserTie }
            ]
        },
        {
            title: translatedCategories[1].title,
            icon: <FaRobot className="w-8 h-8 text-fuchsia-500" />,
            description: translatedCategories[1].description,
            services: [
                { name: translatedCategories[1].services[0].name, path: "/ai-applications", desc: translatedCategories[1].services[0].desc, icon: FaRobot },
                { name: translatedCategories[1].services[1].name, path: "/chatbot", desc: translatedCategories[1].services[1].desc, icon: FaComments },
                { name: translatedCategories[1].services[2].name, path: "/ai-automation", desc: translatedCategories[1].services[2].desc, icon: FaCogs },
                { name: translatedCategories[1].services[3].name, path: "/agentic-development", desc: translatedCategories[1].services[3].desc, icon: FaProjectDiagram },
                { name: translatedCategories[1].services[4].name, path: "/ai-agent-customization", desc: translatedCategories[1].services[4].desc, icon: FaMagic },
                { name: translatedCategories[1].services[5].name, path: "/use-cases", desc: translatedCategories[1].services[5].desc, icon: FaChartLine }
            ]
        },
        {
            title: translatedCategories[2].title,
            icon: <FaCode className="w-8 h-8 text-indigo-500" />,
            description: translatedCategories[2].description,
            services: [
                { name: translatedCategories[2].services[0].name, path: "/web-development", desc: translatedCategories[2].services[0].desc, icon: FaGlobe },
                { name: translatedCategories[2].services[1].name, path: "/ui-ux-design", desc: translatedCategories[2].services[1].desc, icon: FaPaintBrush },
                { name: translatedCategories[2].services[2].name, path: "/cyber-security", desc: translatedCategories[2].services[2].desc, icon: FaShieldAlt },
                { name: translatedCategories[2].services[3].name, path: "/mobile-application-development", desc: translatedCategories[2].services[3].desc, icon: FaMobileAlt },
                { name: translatedCategories[2].services[4].name, path: "/react-native-development", desc: translatedCategories[2].services[4].desc, icon: FaMobileAlt },
                { name: translatedCategories[2].services[5].name, path: "/flutter-development", desc: translatedCategories[2].services[5].desc, icon: FaLayerGroup },
                { name: translatedCategories[2].services[6].name, path: "/swift-development", desc: translatedCategories[2].services[6].desc, icon: FaApple },
                { name: translatedCategories[2].services[7].name, path: "/android-development", desc: translatedCategories[2].services[7].desc, icon: FaAndroid },
                { name: translatedCategories[2].services[8].name, path: "/ios-development", desc: translatedCategories[2].services[8].desc, icon: FaApple },
                { name: translatedCategories[2].services[9].name, path: "/django-development", desc: translatedCategories[2].services[9].desc, icon: FaPython },
                { name: translatedCategories[2].services[10].name, path: "/java-development", desc: translatedCategories[2].services[10].desc, icon: FaJava },
                { name: translatedCategories[2].services[11].name, path: "/react-development", desc: translatedCategories[2].services[11].desc, icon: FaCode },
                { name: translatedCategories[2].services[12].name, path: "/nextjs-development", desc: translatedCategories[2].services[12].desc, icon: FaCode },
                { name: translatedCategories[2].services[13].name, path: "/angular-development", desc: translatedCategories[2].services[13].desc, icon: FaCode },
                { name: translatedCategories[2].services[14].name, path: "/laravel-development", desc: translatedCategories[2].services[14].desc, icon: FaDesktop },
                { name: translatedCategories[2].services[15].name, path: "/expert-seo-services", desc: translatedCategories[2].services[15].desc, icon: FaSearch },
                { name: translatedCategories[2].services[16].name, path: "/kiosks", desc: translatedCategories[2].services[16].desc, icon: FaTabletAlt }
            ]
        }
    ];

    const [query, setQuery] = useState('');

    const filteredCategories = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return serviceCategories;
        return serviceCategories
            .map((cat) => {
                const filteredServices = cat.services.filter(
                    (s) =>
                        s.name.toLowerCase().includes(q) ||
                        s.desc.toLowerCase().includes(q) ||
                        cat.title.toLowerCase().includes(q)
                );
                if (filteredServices.length === 0) return null;
                return { ...cat, services: filteredServices };
            })
            .filter(Boolean);
    }, [query, serviceCategories]);

    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-20 bg-[#0a112f] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[clamp(200px,50vw,600px)] h-[clamp(200px,50vw,600px)] rounded-full bg-indigo-500/25 blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-[clamp(150px,35vw,384px)] h-[clamp(150px,35vw,384px)] rounded-full bg-cyan-500/25 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>
                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                        <div className="flex-1 text-center flex flex-col items-center">
                            <h1 className="text-hero-title text-white mb-6 tracking-tight uppercase" data-aos="zoom-in">
                                {t('all_services_page.hero.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">{t('all_services_page.hero.title2')}</span>
                            </h1>
                            <p className="text-hero-desc text-indigo-100 max-w-3xl mb-10 font-medium" data-aos="fade-up" data-aos-delay="200">
                                {t('all_services_page.hero.desc')}
                            </p>
                            <div className="w-full max-w-xl mt-4 space-y-2" data-aos="fade-up" data-aos-delay="250">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-semibold text-white uppercase tracking-[0.15em] shadow-lg shadow-black/20 animate-wiggle-attn">
                                    {t('all_services_page.hero.search_label')}
                                </span>
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder={t('all_services_page.hero.search_placeholder')}
                                    className="w-full rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/70 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
                                />
                            </div>
                        </div>
                        <div className="flex-1 relative flex justify-center lg:justify-end w-full" data-aos="zoom-in" data-aos-delay="400">
                            <div className="relative w-full max-w-[350px] sm:max-w-[450px] aspect-square">
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
                                <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md shadow-2xl flex items-center justify-center p-6 sm:p-8 animate-float">
                                    <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-10 w-full h-full place-items-center">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center"><FaCloud className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" /></div>
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-fuchsia-500/20 flex items-center justify-center"><FaRobot className="w-6 h-6 sm:w-8 sm:h-8 text-fuchsia-400" /></div>
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center"><FaCode className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" /></div>
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-rose-500/20 flex items-center justify-center"><FaMobileAlt className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400" /></div>
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center"><FaDatabase className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" /></div>
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center"><FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" /></div>
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center"><FaServer className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" /></div>
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center"><FaChartLine className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" /></div>
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center"><FaMagic className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Categories */}
            <section className="py-24 relative z-20 -mt-10">
                <div className="container mx-auto px-6">
                    <div className="space-y-24">
                        {filteredCategories.length === 0 && (
                            <div className="text-center text-slate-500 text-lg" data-aos="fade-up">
                                {t('all_services_page.categories.no_results', { query })}
                            </div>
                        )}
                        {filteredCategories.map((category, idx) => (
                            <div key={idx} className="relative" data-aos="fade-up">
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="p-4 bg-white rounded-2xl shadow-lg border border-slate-100">
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-800">{category.title}</h2>
                                        <p className="text-slate-500 mt-1">{category.description}</p>
                                    </div>
                                </div>

                                {/* Services Grid */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.services.map((service, s_idx) => (
                                        <Link key={s_idx} to={service.path} className="group block h-full">
                                            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                                                    <FaArrowRight className="text-indigo-500" />
                                                </div>
                                                <div className="w-14 h-14 mb-4 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300 delay-75">
                                                    {service.icon ? <service.icon className="w-7 h-7 text-indigo-500" /> : <FaCode className="w-7 h-7 text-indigo-500" />}
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">{service.name}</h3>
                                                <p className="text-slate-600 flex-grow leading-relaxed">{service.desc}</p>
                                                <div className="mt-6 pt-4 border-t border-slate-50 relative overflow-hidden">
                                                    <span className="text-sm font-semibold text-indigo-500 flex items-center gap-2">{t('all_services_page.categories.explore')} <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" /></span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/HexPatterngrad4.jpg')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">{t('all_services_page.cta.title')}</h2>
                    <p className="text-indigo-100 mb-10 text-lg">{t('all_services_page.cta.desc')}</p>
                    <Link to="/contact" className="inline-block px-10 py-4 bg-white text-indigo-600 font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all">{t('all_services_page.cta.button')}</Link>
                </div>
            </section>
        </div>
    );
};

export default AllServices;
