import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaUsers, FaStar, FaRocket, FaBolt, FaTag, FaHeadset } from 'react-icons/fa';

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
        bannerClass: 'from-red-600 to-red-900',
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
        pageImg: '/images/angular-icon.svg',
    },
    'Hire jQuery Developers': {
        bannerClass: 'from-blue-500 to-blue-800',
        tagline: 'Hire Expert jQuery Developers',
        subtitle: 'Fast, lightweight JavaScript solutions for your web projects',
        heroImg: '/images/jquery-icon.svg',
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
        pageImg: '/images/jquery-icon.svg',
    },
    'Hire HTML Developers': {
        bannerClass: 'from-orange-500 to-orange-700',
        tagline: 'Hire Front-End HTML Developers',
        subtitle: 'Convert your designs into pixel-perfect HTML/CSS websites',
        heroImg: '/images/html-icon.svg',
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
        pageImg: '/images/html-icon.svg',
    },
    'Hire CodeIgniter Developers': {
        bannerClass: 'from-orange-600 to-red-700',
        tagline: 'Hire Expert CodeIgniter Developers',
        subtitle: 'Powerful PHP framework solutions for your web applications',
        heroImg: '/images/codeigniter-icon.svg',
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
        pageImg: '/images/codeigniter-icon.svg',
    },
    'Laravel Development Company': {
        bannerClass: 'from-red-500 to-red-800',
        tagline: 'Expert Laravel Development Company',
        subtitle: 'Get an Application Made by an Expert Laravel Development Company',
        heroImg: '/images/laravel-icon.svg',
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
        pageImg: '/images/laravel-icon.svg',
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
        <div className="font-sans">
            {/* Hero Banner */}
            <section className={`bg-gradient-to-r ${data.bannerClass} relative overflow-hidden`}>
                <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-10">
                    <div className="flex-1 text-white z-10">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">{data.tagline}</h1>
                        <p className="text-lg lg:text-xl opacity-90 font-light mb-8">{data.subtitle}</p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="bg-white text-gray-900 font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                                Enquire Now <FaArrowRight className="text-sm" />
                            </Link>
                            <Link to="/about" className="border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-white/10 transition-colors">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    {data.heroImg && (
                        <div className="flex-shrink-0 z-10">
                            <img src={data.heroImg} alt={data.tagline} className="h-[240px] lg:h-[300px] object-contain drop-shadow-xl" />
                        </div>
                    )}
                </div>
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white to-transparent pointer-events-none" />
            </section>

            {/* Intro Section */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 leading-snug">{data.introTitle}</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">{data.introText}</p>
                            <p className="text-gray-600 leading-relaxed">{data.introText2}</p>
                        </div>
                        {data.pageImg && (
                            <div className="flex-shrink-0 text-center">
                                <img src={data.pageImg} alt={title} className="h-[200px] object-contain mx-auto" />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Specializations */}
            <section className="py-16 lg:py-20 bg-blue-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-12">{data.sectionTitle}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.specializations.map((s, i) => (
                            <div key={i} className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                                {s.img && <img src={s.img} alt="" className="h-20 w-auto object-contain mx-auto mb-5" />}
                                <p className="text-gray-600 leading-relaxed text-sm">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="flex-1">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">{data.whyTitle}</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {data.bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <FaCheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* CTA Box */}
                        <div className="lg:w-[340px] bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl p-8 text-white text-center shadow-xl">
                            <p className="text-lg font-semibold mb-6 leading-snug">{data.ctaTitle}</p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded transition-colors w-full justify-center"
                            >
                                Get Started <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why We're Different — 6-block grid */}
            <section className="py-16 lg:py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">Why Choose GoZooms?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyItems.map((item, i) => (
                            <div key={i} className="flex flex-col items-start gap-4 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <div className="text-3xl">{item.icon}</div>
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enquiry Form */}
            <section className="py-16 lg:py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">Get in Touch with Our Experts</h2>
                        <p className="text-center opacity-90 mb-10">Fill out the form below and we'll get back to you within 24 hours.</p>

                        {submitted ? (
                            <div className="bg-white text-green-600 rounded-xl p-10 text-center font-semibold text-xl shadow-xl">
                                ✅ Thank you! We'll be in touch soon.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white text-gray-800 rounded-xl p-8 shadow-xl space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">Your Name <span className="text-red-500">*</span></label>
                                        <input type="text" name="name" value={form.name} onChange={handleChange} required
                                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                                            placeholder="Full Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">Email <span className="text-red-500">*</span></label>
                                        <input type="email" name="email" value={form.email} onChange={handleChange} required
                                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                                            placeholder="Email Address" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">Phone <span className="text-red-500">*</span></label>
                                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                                            placeholder="Contact Number" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1">Interested Service</label>
                                        <select name="service" value={form.service} onChange={handleChange}
                                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 bg-white">
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
                                    <label className="block text-sm font-semibold mb-1">Message</label>
                                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                                        placeholder="Tell us about your project..." />
                                </div>
                                <button type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition-colors inline-flex items-center justify-center gap-2">
                                    Submit Enquiry <FaArrowRight />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HirePage;
