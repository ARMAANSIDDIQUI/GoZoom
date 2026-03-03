import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const Kiosks = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div className="font-['Lato',sans-serif]">
            {/* Hero Section */}
            <div className="banner-top page-jquery-banner">
                <div className="container">
                    <div className="heading-in wow animate__animated animate__fadeInUp">
                        <h2 className="text-white text-[50px] font-bold mb-4">
                            Gozoom <span className="text-[#00a2fe]">Technologies!</span>
                        </h2>
                        <div className="st-cst-btn-area">
                            <Link to="/integration" className="btn page-angular-btn-default">INTEGRATION</Link>
                            <Link to="/retail" className="btn page-angular-btn">RETAIL</Link>
                        </div>
                    </div>
                </div>
            </div>

            <section className="whiteSection py-20">
                <div className="container text-center">
                    <h3 className="text-[32px] font-semibold text-[#373645] mb-6">Interactive Kiosk Solutions</h3>
                    <p className="text-[18px] text-[#555] max-w-3xl mx-auto leading-relaxed">
                        We provide state-of-the-art kiosk solutions for various industries, including retail, healthcare, and entertainment. Our kiosks are designed to enhance customer experience and streamline business operations.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Kiosks;
