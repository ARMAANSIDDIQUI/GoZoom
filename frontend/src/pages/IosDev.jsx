import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const IosDev = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* EXACT MIGRATED CONTENT BEGIN */}




            <section className="page-jquery-banner banner-top">
                <div className="banner-inner min-adj">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-in page-jquery">
                                    <h1 className="page-jquery-banner-heading">
                                        Get iOS Expert for Enterprises.
                                    </h1>
                                    <p className="page-jquery-banner-text">
                                        Our iOS developers can help you with your project
                                    </p>
                                    <p>
                                        <Link to="/contact" className="btn starBtn page-jquery-btn-default">Enquire Now</Link><Link to="/about" className="btn starBtn page-jquery-btn">About Us</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-overlay1" style={{ "backgroundImage": "url('../images/ios1.webp')", "position": "absolute", "backgroundSize": "cover", "backdropFilter": "blur(10px)" }}>
                </div>
                <div className="banner-overlay-shape1"></div>
                <div className="banner-overlay-shape2"></div>
            </section>

            <section className="page-jquery complicated-things whiteSection no-after">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="complicated-things-text pad-top-60">
                                <h2 className="long-lg-text">We Provide Full iOS App Development Support</h2>
                                <p>
                                    Streamline iOS app development with Swift, a versatile and intuitive programming language.
                                    Swift's syntax simplifies coding tasks, from UI design to backend functionality, enhancing
                                    app performance and user experience. Leverage Swift's robust capabilities for seamless
                                    integration, creating dynamic and engaging native iOS applications tailored to your unique
                                    requirements.
                                </p>
                                <p>
                                    At GoZooms, we focused to
                                    <strong>Elevate your digital presence with our comprehensive iOS app development
                                        services.</strong> Our
                                    seasoned team leverages Swift, Apple's powerful programming language, to craft cutting-edge
                                    mobile solutions tailored to your business objectives. From concept ideation to app store
                                    deployment, we guide you through every step of the development process, ensuring seamless
                                    functionality, stunning design, and optimal performance. With a focus on <strong>
                                        user-centric design
                                        and robust backend integration,</strong> we deliver engaging and intuitive iOS
                                    applications that
                                    captivate audiences and drive results. Partner with us to bring your app vision to life and
                                    stay ahead in today's competitive market.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="complicated-things-img text-right clearfix">
                                <img src="../images/apple-ios-app-store-seeklogo.svg" className="complicated-things-model" alt="complicated-things-model" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="rxsection-y-space ctaBg text-center bg-cover beforeDark relative" style={{ "backgroundImage": "url(\"../images/hire_dedicated_ios_development_service_81065c6945.jpg\")", "backgroundPosition": "center center", "marginBottom": "70px" }}>
                    <div className="container">
                        <div className="flex flex-wrap items-center justify-center relative">
                            <div className="contentWhite">
                                <h2 className="w-full h2 mx-auto">Hire iOS App Developer for All your iOS Development Needs </h2>
                            </div>
                            <div className="contentWhite">
                                <p className="para_md"></p>
                            </div>
                            <div className="contentWhite para_md">
                                <p>iOS app developers from Radixweb are known for their ability to come up with unique ideas and
                                    develop feature-rich yet customer-centric applications using domain-oriented methodologies
                                </p>
                            </div>
                            <div className="w-full lg:mt-8 mt-5 btnNEArrowWhite hire-button">
                                <p><Link to="/contact" title="Hire iOS Developer">Hire iOS Developer</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-jquery choose-us-developer whiteSection whiteSection1 deep-blue-bg no-after">
                <div className="container">
                    <div className="choose-us-developer-heading text-center">
                        <h3 className="long-sm-text color-white">Why Should You Choose Us?</h3>
                    </div>
                    <div className="choose-us-developer-inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="choose-us-developer-inner-category block-3 top clearfix">
                                    <ul>
                                        <li>
                                            <div className="choose-us-developer-inner-category-top clearfix">
                                                <img src="../images/expertises.png" className="customized-icon" alt="Customized experience" />
                                                <h4 className="choose-us-developer-inner-category-text">
                                                    Customized Experiences
                                                </h4>
                                            </div>
                                            <p className="choose-us-developer-content">
                                                Our specialized iOS development process utilizes the latest stable iOS
                                                version along with the best practices to provide extended functionality. This
                                                way,
                                                we can provide the best tailored solutions for your business.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="choose-us-developer-inner-category block-3 clearfix">
                                    <ul>
                                        <li>
                                            <div className="choose-us-developer-inner-category-top clearfix">
                                                <img src="../images/guarantees.png" className="satisfaction-icon" alt="Satisfaction Guarantee" />
                                                <h4 className="choose-us-developer-inner-category-text">
                                                    Satisfaction Guarantee
                                                </h4>
                                            </div>
                                            <p className="choose-us-developer-content">
                                                For us, customer satisfaction is of the utmost importance. We will provide you
                                                with <strong>dedicated iOS developers</strong> as well as a project manager
                                                to ensure that all the aspects of your project run smoothly.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="choose-us-developer-inner-category block-3 clearfix">
                                    <ul>
                                        <li>
                                            <div className="choose-us-developer-inner-category-top clearfix">
                                                <img src="../images/collectives.png" className="collective-icon" alt="Collective Collaboration" />
                                                <h4 className="choose-us-developer-inner-category-text">
                                                    Collective Collaboration
                                                </h4>
                                            </div>
                                            <p className="choose-us-developer-content">
                                                We aim to shape the right engagement model for your custom solution right from
                                                the beginning. As a team we develop unique App solutions according to your needs
                                                and help promote your online market presence.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="choose-us-developer-inner-category block-3 clearfix">
                                    <ul>
                                        <li>
                                            <div className="choose-us-developer-inner-category-top clearfix">
                                                <img src="../images/rockets.png" className="fast-development-icon" alt="Fast Development" />
                                                <h4 className="choose-us-developer-inner-category-text">
                                                    Fast Development
                                                </h4>
                                            </div>
                                            <p className="choose-us-developer-content">
                                                Having developers that have strong time management skills is our specialty. You
                                                can trust us to efficiently deliver results for your project while being
                                                completed on time and on budget.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="choose-us-developer-inner-category block-3 clearfix">
                                    <ul>
                                        <li>
                                            <div className="choose-us-developer-inner-category-top clearfix">
                                                <img src="../images/discounts.png" className="pricing-icon" alt="Competitive Pricing" />
                                                <h4 className="choose-us-developer-inner-category-text">
                                                    Competitive Pricing
                                                </h4>
                                            </div>
                                            <p className="choose-us-developer-content">
                                                Looking to hire an expert iOS developer or consultant? Be sure you contact us
                                                as we have some of the most competitive rates on the market for dedicated
                                                development professionals.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="choose-us-developer-inner-category block-3 clearfix">
                                    <ul>
                                        <li>
                                            <div className="choose-us-developer-inner-category-top clearfix">
                                                <img src="../images/telephones.png" className="support-icon" alt="Support icon" />
                                                <h4 className="choose-us-developer-inner-category-text">
                                                    18/5 Technical Support
                                                </h4>
                                            </div>
                                            <p className="choose-us-developer-content">
                                                Our dedicated support team and strong technical assistance helps your business
                                                through any issues via email, Skype, phone or other chat platforms!
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>















            {/* EXACT MIGRATED CONTENT END */}
        </div>
    );
};

export default IosDev;
