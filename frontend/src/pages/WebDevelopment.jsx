
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wow.js';
import 'animate.css';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const WebDevelopment = () => {
    useEffect(() => {
        const wow = new WOW({ live: false });
        wow.init();
    }, []);


    const services = [
        { img: './images/PHP-logo.svg', title: 'PHP', desc: 'PHP is a popular general-purpose scripting language powering everything from your blog to the most popular websites in the world.', link: '/hire-php-developer', linkText: 'Hire PHP Developers' },
        { img: './images/laravel-icon.svg', title: 'Laravel', desc: 'Laravel is an accessible and powerful web application framework with expressive and elegant syntax.', link: '/laravel-development-company', linkText: 'Learn More About Laravel Developers' },
        { img: './images/codeigniter-icon.svg', title: 'CodeIgniter', desc: 'A powerful PHP framework with a tiny footprint, built for developers who need a simple toolkit to create full-featured web apps.', link: '/hire-codeIgniter-developers', linkText: 'Hire Our CodeIgniter Developers' },
        { img: './images/angular-icon.svg', title: 'Angular', desc: 'Angular is an extensive platform for building expressive mobile and desktop web applications with compelling user interfaces.', link: '/hire-angular-developer', linkText: 'Hire our Full-Stack Angular Developers' },
        { img: './images/jquery-icon.svg', title: 'jQuery', desc: "jQuery is a popular, light-weight and easy-to-use JS library which allows developers to quickly learn and accomplish tasks faster.", link: '/hire-jquery-developers', linkText: 'Hire our Expert jQuery Developers' },
        { img: './images/html-icon.svg', title: 'Design to HTML Conversion', desc: 'Convert your custom web designs to HTML with enhanced performance, rich user interfaces and a smooth user experience.', link: '/hire-html-developer', linkText: 'Hire Our Front-End HTML Developers' },
        { img: './images/react-js-icon.svg', title: 'React', desc: 'A flexible JavaScript library for building remarkable user interfaces for web applications and native mobile applications.', link: '/hire-react-developer', linkText: 'Hire Our Dedicated React Developers' },
        { img: './images/mobile.png', title: 'Mobile Apps', desc: 'Provide the state of the art Technologies to develop the modern mobile apps, designed & powered by new emerging technologies.', link: '/mobile-application-development', linkText: 'Hire Our Dedicated Mobile App Developers', style: { maxWidth: '48px' } },
        { img: './images/seo.png', title: 'SEO, Digital Marketing', desc: 'Are you ready to skyrocket your online presence and reach your target audience like never before?', link: '/expert-seo-services', linkText: 'Get Connected to our SEO Experts', style: { maxWidth: '48px' } },
    ];

    const testimonials = [
        { name: 'Aditya Rathor', company: 'Maison Infra', text: "We engaged with Gozoom Web Development for our company's website overhaul, and the results were exceptional. Their team exhibited profound technical expertise, delivering a modern and user-friendly website that perfectly aligned with our brand." },
        { name: 'Rishabh', company: 'Bucket Bun', text: "Working with Gozoom Web Development was a game-changer for our business. Their team of developers demonstrated unparalleled skill and creativity in bringing our vision to life." },
        { name: 'Himanshu Singh', company: 'Exon SAHA', text: "We partnered with Gozoom Web Development to revamp our company's online presence, and the outcome exceeded our expectations. Their technical prowess and innovative approach transformed our website." },
        { name: 'Ravi Kumar', company: 'Sokkiefy', text: "Hiring GHI Web Development was one of the best decisions we made for our e-commerce venture. Their expertise in web development and e-commerce solutions helped us create a robust online store." },
    ];

    return (
        <div className="font-['Lato',sans-serif] overflow-x-hidden">

            {/* Hero Banner */}
            <section className="relative min-h-[680px] h-[680px] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center"
                style={{ background: 'linear-gradient(to right, #0012c4 0%, #62cff1 100%)' }}>
                <div className="absolute inset-0 opacity-60" style={{ background: 'linear-gradient(to right, #0012c4 0%, #62cff1 100%)' }}></div>
                {/* Decorative shapes */}
                <div className="absolute left-[9%] top-[-58%] w-[144%] h-[860px] bg-white opacity-20 origin-top-left" style={{ transform: 'rotate(49deg)', minHeight: '1395px' }}></div>
                <div className="absolute w-[69%] h-[1436px] bg-white opacity-[0.078] left-[-1103px] top-[-259px]" style={{ transform: 'skew(-247deg)', transformOrigin: 'left' }}></div>
                <div className="relative z-10 container mx-auto px-4 mt-[80px]">
                    <div className="mt-[60px] mb-[27px]">
                        <h1 className="text-white font-['Lato',sans-serif] text-[43px] font-normal leading-none m-0 mb-[25px]">Web Development Services You Can Trust</h1>
                        <h2 className="text-white font-normal text-[20px] m-0 mb-[30px]">Creating powerful, effective, and engaging web experiences</h2>
                        <p className="text-[20px] text-white mb-[30px] font-normal">
                            <a id="explore-btn" href="#explore"
                                className="inline-block bg-white text-[#014e72] px-[30px] py-[13px] text-[16px] font-medium rounded-[100px] hover:bg-[#014e72] hover:text-white transition-colors mr-[15px]">
                                Explore
                            </a>
                            <a href="/contact"
                                className="inline-block bg-transparent border-[2px] border-white text-white px-[32px] py-[12px] text-[16px] font-medium rounded-[100px] hover:bg-[#014e72] hover:border-[#014e72] transition-colors">
                                Enquire Now
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="explore" className="bg-white py-[30px] pb-[100px]">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-[50px]">
                        <h2 className="text-[30px] font-normal text-[#252525] text-center">Our Website Development Services</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-[50px] mt-[20px]">
                        {services.map((svc, i) => (
                            <div key={i} className="text-center px-[15px]">
                                <div className="relative h-[70px] mb-[5px] flex justify-center items-center">
                                    <img src={svc.img} className="w-[140px] max-h-[45px] mt-[15px]" alt={svc.title} style={svc.style || {}} />
                                </div>
                                <h3 className="text-[#252525] text-[20px] leading-none m-0 mb-[20px] font-medium">{svc.title}</h3>
                                <p className="max-w-[325px] w-full mx-auto mb-[20px] text-[15px] leading-[21px] font-normal text-[#373645]">{svc.desc}</p>
                                <div>
                                    <Link to={svc.link} className="text-[#0e90d0] text-[16px] cursor-pointer hover:underline inline-flex items-center gap-1">
                                        {svc.linkText} <FaArrowRight className="text-sm" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <div className="py-[5rem]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="font-['Poppins',sans-serif] font-normal text-[#282d30] text-[2.625rem] mb-[3rem] leading-[1.4]">
                                Why Brands Choose Gozoom for their Web Development Services
                            </h2>
                            <img src="/images/web-client.png" alt="" className="max-w-full h-auto" />
                        </div>
                        <div className="pl-[2rem]">
                            <div className="text-[1.25rem] leading-[2rem] text-[#332a31] mb-[1em]">
                                Here are several aspects that make us unique in our approach to creative website design and development services.
                            </div>
                            <ul className="list-none pl-[25px] mt-[2.5rem] space-y-4">
                                {[
                                    'Custom web design and development methodology',
                                    'Recognized as an award-winning website development firm',
                                    'Affordable rates for website design and development expertise',
                                    'Diverse team of over 300 experts located in Canada & India',
                                    'In-house front-end specialists: Business Analysts, UX/UI Design Experts, and Responsive Web Developers',
                                    'A friendly, open, communicative, and collaborative client approach',
                                    'Demonstrated history of successful delivery of web design and development projects',
                                    'Thorough quality assurance (QA) testing prior to launch',
                                    'Reduced development times leading to cost savings',
                                    'Unrivaled open technology knowledge and background',
                                ].map((item, i) => (
                                    <li key={i} className="mb-[1rem] text-[1.25rem] leading-[2rem] text-[#332a31] flex items-start gap-2">
                                        <FaCheck className="mt-2 shrink-0 text-blue-500" />{item}
                                    </li>
                                ))}
                            </ul>
                            <a href="/contact">
                                <button type="button" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition-colors">Get In Touch</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* In-House Team Section */}
            <section className="bg-black py-[30px] pb-[170px]">
                <div className="container mx-auto px-4">
                    <div>
                        <div className="text-white text-[30px] font-normal m-0 mb-[15px] pt-0 pl-0">Our Team of In-House Developers</div>
                        <div className="text-white font-medium italic text-[20px] leading-[1.4] m-0 mb-[20px]">Have peace of mind knowing we'll deliver outstanding solutions with affordability in mind!</div>
                        <div className="w-full">
                            <p className="text-white leading-[1.4] text-[16px] font-normal m-0 mb-[20px]">
                                Our team of web development professionals is ready to bring your dream website, online store, or custom web application to life with speed and precision. With decades of collective experience and unparalleled technical expertise, we ensure your project is executed flawlessly
                            </p>
                            <p className="text-white leading-[1.4] text-[16px] font-normal m-0 mb-[20px]">
                                Leave it up to us to provide solutions that exceed your expectations and help your business grow online!
                            </p>
                        </div>
                        <a href="/contact"
                            className="inline-block mt-[10px] bg-[#0e90d0] hover:bg-white hover:text-[#0e90d0] text-white px-[32px] py-[14px] rounded-[100px] font-medium text-[15px] leading-none transition-colors">
                            Get Developers Today
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-[600px] mx-auto mb-[3rem]">
                        <h6 className="text-blue-500 font-semibold uppercase tracking-widest text-sm bg-white px-3 inline-block">Testimonial</h6>
                        <h1 className="text-[2.5rem] font-bold mt-2">What Our Clients Say!</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-gray-100 rounded-lg p-6">
                                <div className="flex items-center mb-4">
                                    <img src="./images/profile.jpg" alt="" className="shrink-0 rounded-full border p-1 w-[50px] h-[50px] object-cover" />
                                    <div className="ml-4">
                                        <h5 className="font-semibold m-0">{t.name}</h5>
                                        <span className="text-gray-500 text-sm">{t.company}</span>
                                    </div>
                                </div>
                                <p className="m-0 text-[#373645] text-[15px] leading-relaxed">{t.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXACT MIGRATED CONTENT END */}
        </div>
    );
};

export default WebDevelopment;

