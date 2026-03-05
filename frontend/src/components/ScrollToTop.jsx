import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    // Auto-scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Show/hide floating button
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 z-50 flex items-center justify-center hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            aria-label="Scroll to top"
        >
            <FaArrowUp size={20} />
        </button>
    );
};

export default ScrollToTop;
