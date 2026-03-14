import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaCode, FaCloud, FaRobot, FaUsers, FaTasks } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
    const { t } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
    const [workforceOpen, setWorkforceOpen] = useState(false);
    const [desktopWorkforceOpen, setDesktopWorkforceOpen] = useState(false);
    const servicesRef = useRef(null);
    const workforceRef = useRef(null);
    const servicesHideTimer = useRef(null);
    const workforceHideTimer = useRef(null);
    const location = useLocation();

    const servicesDropdownSections = [
        {
            id: 'cloud',
            heading: <span className="flex items-center gap-1.5"><FaCloud className="text-blue-500" /> {t('header.cloud_infrastructure')}</span>,
            links: [
                { to: '/cloud-services', label: t('header.cloud_services') },
                { to: '/devops-services', label: t('header.kubernetes_docker') },
                { to: '/service-consulting', label: t('header.it_strategy') }
            ]
        },
        {
            id: 'ai',
            heading: <span className="flex items-center gap-1.5"><FaRobot className="text-fuchsia-500" /> {t('header.ai')}</span>,
            links: [
                { to: '/ai-applications', label: t('header.ai_apps') },
                { to: '/chatbot', label: t('header.chatbot') },
                { to: '/ai-automation', label: t('header.task_automation') },
                { to: '/agentic-development', label: t('header.agentic_dev') },
                { to: '/ai-agent-customization', label: t('header.ai_customization') },
                { to: '/use-cases', label: t('header.industry_use_cases') }
            ]
        },
        {
            id: 'general',
            heading: <span className="flex items-center gap-1.5"><FaGlobe className="text-cyan-500" /> {t('header.general_services')}</span>,
            links: [
                { to: '/services', label: t('header.all_services') },
                { to: '/cyber-security', label: t('header.cyber_security') },
                { to: '/ui-ux-design', label: t('header.ui_ux') },
                { to: '/nextjs-development', label: t('header.nextjs') },
                { to: '/web-development', label: t('header.web_dev') },
                { to: '/react-native-development', label: t('header.react_native') },
                { to: '/flutter-development', label: t('header.flutter') },
                { to: '/swift-development', label: t('header.swift_ios') },
                { to: '/android-development', label: t('header.android_dev') },
                { to: '/ios-development', label: t('header.ios_dev') },
                { to: '/angular-development', label: t('header.angular_dev') },
                { to: '/react-development', label: t('header.react_dev') },
                { to: '/django-development', label: t('header.django_dev') },
                { to: '/java-development', label: t('header.java_enterprise') },
                { to: '/laravel-development', label: t('header.laravel_dev') },
                { to: '/expert-seo-services', label: t('header.seo_services') },
                { to: '/kiosks', label: t('header.kiosk') },
            ]
        },
        {
            id: 'hire',
            heading: <span className="flex items-center gap-1.5"><FaCode className="text-purple-500" /> {t('header.hire_developers')}</span>,
            links: [
                { to: '/hire-react-developer', label: t('header.hire_react') },
                { to: '/hire-angular-developer', label: t('header.hire_angular') },
                { to: '/hire-php-developer', label: t('header.hire_php') },
                { to: '/hire-jquery-developers', label: t('header.hire_jquery') },
                { to: '/hire-html-developer', label: t('header.hire_html') },
                { to: '/hire-codeIgniter-developers', label: t('header.hire_codeigniter') },
                { to: '/laravel-development-company', label: t('header.hire_laravel') },
            ]
        }
    ];

    const workforceDropdownSections = [
        {
            id: 'staffing',
            heading: <span className="flex items-center gap-1.5"><FaUsers className="text-blue-500" /> {t('header.talent_acquisition')}</span>,
            links: [
                { to: '/workforce-solutions/contingent-staffing', label: t('header.contingent_staffing') },
                { to: '/workforce-solutions/direct-hire', label: t('header.direct_hire') },
                { to: '/workforce-solutions/nearshore-offshore', label: t('header.nearshore_offshore') },
                { to: '/workforce-solutions/direct-sourcing', label: t('header.direct_sourcing') },
                { to: '/workforce-solutions/rpo', label: t('header.rpo') },
            ]
        },
        {
            id: 'management',
            heading: <span className="flex items-center gap-1.5"><FaTasks className="text-cyan-500" /> {t('header.compliance_ops')}</span>,
            links: [
                { to: '/workforce-solutions/global-payroll', label: t('header.global_payroll') },
                { to: '/workforce-solutions/statement-of-work', label: t('header.sow') },
                { to: '/workforce-solutions/diversity-spend', label: t('header.diversity_spend') },
                { to: '/workforce-solutions/gcc-bot', label: t('header.gcc_bot') },
                { to: '/workforce-solutions/mvp', label: t('header.mvp') },
            ]
        }
    ];

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setServicesOpen(false);
        setDesktopServicesOpen(false);
        setWorkforceOpen(false);
        setDesktopWorkforceOpen(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (servicesRef.current && !servicesRef.current.contains(e.target)) {
                setDesktopServicesOpen(false);
            }
            if (workforceRef.current && !workforceRef.current.contains(e.target)) {
                setDesktopWorkforceOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        return () => {
            if (servicesHideTimer.current) clearTimeout(servicesHideTimer.current);
            if (workforceHideTimer.current) clearTimeout(workforceHideTimer.current);
        };
    }, []);

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/' && !location.hash;
        }
        return location.pathname.startsWith(path);
    };

    const openServices = () => {
        if (servicesHideTimer.current) clearTimeout(servicesHideTimer.current);
        setDesktopServicesOpen(true);
    };
    const closeServicesWithDelay = () => {
        if (servicesHideTimer.current) clearTimeout(servicesHideTimer.current);
        servicesHideTimer.current = setTimeout(() => setDesktopServicesOpen(false), 200);
    };
    const openWorkforce = () => {
        if (workforceHideTimer.current) clearTimeout(workforceHideTimer.current);
        setDesktopWorkforceOpen(true);
    };
    const closeWorkforceWithDelay = () => {
        if (workforceHideTimer.current) clearTimeout(workforceHideTimer.current);
        workforceHideTimer.current = setTimeout(() => setDesktopWorkforceOpen(false), 200);
    };

    return (
        <>
            <header className={`fixed left-1/2 -translate-x-1/2 z-[9999] transition-all duration-700 ease-in-out ${isScrolled
                ? 'top-4 w-[95%] max-w-[1240px] h-[58px] bg-slate-950/90 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl shadow-black/40'
                : 'top-0 w-full h-[64px] bg-gradient-to-b from-black/75 via-black/30 to-transparent border-transparent'
                }`}>
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8 h-full flex items-center justify-between">

                    <Link to="/" className="flex-shrink-0 flex items-center group">
                        <div className="relative">
                            <img
                                src="/images/logo2.webp"
                                alt="Gozoom Technologies"
                                className={`h-[34px] lg:h-[38px] w-auto object-contain transition-all duration-300 group-hover:scale-105 brightness-110`}
                            />
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-1">

                        <Link
                            to="/"
                            className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${isActive('/')
                                ? isScrolled ? 'text-cyan-400 bg-white/10' : 'text-cyan-300 bg-white/10'
                                : isScrolled ? 'text-white/80 hover:text-cyan-400 hover:bg-white/5' : 'text-white/90 hover:text-white hover:bg-white/15'
                                }`}
                        >{t('header.nav_home')}</Link>

                        <Link
                            to="/integration"
                            className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${isActive('/integration')
                                ? isScrolled ? 'text-cyan-400 bg-white/10' : 'text-cyan-300 bg-white/10'
                                : isScrolled ? 'text-white/80 hover:text-cyan-400 hover:bg-white/5' : 'text-white/90 hover:text-white hover:bg-white/15'
                                }`}
                        >{t('header.nav_integration')}</Link>

                        <Link
                            to="/retail"
                            className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${isActive('/retail')
                                ? isScrolled ? 'text-cyan-400 bg-white/10' : 'text-cyan-300 bg-white/10'
                                : isScrolled ? 'text-white/80 hover:text-cyan-400 hover:bg-white/5' : 'text-white/90 hover:text-white hover:bg-white/15'
                                }`}
                        >{t('header.nav_retail')}</Link>

                        <div
                            className="relative"
                            ref={servicesRef}
                            onMouseEnter={openServices}
                            onMouseLeave={closeServicesWithDelay}
                        >
                            <Link
                                to="/services"
                                className={`flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${desktopServicesOpen || isActive('/services')
                                    ? isScrolled ? 'text-cyan-400 bg-white/15' : 'text-cyan-300 bg-white/15'
                                    : isScrolled ? 'text-white/80 hover:text-cyan-400 hover:bg-white/5' : 'text-white/90 hover:text-white hover:bg-white/15'
                                    }`}
                            >
                                {t('header.nav_it_solutions')}
                                <svg
                                    className={`w-3 h-3 transition-transform duration-300 ${desktopServicesOpen ? 'rotate-180' : ''}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Link>

                            <div className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] w-[300px] bg-white rounded-2xl shadow-2xl shadow-black/15 border border-slate-100 overflow-hidden transition-all duration-300 origin-top ${desktopServicesOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                                }`}>
                                <div className="max-h-[420px] overflow-y-auto py-2 px-2 scrollable-dropdown" data-lenis-prevent>
                                    {servicesDropdownSections.map((section) => (
                                        <div key={section.id} className="mb-1">
                                            <p className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">{section.heading}</p>
                                            {section.links.map(({ to, label }) => (
                                                <Link
                                                    key={to}
                                                    to={to}
                                                    className={`flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 group ${isActive(to)
                                                        ? 'text-cyan-600 bg-cyan-50 font-semibold'
                                                        : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
                                                        }`}
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                    {label}
                                                </Link>
                                            ))}
                                            <div className="mt-1 mb-1 mx-3 h-px bg-slate-100"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div
                            className="relative"
                            ref={workforceRef}
                            onMouseEnter={openWorkforce}
                            onMouseLeave={closeWorkforceWithDelay}
                        >
                            <Link
                                to="/workforce-solutions"
                                className={`flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${desktopWorkforceOpen || isActive('/workforce-solutions')
                                    ? isScrolled ? 'text-cyan-400 bg-white/15' : 'text-cyan-300 bg-white/15'
                                    : isScrolled ? 'text-white/80 hover:text-cyan-400 hover:bg-white/5' : 'text-white/90 hover:text-white hover:bg-white/15'
                                    }`}
                            >
                                {t('header.nav_workforce')}
                                <svg
                                    className={`w-3 h-3 transition-transform duration-300 ${desktopWorkforceOpen ? 'rotate-180' : ''}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Link>

                            <div className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] w-[300px] bg-white rounded-2xl shadow-2xl shadow-black/15 border border-slate-100 overflow-hidden transition-all duration-300 origin-top ${desktopWorkforceOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                                }`}>
                                <div className="max-h-[420px] overflow-y-auto py-2 px-2 scrollable-dropdown" data-lenis-prevent>
                                    {workforceDropdownSections.map((section) => (
                                        <div key={section.id} className="mb-1">
                                            <p className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">{section.heading}</p>
                                            {section.links.map(({ to, label }) => (
                                                <Link
                                                    key={to}
                                                    to={to}
                                                    className={`flex items-center gap-2.5 px-3 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 group ${isActive(to)
                                                        ? 'text-cyan-600 bg-cyan-50 font-semibold'
                                                        : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
                                                        }`}
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                    {label}
                                                </Link>
                                            ))}
                                            <div className="mt-1 mb-1 mx-3 h-px bg-slate-100"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/blogs"
                            className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${isActive('/blogs')
                                ? isScrolled ? 'text-cyan-400 bg-white/10' : 'text-cyan-300 bg-white/10'
                                : isScrolled ? 'text-white/80 hover:text-cyan-400 hover:bg-white/5' : 'text-white/90 hover:text-white hover:bg-white/15'
                                }`}
                        >{t('header.nav_blogs')}</Link>

                        <Link
                            to="/about"
                            className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${isActive('/about')
                                ? isScrolled ? 'text-cyan-400 bg-white/10' : 'text-cyan-300 bg-white/10'
                                : isScrolled ? 'text-white/80 hover:text-cyan-400 hover:bg-white/5' : 'text-white/90 hover:text-white hover:bg-white/15'
                                }`}
                        >{t('header.nav_about')}</Link>

                        <Link
                            to="/contact"
                            className={`ml-2 px-5 py-2 text-[13px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 hover:-translate-y-0.5 ${isScrolled
                                ? 'bg-white text-slate-900 shadow-lg shadow-white/10 hover:bg-cyan-50'
                                : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-slate-800'
                                }`}
                        >{t('header.nav_contact')}</Link>

                        <LanguageSwitcher isScrolled={isScrolled} />
                    </nav>

                    <button
                        className="lg:hidden flex flex-col gap-[5px] w-[34px] cursor-pointer group"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <span className={`w-full h-[2.5px] rounded-full transition-colors duration-300 ${isScrolled ? 'bg-slate-700' : 'bg-white'} group-hover:bg-cyan-400`}></span>
                        <span className={`w-[70%] h-[2.5px] rounded-full transition-colors duration-300 ${isScrolled ? 'bg-slate-700' : 'bg-white'} group-hover:bg-cyan-400`}></span>
                        <span className={`w-full h-[2.5px] rounded-full transition-colors duration-300 ${isScrolled ? 'bg-slate-700' : 'bg-white'} group-hover:bg-cyan-400`}></span>
                    </button>
                </div>
            </header>

            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            <nav className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[10001] lg:hidden transform transition-transform duration-500 ease-out shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between px-5 h-[64px] border-b border-slate-100">
                    <img src="/images/logo2.webp" alt="Gozoom" className="h-9 w-auto object-contain" />
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="overflow-y-auto h-[calc(100%-64px)] p-4" data-lenis-prevent>
                    <ul className="space-y-1">
                        {[
                            { to: '/', label: t('header.home_title') },
                            { to: '/integration', label: t('header.integration_title') },
                            { to: '/retail', label: t('header.retail_title') },
                            { to: '/blogs', label: t('header.blogs_title') },
                            { to: '/about', label: t('header.about_title') },
                        ].map(({ to, label }) => (
                            <li key={to}>
                                <Link
                                    to={to}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-semibold transition-all ${isActive(to)
                                        ? 'bg-cyan-50 text-cyan-600'
                                        : 'text-slate-700 hover:bg-slate-50 hover:text-cyan-600'
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}


                        <li>
                            <button
                                onClick={() => setServicesOpen(v => !v)}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-semibold text-slate-700 hover:bg-slate-50 transition-all"
                            >
                                {t('header.it_solutions_title')}
                                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            {servicesOpen && (
                                <div className="ml-4 mt-1 pl-3 border-l-2 border-cyan-100 space-y-1">
                                    <Link to="/#services-section" className="block px-3 py-2 text-[13px] font-bold text-cyan-700 hover:bg-cyan-50 rounded-lg mb-2">{t('header.view_services')}</Link>
                                    <Link to="/services" className="block px-3 py-2 text-[12px] font-medium text-slate-500 hover:text-cyan-600">{t('header.all_services_page')}</Link>
                                    {servicesDropdownSections.map((section) => (
                                        <div key={section.id}>
                                            <p className="px-3 pt-2 pb-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">{section.heading}</p>
                                            {section.links.map(({ to, label }) => (
                                                <Link
                                                    key={to}
                                                    to={to}
                                                    className="block px-3 py-2 text-[13px] text-slate-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50 transition-all"
                                                >
                                                    {label}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={() => setWorkforceOpen(v => !v)}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-semibold text-slate-700 hover:bg-slate-50 transition-all"
                            >
                                {t('header.workforce_title')}
                                <svg className={`w-4 h-4 transition-transform ${workforceOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            {workforceOpen && (
                                <div className="ml-4 mt-1 pl-3 border-l-2 border-cyan-100 space-y-1">
                                    <Link to="/#workforce-section" className="block px-3 py-2 text-[13px] font-bold text-cyan-700 hover:bg-cyan-50 rounded-lg mb-2">{t('header.view_workforce')}</Link>
                                    <Link to="/workforce-solutions" className="block px-3 py-2 text-[12px] font-medium text-slate-500 hover:text-cyan-600">{t('header.all_workforce_page')}</Link>
                                    {workforceDropdownSections.map((section) => (
                                        <div key={section.id}>
                                            <p className="px-3 pt-2 pb-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">{section.heading}</p>
                                            {section.links.map(({ to, label }) => (
                                                <Link
                                                    key={to}
                                                    to={to}
                                                    className="block px-3 py-2 text-[13px] text-slate-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50 transition-all"
                                                >
                                                    {label}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>
                    </ul>

                    <div className="mt-6 px-1 flex justify-center border-t border-slate-100 pt-4">
                        <LanguageSwitcher isScrolled={isScrolled} mobile={true} />
                    </div>

                    <div className="mt-6 px-1">
                        <Link
                            to="/contact"
                            className="block w-full text-center py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-[15px] shadow-lg hover:shadow-cyan-500/30 transition-all hover:-translate-y-0.5"
                        >
                            {t('header.contact_btn')}
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
