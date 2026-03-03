import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const webDropdownLinks = [
    { to: '/web-development', label: 'Web Development' },
    { to: '/mobile-application-development', label: 'Mobile App Development' },
    { to: '/android-development', label: 'Android Development' },
    { to: '/ios-development', label: 'iOS Development' },
    { to: '/chatbot', label: 'Chatbot Development' },
    { to: '/expert-seo-services', label: 'SEO Services' },
    { to: '/hire-php-developer', label: 'Hire PHP Developers' },
    { to: '/hire-react-developer', label: 'Hire React Developers' },
    { to: '/hire-angular-developer', label: 'Hire Angular Developers' },
    { to: '/hire-jquery-developers', label: 'Hire jQuery Developers' },
    { to: '/hire-html-developer', label: 'Hire HTML Developers' },
    { to: '/hire-codeIgniter-developers', label: 'Hire CodeIgniter Developers' },
    { to: '/laravel-development-company', label: 'Laravel Development' },
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [webOpen, setWebOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setWebOpen(false);
        setIsScrolled(window.scrollY > 80);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerBgClass = isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-b from-black/60 to-transparent';
    const textColorClass = isScrolled ? 'text-[#222]' : 'text-white';
    const hoverUnderlineColor = isScrolled ? 'after:bg-[#0087ca]' : 'after:bg-white';

    const navLinkClass = `relative py-3 lg:py-[12px] font-medium uppercase text-[16px] tracking-wide border-b border-[#333333] lg:border-none ${textColorClass} hover:text-[#39b7ff] lg:hover:text-[#39b7ff] transition-colors duration-300 lg:after:content-[''] lg:after:absolute lg:after:w-full lg:after:scale-x-0 lg:after:h-[2px] lg:after:bottom-0 lg:after:LEFT-0 ${hoverUnderlineColor} lg:after:origin-bottom-right lg:after:transition-transform lg:after:duration-300 lg:hover:after:scale-x-100 lg:hover:after:origin-bottom-left`;

    return (
        <header className={`fixed w-full top-0 left-0 z-[9999] h-[80px] transition-all duration-300 ${headerBgClass}`}>
            <div className="w-full px-4 lg:px-[45px] h-full">
                <div className="flex justify-between items-center h-full w-full">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center pr-8">
                        <Link to="/">
                            <img src="/images/logo2.webp" alt="Gozoom" className="h-[50px] w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Menu & Mobile Drawer */}
                    <div className="flex items-center flex-1 justify-end">
                        <nav className={`fixed lg:relative top-0 right-0 h-[100vh] lg:h-auto w-[280px] lg:w-auto bg-[#222222] lg:bg-transparent z-[1000] overflow-y-auto lg:overflow-visible transition-transform duration-500 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>

                            {/* Close Button (Mobile) */}
                            <div className="lg:hidden w-[40px] h-[40px] bg-white m-[15px] flex items-center justify-center cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                                <img src="/images/close.svg" alt="close" className="w-[16px] h-auto" />
                            </div>

                            <ul className="flex flex-col lg:flex-row list-none m-0 p-0 lg:items-center w-full">

                                <li className="lg:ml-[20px] px-[15px] lg:px-0">
                                    <Link className={`block lg:inline-block ${navLinkClass} border-t border-[#333333] lg:border-t-0`} to="/">HOME</Link>
                                </li>
                                <li className="lg:ml-[20px] px-[15px] lg:px-0">
                                    <Link className={`block lg:inline-block ${navLinkClass}`} to="/integration">INTEGRATION</Link>
                                </li>
                                <li className="lg:ml-[20px] px-[15px] lg:px-0">
                                    <Link className={`block lg:inline-block ${navLinkClass}`} to="/retail">RETAIL</Link>
                                </li>

                                {/* WEB Dropdown */}
                                <li className="lg:ml-[20px] px-[15px] lg:px-0 lg:relative">
                                    {/* Desktop trigger */}
                                    <span className={`hidden lg:inline-flex items-center gap-1 cursor-pointer ${navLinkClass}`}>
                                        WEB
                                        <svg className="w-[10px] h-[10px]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    {/* Desktop Dropdown (CSS hover via peer/group on li) */}
                                    <ul className="lg:absolute lg:left-0 lg:top-full lg:hidden lg:group-hover:block bg-white shadow-lg border-t-[3px] border-[#39b7ff] w-full lg:w-[240px] z-[9999] py-1 hidden" id="web-dropdown">
                                        {webDropdownLinks.map(({ to, label }) => (
                                            <li key={to}>
                                                <Link to={to} className="block px-5 py-[9px] text-[13px] font-semibold text-gray-800 hover:text-[#39b7ff] hover:bg-gray-50 capitalize whitespace-nowrap">
                                                    {label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* Mobile: toggle button + accordion */}
                                    <div className="lg:hidden">
                                        <button
                                            className={`block w-full text-left ${navLinkClass} flex items-center justify-between`}
                                            onClick={() => setWebOpen(v => !v)}
                                        >
                                            WEB
                                            <svg className={`w-[12px] h-[12px] transition-transform ${webOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        {webOpen && (
                                            <div className="pl-4 border-l border-[#444]">
                                                {webDropdownLinks.map(({ to, label }) => (
                                                    <Link key={to} to={to} className="block py-2 text-[13px] text-gray-300 hover:text-[#39b7ff] capitalize">
                                                        {label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </li>

                                <li className="lg:ml-[20px] px-[15px] lg:px-0">
                                    <Link className={`block lg:inline-block ${navLinkClass}`} to="/blogs">BLOGS</Link>
                                </li>
                                <li className="lg:ml-[20px] px-[15px] lg:px-0">
                                    <Link className={`block lg:inline-block ${navLinkClass}`} to="/about">ABOUT US</Link>
                                </li>
                                <li className="lg:ml-[20px] px-[15px] lg:px-0">
                                    <Link className={`block lg:inline-block ${navLinkClass}`} to="/contact">CONTACT US</Link>
                                </li>

                            </ul>
                        </nav>

                        {/* Hamburger */}
                        <div className="lg:hidden flex items-center justify-center w-[40px] h-[34px] cursor-pointer ml-4" onClick={() => setIsMobileMenuOpen(true)}>
                            <span className={`block w-[24px] h-[3px] ${isScrolled ? 'bg-[#39b7ff]' : 'bg-white'} relative before:content-[''] before:absolute before:w-full before:h-full before:${isScrolled ? 'bg-[#39b7ff]' : 'bg-white'} before:-top-[7px] before:left-0 after:content-[''] after:absolute after:w-full after:h-full after:${isScrolled ? 'bg-[#39b7ff]' : 'bg-white'} after:top-[7px] after:left-0 transition-colors duration-300`}></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            <div className={`fixed inset-0 bg-black/50 z-[990] lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMobileMenuOpen(false)}></div>

            {/* Desktop WEB Dropdown via CSS hover (inject style) */}
            <style>{`
                li:hover > #web-dropdown { display: block !important; }
                #web-dropdown { display: none; }
            `}</style>
        </header>
    );
};

export default Header;
