import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const AndroidDev = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* EXACT MIGRATED CONTENT BEGIN */}





            <section className="page-php-banner banner-top" style={{ "backgroundImage": "url('/images/android1.jpg')" }}>
                <div className="banner-inner min-adj">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-in page-php">
                                    <h1 className="page-php-banner-heading">
                                        Hire Talented Android Developers
                                    </h1>
                                    <p className="page-php-banner-text">
                                        Discover how we can help make your Android App successful
                                    </p>
                                    <p>
                                        <Link to="/contact" className="btn starBtn page-php-btn-default">Enquire Now</Link>
                                        <Link to="/about" className="btn starBtn page-php-btn scrollTo">Learn More</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-overlay1"></div>
                <div className="banner-overlay-shape1"></div>
                <div className="banner-overlay-shape2"></div>
            </section>
            <section className="page-php amazing-idea whiteSection no-after">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="amazing-idea-text pad-top-60">
                                <h2 className="long-lg-text">
                                    "Assisting businesses in transforming their ideas into <br /> amazing Android experiences.""
                                </h2>

                                <p>
                                    "Java is one of the most prominent and essential programming languages, fueling a
                                    significant portion of the mobile app ecosystem. With millions of apps built using Java, it
                                    stands as the preferred choice for feature-rich Android app development. Many components
                                    play a crucial role in crafting a dynamic mobile application with robust functionality on
                                    the server side.”
                                </p>
                                <p>
                                    "Our "
                                    <strong>team of experienced Android application
                                        developers</strong>
                                    "Deliver stable and efficient code that empowers clients worldwide to seamlessly access
                                    their products and services. Collaborating with GoZooms ensures access to top-notch,
                                    tailored, and innovative Android app solutions. Leveraging a refined process honed over
                                    years of experience, we minimize development time and costs while maximizing quality. Our
                                    mastery of Android app development practices ensures superior results in record time.""
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="amazing-idea text-center clearfix">
                                <img src="../images/195.jpg" alt="Hire PHP Developers" naptha_cursor="region" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-php team-specialize whiteSection violet-bg no-after">
                <div className="container">
                    <div className="team-specialize-heading text-center clearfix">
                        <h3 className="team-specialize-heading-text">
                            Our Android Team Specializes In...
                        </h3>
                    </div>
                    <div className="team-specialize-inner">
                        <div className="row">
                            <div className="team-specialize-column-3-info top clearfix">
                                <div className="col-sm-4">
                                    <div className="team-specialize-part text-center">
                                        <div className="team-specialize-img-part">
                                            <img src="../images/phpsnowflake.svg" className="reduce-time-cost-icon" alt="snowflake" />
                                        </div>
                                        <p>
                                            Providing exceptional, customized, and distinctive Android app development solutions
                                            with a proven development process that <strong> minimizes time and cost.</strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="team-specialize-part text-center">
                                        <div className="team-specialize-img-part">
                                            <img src="../images/phpdiamond.svg" className="php-application-icon" alt="diamond" />
                                        </div>
                                        <p>
                                            Adhering to dominant and flawless core Android development practices, employing
                                            robust infrastructure and flexible models to craft outstanding Android applications.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="team-specialize-part text-center">
                                        <div className="team-specialize-img-part">
                                            <img src="../images/phpplane.svg" className="rapid-development-icon" alt="plane" />
                                        </div>
                                        <p>
                                            Accelerating the development of Android mobile apps and interfaces by implementing
                                            more efficient coding techniques, resulting in reduced development time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-webdesign php-professional choose-packaging whiteSection no-after">
                <div className="container">
                    <div className="row clearfix" id="learnMore">
                        <div className="work-with-box">
                            <h3 className="long-sm-text">
                                Why You Should Work with Our Android Developers
                            </h3>
                            <div className="choose-our-designers clearfix">
                                <div className="col-sm-7">
                                    <div className="choose-our-designers-content top clearfix">
                                        <ul>
                                            <li>
                                                Our profound expertise ensures unparalleled efficiency in Android development.
                                            </li>
                                            <li>
                                                We consistently deliver optimal performance, yielding exceptional results for our Android clients.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="choose-our-designers-content top clearfix">
                                        <ul>
                                            <li>
                                                Our utilization of Model-View-Controller architecture streamlines Android app development.
                                            </li>
                                            <li>
                                                We are dedicated to providing efficient solutions at competitive rates, maximizing value for our Android partners.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="choose-our-designers-content bottom clearfix">
                                        <ul>
                                            <li>
                                                Years of hands-on experience enable us to produce precise and flawless Android code.
                                            </li>
                                            <li>
                                                We offer unwavering customer support and technical guidance through various channels for our Android projects.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="choose-our-designers-img">
                                        <img src="../images/androidboy2.jpg" className="choose-packaging-model" style={{ "width": "166px", "height": "228px" }} alt="php website development" />
                                    </div>
                                    <div className="php-professional-text">
                                        <p className="php-professionals-heading">
                                            Ask our PHP professionals<br />about their services today!
                                        </p>
                                        <div className="clearfix text-center package-get-started">
                                            <Link to="/contact" className="btn starBtn explore">Get Started</Link>
                                        </div>
                                    </div>
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

export default AndroidDev;
