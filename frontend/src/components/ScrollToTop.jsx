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
            className={`fixed bottom-24 sm:bottom-28 right-4 sm:right-6 w-16 h-16 bg-gradient-to-tr from-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)] text-white rounded-full shadow-2xl transition-all duration-500 z-50 flex items-center justify-center hover:scale-110 active:scale-95 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            aria-label="Scroll to top"
        >
            <FaArrowUp size={24} />
        </button>
    );
};

export default ScrollToTop;
