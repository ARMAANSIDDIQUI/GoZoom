import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaUsers, FaStar, FaRocket, FaBolt, FaTag, FaHeadset } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

// Data for each hire page variant
const pageData = {
    'Hire PHP Developers': {
        bannerClass: 'from-indigo-700 to-purple-900',
        tagline: 'Hire Talented PHP Developers',
        subtitle: 'Discover how we can help make your project successful',
        heroImg: '/images/phpboyy.svg',
        introTitle: 'Helping Businesses Transform Their Ideas into "Amazing Experiences"',
        introText: `PHP is one of the most popular and important programming languages, powering more than 80% of the internet. Millions of sites are powered by PHP, and it is a preferred option for feature-rich website development.`,
        introText2: `Our team of experienced PHP web and application developers produce stable and effective code that helps clients across the globe gain reliable and smooth access to all of their products and services.`,
        specializations: [
            { img: '/images/phpsnowflake.svg', text: 'Offering outstanding, customized PHP web development solutions with a proven development process that reduces time and cost.' },
            { img: '/images/phpdiamond.svg', text: 'Following dominant and flawless core PHP development practices with robust infrastructure and flexible models to create awesome PHP applications.' },
            { img: '/images/phpplane.svg', text: 'Rapid development of PHP web pages and applications by implementing more efficient code, resulting in less development time.' },
        ],
        sectionTitle: 'Our PHP Team Specializes In...',
        whyTitle: 'Why You Should Work with Our PHP Developers',
        bullets: [
            'Comprehensive understanding for great efficiency',
            'Maximum performance with the best results',
            'Model View Controller makes development efficient',
            'Committed to delivering solutions at the lowest costs',
            'Years of experience for accurate and errorless code',
            'Dedicated customer support through various channels',
        ],
        ctaTitle: 'Ask our PHP professionals about their services today!',
        formName: 'phpForm',
        pageImg: '/images/phpboy2.svg',
    },
    'Hire React Developers': {
        bannerClass: 'from-cyan-600 to-blue-900',
        tagline: 'Hire Dedicated React Developers',
        subtitle: 'Build the future of web applications with GoZooms React developers',
        heroImg: '/images/reactboy.svg',
        introTitle: 'Next Level of ReactJS Development',
        introText: `GoZooms developers use React to create impressively flexible user interfaces for web applications. Using React, we can help businesses build static or dynamic websites using frameworks like Next.js.`,
        introText2: `With our expertise and knowledge with React, you don't need to look anywhere else for professional and dedicated React developers. Our React.js developers adhere to strict architectural principles when building any React application.`,
        specializations: [
            { img: '/images/react2.png', text: 'React Native mobile development for iOS and Android — seamless cross-platform experiences.' },
            { img: '/images/react3.png', text: 'Powerful static and dynamic websites built with React, Next.js, and Gatsby.' },
            { img: '/images/react4.png', text: 'React UI development — impeccable user interfaces that are flexible and interactive.' },
        ],
        sectionTitle: 'Our React Team Specializes In...',
        whyTitle: 'Why You Should Work with Our React Developers',
        bullets: [
            'Flexible development on monthly or fixed pricing packages',
            'Deep expertise with React, MERN stack, and Next.js',
            'Satisfaction guarantee with constant client communication',
            'Quality with affordability — exceeding expectations without breaking budgets',
            'Experience with React Native for cross-platform mobile apps',
            'SSR capabilities with React server-side rendering',
        ],
        ctaTitle: 'Ask our React professionals about their services today!',
        formName: 'reactHireForm',
        pageImg: '/images/react11.png',
    },
    'Hire Angular Developers': {
        bannerClass: 'from-red-600 to-rose-900',
        tagline: 'Hire Dedicated Angular Developers',
        subtitle: 'Everything you need to get your project started in 24 hours',
        heroImg: '/images/angularboy.svg',
        introTitle: 'Enhance your project with in-house Angular Development expertise',
        introText: `Angular is an open-source JavaScript framework that extends the functionality of HTML. It is designed to make front-end web development and testing much easier and faster using templates, command line tools, and IDEs.`,
        introText2: `GoZooms employs specialized Angular developers who are experienced in JavaScript and jQuery to create real-time applications effortlessly. Our team will help take your web or mobile app ideas from concept to reality using Angular.`,
        specializations: [
            { img: '/images/thought.png', text: '5+ years of working with Angular — extensive knowledge and technical skills to deal with all types of projects.' },
            { img: '/images/expertise.png', text: 'An accomplished Angular development company working with enthusiasm and dedication to produce great results.' },
            { img: '/images/performance.png', text: 'Our efficiency means competitive rates and rapid delivery of Angular development services and solutions.' },
        ],
        sectionTitle: 'Dedicated and Skilled Angular Development',
        whyTitle: 'Why You Should Work with Our Angular Developers',
        bullets: [
            'Customer satisfaction with dedicated account and project managers',
            'Provider of efficient solutions for businesses big or small',
            'Offshore developers working dedicated hours for your project',
            'Refined development process for faster, on-budget delivery',
            'Competitive rates for Angular developers and consultants',
            '18/5 technical support with open communication lines',
        ],
        ctaTitle: 'Ask our Angular professionals about their services today!',
        formName: 'angularHireForm',
        pageImg: '/images/angularbg.webp',
    },
    'Hire jQuery Developers': {
        bannerClass: 'from-blue-600 to-slate-900',
        tagline: 'Hire Expert jQuery Developers',
        subtitle: 'Fast, lightweight JavaScript solutions for your web projects',
        heroImg: '/images/programmer-working-with-software.webp',
        introTitle: 'Expert jQuery Development for Fast, Efficient Web Applications',
        introText: `jQuery is a popular, light-weight and easy-to-use JavaScript library which allows developers to quickly learn and accomplish tasks faster. It simplifies HTML document traversal, event handling, animation, and Ajax interaction.`,
        introText2: `Our jQuery developers are skilled in building interactive, responsive websites and web applications that function flawlessly across all browsers and devices. Let GoZooms handle your jQuery development needs.`,
        specializations: [
            { img: '/images/thought.png', text: 'jQuery plugins and widget development for enhanced interactivity across your entire website.' },
            { img: '/images/expertise.png', text: 'Cross-browser compatible jQuery solutions tested across all major browsers and devices.' },
            { img: '/images/performance.png', text: 'Performance-optimized jQuery code for fast load times and smooth user interactions.' },
        ],
        sectionTitle: 'Our jQuery Team Specializes In...',
        whyTitle: 'Why You Should Work with Our jQuery Developers',
        bullets: [
            'Deep knowledge of the jQuery library and ecosystem',
            'Fast implementation of interactive UI components',
            'Cross-browser and cross-device compatibility',
            'Seamless integration with existing web projects',
            'Performance optimization for faster load times',
            'Dedicated support and technical assistance',
        ],
        ctaTitle: 'Ask our jQuery experts about their services today!',
        formName: 'jqueryHireForm',
        pageImg: '/images/jquerybgg.webp',
    },
    'Hire HTML Developers': {
        bannerClass: 'from-orange-500 to-amber-700',
        tagline: 'Hire Front-End HTML Developers',
        subtitle: 'Convert your designs into pixel-perfect HTML/CSS websites',
        heroImg: '/images/software-developers.webp',
        introTitle: 'Design to HTML Conversion — Pixel-Perfect Results Every Time',
        introText: `Our HTML developers specialize in converting custom web designs to HTML with enhanced performance, rich user interfaces, and a smooth user experience. We work with PSD, Figma, XD, and Sketch files.`,
        introText2: `GoZooms front-end HTML developers are experienced in building responsive, cross-browser compatible HTML5/CSS3 websites that look great on all devices and deliver fast load times.`,
        specializations: [
            { img: '/images/thought.png', text: 'PSD to HTML conversion with pixel-perfect precision and cross-browser compatibility.' },
            { img: '/images/expertise.png', text: 'Responsive HTML5/CSS3 development for seamless display on desktop, tablet, and mobile.' },
            { img: '/images/performance.png', text: 'Clean, semantic, SEO-friendly HTML markup for better search engine visibility.' },
        ],
        sectionTitle: 'Our HTML Team Specializes In...',
        whyTitle: 'Why You Should Work with Our HTML Developers',
        bullets: [
            'Pixel-perfect design-to-HTML conversion',
            'Responsive layouts for all screen sizes',
            'Cross-browser compatibility testing',
            'Clean, semantic, and SEO-friendly code',
            'Fast turnaround with competitive pricing',
            'Ongoing support and maintenance',
        ],
        ctaTitle: 'Ask our HTML experts about their services today!',
        formName: 'htmlHireForm',
        pageImg: '/images/webdevbg.webp',
    },
    'Hire CodeIgniter Developers': {
        bannerClass: 'from-orange-600 to-rose-800',
        tagline: 'Hire Expert CodeIgniter Developers',
        subtitle: 'Powerful PHP framework solutions for your web applications',
        heroImg: '/images/codeignitorboy1.svg',
        introTitle: 'CodeIgniter Development — Speed, Performance, and Elegance',
        introText: `CodeIgniter is a powerful PHP framework with a tiny footprint, built for developers who need a simple toolkit to create full-featured web apps. It has a small footprint, exceptional performance, and near-zero configuration.`,
        introText2: `Our CodeIgniter developers have extensive experience building web applications with this PHP framework. We deliver robust, scalable, and maintainable applications with clean code architecture and best practices.`,
        specializations: [
            { img: '/images/thought.png', text: 'Custom web application development using CodeIgniter MVC architecture for clean, maintainable code.' },
            { img: '/images/expertise.png', text: 'RESTful API development using CodeIgniter for seamless integration with mobile apps and third-party services.' },
            { img: '/images/performance.png', text: 'CodeIgniter migration and upgrade services to bring your existing application up to date.' },
        ],
        sectionTitle: 'Our CodeIgniter Team Specializes In...',
        whyTitle: 'Why You Should Work with Our CodeIgniter Developers',
        bullets: [
            'Deep expertise in CodeIgniter MVC framework',
            'Rapid development with clean code architecture',
            'Seamless integration with databases and APIs',
            'Performance optimization for fast response times',
            'Legacy CodeIgniter migration and upgrades',
            'Ongoing maintenance and support',
        ],
        ctaTitle: 'Ask our CodeIgniter experts about their services today!',
        formName: 'codeigniterHireForm',
        pageImg: '/images/codeignitor2.svg',
    },
    'Laravel Development Company': {
        bannerClass: 'from-rose-500 to-red-900',
        tagline: 'Expert Laravel Development Company',
        subtitle: 'Get an Application Made by an Expert Laravel Development Company',
        heroImg: '/images/laravelboy1.svg',
        introTitle: 'Laravel — Elegant Web Application Framework',
        introText: `Laravel is an accessible and powerful web application framework with expressive and elegant syntax. It takes the pain out of development by easing common tasks such as routing, sessions, caching, and authentication.`,
        introText2: `GoZooms provides dedicated Laravel developers with deep framework knowledge for building secure, scalable web applications. From APIs to full-stack Laravel solutions, our team delivers excellence on every project.`,
        specializations: [
            { img: '/images/thought.png', text: 'Custom Laravel web application development using MVC architecture and best practices.' },
            { img: '/images/expertise.png', text: 'Laravel API development and integration for mobile apps and third-party services.' },
            { img: '/images/performance.png', text: 'Laravel migration, upgrade, and optimization services for existing projects.' },
        ],
        sectionTitle: 'Our Laravel Team Specializes In...',
        whyTitle: 'Why You Should Work with Our Laravel Developers',
        bullets: [
            'Expert knowledge of the Laravel framework ecosystem',
            'Clean, elegant code following Laravel best practices',
            'Artisan CLI for rapid feature development',
            'Eloquent ORM for intuitive database interactions',
            'Built-in security features for robust applications',
            'Ongoing maintenance, updates, and support',
        ],
        ctaTitle: 'Ask our Laravel professionals about their services today!',
        formName: 'laravelHireForm',
        pageImg: '/images/laravelbg.webp',
    },
};

const HirePage = ({ title, bgFrom, bgTo }) => {
    const data = pageData[title] || {
        bannerClass: `${bgFrom} ${bgTo}`,
        tagline: title,
        subtitle: 'Hire top talent for your dedicated projects',
        heroImg: null,
        introTitle: 'Expert Developers for Your Projects',
        introText: `We provide dedicated software developers and engineers with extensive experience to integrate seamlessly into your current workflows.`,
        introText2: `Our developers deliver outstanding results, helping your business achieve its technology goals efficiently and cost-effectively.`,
        specializations: [
            { img: null, text: 'Extensive technical expertise and years of hands-on experience.' },
            { img: null, text: 'Agile development process with transparent communication.' },
            { img: null, text: 'Competitive pricing with flexible engagement models.' },
        ],
        sectionTitle: 'Our Team Specializes In...',
        whyTitle: `Why You Should Work with Our ${title.replace('Hire ', '')}`,
        bullets: [
            'Deep technical expertise and experience',
            'Agile development with fast delivery',
            'Competitive pricing and flexible models',
            'Dedicated support and communication',
            'Quality-first approach to every project',
            'Cross-timezone availability',
        ],
        ctaTitle: 'Ask our experts about their services today!',
        formName: 'hireForm',
        pageImg: null,
    };

    const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, [title]); // re-run animation on page title change

    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const whyItems = [
        { icon: <FaStar className="text-yellow-400" />, title: 'Customer Satisfaction', text: 'We take customer satisfaction seriously, providing you a dedicated account manager and project manager.' },
        { icon: <FaUsers className="text-blue-400" />, title: 'Extensive Experience', text: 'GoZooms provides efficient solutions for businesses big or small, with a fully customized approach.' },
        { icon: <FaRocket className="text-green-400" />, title: 'Fast Development', text: 'Our refined development process results in applications being built quicker and more efficiently.' },
        { icon: <FaBolt className="text-orange-400" />, title: 'Agile Methodology', text: 'We use agile methodologies for iterative development, ensuring quick feedback loops and on-budget delivery.' },
        { icon: <FaTag className="text-purple-400" />, title: 'Competitive Pricing', text: 'We offer some of the most competitive rates on the market for development professionals.' },
        { icon: <FaHeadset className="text-cyan-400" />, title: '18/5 Technical Support', text: 'Our open communication lines and strong technical assistance helps your business through any issues.' },
    ];

    return (
        <div>
            {/* Hero Banner */}
            <section className={`bg-gradient-to-r ${data.bannerClass} relative min-h-screen flex items-center justify-center overflow-hidden`}>
                <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] rounded-full bg-white/10 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-96 h-96 rounded-full bg-black/10 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="container mx-auto px-6 lg:px-16 pt-[112px] pb-20 lg:pb-28 flex flex-col lg:flex-row items-center gap-10">
                    <div className="flex-1 text-white z-10" data-aos="fade-right">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/30 font-bold text-sm mb-6 uppercase tracking-wider">Expert Talent</span>
                        <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">{data.tagline}</h1>
                        <p className="text-xl lg:text-2xl opacity-90 font-medium mb-10 text-shadow-sm">{data.subtitle}</p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link to="/contact" className="bg-white text-gray-900 font-extrabold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all inline-flex items-center gap-2">
                                Enquire Now <FaArrowRight className="text-sm" />
                            </Link>
                            <Link to="/about" className="glass bg-white/10 border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all hover:-translate-y-1">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    {data.heroImg && (
                        <div className="flex-shrink-0 z-10" data-aos="zoom-in" data-aos-delay="200">
                            <img src={data.heroImg} alt={data.tagline} className="h-[280px] lg:h-[400px] object-contain drop-shadow-2xl wow pulse" data-wow-iteration="infinite" data-wow-duration="3s" />
                        </div>
                    )}
                </div>
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white to-transparent pointer-events-none mix-blend-overlay" />
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/50 rounded-full blur-[80px] -mr-40 -mt-40"></div>
                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1" data-aos="fade-up">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">Core Competence</span>
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-8 leading-snug">{data.introTitle}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">{data.introText}</p>
                            <p className="text-lg text-slate-600 leading-relaxed">{data.introText2}</p>
                        </div>
                        {data.pageImg && (
                            <div className="flex-shrink-0 text-center" data-aos="fade-left" data-aos-delay="200">
                                <img src={data.pageImg} alt={title} className="h-[250px] lg:h-[300px] object-contain mx-auto filter drop-shadow-xl hover:scale-105 transition-transform duration-500" />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Specializations */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">{data.sectionTitle}</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.specializations.map((s, i) => (
                            <div key={i} className="bg-white rounded-3xl p-8 text-center shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group" data-aos="zoom-in" data-aos-delay={i * 100}>
                                {s.img && <img src={s.img} alt="" className="h-20 w-auto object-contain mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />}
                                <p className="text-slate-600 leading-relaxed font-medium">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="flex-1" data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">Why Partner With Us</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-10">{data.whyTitle}</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {data.bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                                        <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                                        <span className="font-medium text-[15px]">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* CTA Box */}
                        <div className="lg:w-[380px] w-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-10 text-white text-center shadow-2xl relative overflow-hidden" data-aos="fade-left">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[30px] -mr-16 -mt-16"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[30px] -ml-16 -mb-16"></div>

                            <h3 className="text-2xl font-bold mb-6 leading-snug relative z-10">{data.ctaTitle}</h3>
                            <p className="text-blue-200 mb-8 relative z-10">Get a free consultation and project estimate within 24 hours.</p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-lg shadow-blue-500/30 text-white font-bold px-8 py-4 rounded-full transition-all w-full relative z-10 hover:-translate-y-1"
                            >
                                Get Started <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why We're Different — 6-block grid */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-900 text-white relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(37,99,235,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99,102,241,0.5) 0%, transparent 50%)' }}></div>
                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-4 uppercase tracking-wider">The GoZoom Advantage</span>
                        <h2 className="text-3xl md:text-5xl font-bold">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">GoZooms?</span></h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyItems.map((item, i) => (
                            <div key={i} className="flex flex-col items-start gap-4 glass bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:-translate-y-1 shadow-xl hover:shadow-cyan-500/10" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="text-4xl mb-2">{item.icon}</div>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-slate-400 text-[15px] leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enquiry Form */}
            <section className="py-24 bg-gradient-to-br from-blue-600 flex justify-center to-indigo-700 text-white relative flex justify-center text-center">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] -mr-40 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-[80px] -ml-40 -mb-20"></div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="max-w-3xl mx-auto shadow-2xl rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10" data-aos="zoom-in">
                        <div className="p-10 lg:p-14">
                            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Get in Touch with Our Experts</h2>
                            <p className="text-center text-blue-100 mb-10 text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>

                            {submitted ? (
                                <div className="bg-white/10 border border-green-400/30 text-green-300 rounded-2xl p-10 text-center font-semibold text-xl backdrop-blur-md">
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <FaCheckCircle className="text-white text-3xl" />
                                    </div>
                                    Thank you! We'll be in touch soon.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-white text-slate-800 rounded-2xl p-8 lg:p-10 shadow-2xl space-y-6 text-left">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold mb-2 text-slate-700">Your Name <span className="text-red-500">*</span></label>
                                            <input type="text" name="name" value={form.name} onChange={handleChange} required
                                                className="w-full border-2 border-slate-100 bg-slate-50 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                                                placeholder="Full Name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold mb-2 text-slate-700">Email <span className="text-red-500">*</span></label>
                                            <input type="email" name="email" value={form.email} onChange={handleChange} required
                                                className="w-full border-2 border-slate-100 bg-slate-50 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                                                placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold mb-2 text-slate-700">Phone <span className="text-red-500">*</span></label>
                                            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                                                className="w-full border-2 border-slate-100 bg-slate-50 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                                                placeholder="Contact Number" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold mb-2 text-slate-700">Interested Service</label>
                                            <select name="service" value={form.service} onChange={handleChange}
                                                className="w-full border-2 border-slate-100 bg-slate-50 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors appearance-none">
                                                <option value="">Select Service</option>
                                                <option>Web Development</option>
                                                <option>Mobile Development</option>
                                                <option>Integration</option>
                                                <option>SEO Services</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2 text-slate-700">Message</label>
                                        <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                                            className="w-full border-2 border-slate-100 bg-slate-50 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                                            placeholder="Tell us about your project..." />
                                    </div>
                                    <button type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all inline-flex items-center justify-center gap-2 text-lg hover:-translate-y-1">
                                        Submit Enquiry <FaArrowRight />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HirePage;
