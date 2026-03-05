import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGlobe, FaCode } from 'react-icons/fa';

const webDropdownSections = [
    {
        heading: <span className="flex items-center gap-1.5"><FaGlobe className="text-cyan-500" /> Our Services</span>,
        links: [
            { to: '/web-development', label: 'Web Development' },
            { to: '/mobile-application-development', label: 'Mobile App Development' },
            { to: '/android-development', label: 'Android Development' },
            { to: '/ios-development', label: 'iOS Development' },
            { to: '/angular-development', label: 'Angular Development' },
            { to: '/react-development', label: 'React Development' },
            { to: '/laravel-development', label: 'Laravel Development' },
            { to: '/chatbot', label: 'Chatbot Development' },
            { to: '/expert-seo-services', label: 'SEO Services' },
            { to: '/kiosks', label: 'Kiosk Solutions' },
        ],
    },
    {
        heading: <span className="flex items-center gap-1.5"><FaCode className="text-purple-500" /> Hire Developers</span>,
        links: [
            { to: '/hire-react-developer', label: 'Hire React Developers' },
            { to: '/hire-angular-developer', label: 'Hire Angular Developers' },
            { to: '/hire-php-developer', label: 'Hire PHP Developers' },
            { to: '/hire-jquery-developers', label: 'Hire jQuery Developers' },
            { to: '/hire-html-developer', label: 'Hire HTML Developers' },
            { to: '/hire-codeIgniter-developers', label: 'Hire CodeIgniter Developers' },
            { to: '/laravel-development-company', label: 'Hire Laravel Developers' },
        ],
    },
];

// Flat list for mobile accordion
const allWebLinks = webDropdownSections.flatMap(s => s.links);


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [webOpen, setWebOpen] = useState(false);
    const [desktopWebOpen, setDesktopWebOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setWebOpen(false);
        setDesktopWebOpen(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close desktop dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDesktopWebOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <header className={`fixed w-full top-0 left-0 z-[9999] h-[72px] transition-all duration-500 ${isScrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-slate-200/80'
                : 'bg-gradient-to-b from-black/75 via-black/30 to-transparent'
                }`}>
                <div className="max-w-[1280px] mx-auto px-4 lg:px-8 h-full flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center group">
                        <div className="relative">
                            <img
                                src="/images/logo2.webp"
                                alt="Gozoom Technologies"
                                className={`h-[42px] w-auto object-contain transition-all duration-300 group-hover:scale-105 ${isScrolled ? 'brightness-100' : 'brightness-125'
                                    }`}
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">

                        <Link
                            to="/"
                            className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${isActive('/')
                                ? isScrolled ? 'text-cyan-600 bg-cyan-50' : 'text-cyan-300 bg-white/10'
                                : isScrolled ? 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100' : 'text-white/90 hover:text-white hover:bg-white/15'
                                }`}
                        >HOME</Link>

                        <Link
                            to="/integration"
                            className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${isActive('/integration')
                                ? isScrolled ? 'text-cyan-600 bg-cyan-50' : 'text-cyan-300 bg-white/10'
                                : isScrolled ? 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100' : 'text-white/90 hover:text-white hover:bg-white/15'
                                }`}
                        >INTEGRATION</Link>

                        <Link
                            to="/retail"
                            className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${isActive('/retail')
                                ? isScrolled ? 'text-cyan-600 bg-cyan-50' : 'text-cyan-300 bg-white/10'
                                : isScrolled ? 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100' : 'text-white/90 hover:text-white hover:bg-white/15'
                                }`}
                        >RETAIL</Link>

                        {/* WEB Dropdown */}
                        <div
                            className="relative"
                            ref={dropdownRef}
                            onMouseEnter={() => setDesktopWebOpen(true)}
                            onMouseLeave={() => setDesktopWebOpen(false)}
                        >
                            <Link
                                to="/web-development"
                                className={`flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${desktopWebOpen || isActive('/web-development')
                                    ? isScrolled ? 'text-cyan-600 bg-cyan-50' : 'text-cyan-300 bg-white/15'
                                    : isScrolled ? 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100' : 'text-white/90 hover:text-white hover:bg-white/15'
                                    }`}
                            >
                                WEB
                                <svg
                                    className={`w-3 h-3 transition-transform duration-300 ${desktopWebOpen ? 'rotate-180' : ''}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Link>

                            {/* Dropdown Panel — scrollable, categorized */}
                            <div className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] w-[280px] bg-white rounded-2xl shadow-2xl shadow-black/15 border border-slate-100 overflow-hidden transition-all duration-300 origin-top ${desktopWebOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                                }`}>
                                <div className="max-h-[420px] overflow-y-auto py-2 px-2 scrollable-dropdown">
                                    {webDropdownSections.map((section) => (
                                        <div key={section.heading} className="mb-1">
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
                                ? isScrolled ? 'text-cyan-600 bg-cyan-50' : 'text-cyan-300 bg-white/10'
                                : isScrolled ? 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100' : 'text-white/90 hover:text-white hover:bg-white/15'
                                }`}
                        >BLOGS</Link>

                        <Link
                            to="/about"
                            className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${isActive('/about')
                                ? isScrolled ? 'text-cyan-600 bg-cyan-50' : 'text-cyan-300 bg-white/10'
                                : isScrolled ? 'text-slate-700 hover:text-cyan-600 hover:bg-slate-100' : 'text-white/90 hover:text-white hover:bg-white/15'
                                }`}
                        >ABOUT US</Link>

                        <Link
                            to="/contact"
                            className={`ml-2 px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 hover:-translate-y-0.5 ${isScrolled
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'
                                : 'bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-slate-800'
                                }`}
                        >CONTACT US</Link>
                    </nav>

                    {/* Hamburger */}
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

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9990] lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            {/* Mobile Drawer */}
            <nav className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[9995] lg:hidden transform transition-transform duration-500 ease-out shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between px-5 h-[72px] border-b border-slate-100">
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

                <div className="overflow-y-auto h-[calc(100%-72px)] p-4">
                    <ul className="space-y-1">
                        {[
                            { to: '/', label: 'Home' },
                            { to: '/integration', label: 'Integration' },
                            { to: '/retail', label: 'Retail' },
                            { to: '/blogs', label: 'Blogs' },
                            { to: '/about', label: 'About Us' },
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
                                onClick={() => setWebOpen(v => !v)}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-semibold text-slate-700 hover:bg-slate-50 transition-all"
                            >
                                Web Services
                                <svg className={`w-4 h-4 transition-transform ${webOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                            {webOpen && (
                                <div className="ml-4 mt-1 pl-3 border-l-2 border-cyan-100 space-y-1">
                                    {webDropdownSections.map((section) => (
                                        <div key={section.heading}>
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

                    <div className="mt-6 px-1">
                        <Link
                            to="/contact"
                            className="block w-full text-center py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-[15px] shadow-lg hover:shadow-cyan-500/30 transition-all hover:-translate-y-0.5"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
