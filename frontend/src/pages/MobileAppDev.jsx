import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const MobileAppDev = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* EXACT MIGRATED CONTENT BEGIN */}





            <section className="home-app hero-sec r-bg-x">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 vcenter">
                            <div className="hero-content-a">

                                <h1 className="mb30 zup" data-aos="fade-in" data-aos-delay="200">Top Mobile Application Development Company in Canada</h1>
                                <p className="zup" data-aos="fade-in" data-aos-delay="500">
                                    Canada's top mobile app developer crafting secure, dynamic solutions for iOS, Android, and Cross-Platform, ensuring robustness.</p>

                                <div className="uniq-points mt40" data-aos="fade-in" data-aos-delay="800">
                                    <div className="uniq-card uca">
                                        <i className="fas fa-users"></i>
                                        <p>100k User Engagement</p>
                                    </div>
                                    <div className="uniq-card ucb">
                                        <i className="fab fa-app-store-ios"></i>
                                        <p>100+ Featured App</p>
                                    </div>
                                    <div className="uniq-card ucc">
                                        <i className="fas fa-rocket"></i>
                                        <p>600+ App Published</p>
                                    </div>
                                </div>
                                <div className="btn-sets2 vcenter  mt20" data-aos="fade-in" data-aos-delay="1100">
                                    <Link to="/contact" className="ree-btn  ree-btn-grdt1 mw-80 mr20 mt20">Talk to Our Expert <FaArrowRight className="inline ml-1" /></Link>
                                    <div className="media vcenter mt20">
                                        <div className="btnctm">
                                            <Link to="/about" className="ree-btn ree-btn-grdt2 mw-80 m-mt30">Know More  <FaArrowRight className="inline ml-1" /></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 vcenterYU">
                            <div className="sol-image m-mt20">
                                <img src="../images/app-mockup.png" alt="App development" className="img-fluid" data-aos="fade-in" data-aos-delay="400" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="home-about sec-pad r-bg-a">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="about-content-home m-mb60 text-center">
                                <span className="sub-heading mb15">We Are Gozoom Technologies</span>
                                <h2 className="mb15"><span className="ree-text rt40">Award</span> Winning App Development Company</h2>
                                <h4 className="mb15">#1 Mobile App Company, Awarded for its Top Features/Editor Apps Delivered.</h4>
                                <p>Gozoom Technologies is a leading global player in Web, App, and Digital Marketing services. Specializing in Web Design, App Development, Digital Marketing, Product Design, and Cloud Services, we prioritize affordability while delivering top-quality solutions. With a strong focus on customer satisfaction and high repeat business rates, we stand out in the industry. Don't hesitate any longer – let's transform your ideas into reality with our innovative approach. Your success is our ultimate goal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="agency-info-ree mt100">
                    <div className="agency-picture"><img src="../images/office-view.jpg" alt="img" className="img-fluid" /></div>
                    <div className="container">
                        <div className="row key-and-award">
                            <div className="ree-app-st-a flx-end m-order2">
                                <div className="btnctm">
                                    <Link to="/contact" className="ree-btn ree-btn-grdt2 mw-80 m-mt30">Connect with Us <FaArrowRight className="inline ml-1" /></Link>
                                </div>
                            </div>
                            <div className="ree-app-st-b m-order1">
                                <div className="quick-key-points">
                                    <div className="key-highlights">
                                        <div className="key-highlt-b">
                                            <h3><span>3000</span> <span>+</span></h3>
                                            <p>Project Delivered</p>
                                        </div>
                                        <div className="key-highlt-b">
                                            <h3><span>100 </span> <span>+</span></h3>
                                            <p>Enterprise Clients</p>
                                        </div>
                                        <div className="key-highlt-b">
                                            <h3><span>30 </span> <span>+</span></h3>
                                            <p>Experts Team</p>
                                        </div>
                                        <div className="key-highlt-b">
                                            <h3><span>7 </span> <span>+</span></h3>
                                            <p>Success Years</p>
                                        </div>
                                    </div>
                                    <div className="agency-info-anim text-center">
                                        <div className="animated-logo">
                                            <img src="../images/logo2.webp" alt="gozoom tech logo" className="logo-anim" />
                                            <img src="../images/app-development.webp" alt="gozoom logo" className="circle-anim" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            <section className="r-bg-i sec-pad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sec-heading text-center ">
                                <span className="sub-heading mb15">Ous Services</span>
                                <h2>We build modern <span className="ree-text rt40">creative</span> <span className="ree-text rt40">mobile</span> experiences.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt30">
                        <div className="col-lg-4 col-sm-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="ree-card r-bg-c mt60">
                                <div className="ree-card-img shadows"><img src="../images/icons/android.svg" alt="services" /> </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15"><Link to="/android-development"> Android Development</Link></h3>
                                    <p>Elevate your business with our expert Android development services. We create cutting-edge apps for optimal performance and user satisfaction.</p>
                                </div>
                                <div className="ree-card-content-link">
                                    <Link to="/android-development" className="ree-card-link mt40">Read More <FaArrowRight className="inline ml-1" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img"><img src="../images/icons/apple.svg" alt="services" /> </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15"><Link to="/ios-development">iOS Development</Link></h3>
                                    <p>Transform your vision into reality with our iOS development expertise. From concept to launch, we craft sleek, intuitive apps that captivate users and elevate your brand.</p>
                                </div>
                                <div className="ree-card-content-link">
                                    <Link to="/ios-development" className="ree-card-link mt40">Read More <FaArrowRight className="inline ml-1" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4" data-aos="fade-up" data-aos-delay="500">
                            <div className="ree-card r-bg-c  mt60">
                                <div className="ree-card-img"><img src="../images/icons/cube.svg" alt="services" /> </div>
                                <div className="ree-card-content mt40">
                                    <h3 className="mb15"><a href="#">Hybrid App Development</a></h3>
                                    <p>Hybrid apps offer cost-effective solutions, reaching wider audiences with seamless performance across platforms, saving time and resources for businesses.</p>
                                </div>
                                <div className="ree-card-content-link">
                                    <a href="#" className="ree-card-link mt40">Read More <i className="fas fa-arrow-right fa-btn"></i>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="cta-block-wide mt100">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-10 vcenter">
                                <div className="cta-heading-wide-bt">
                                    <h3>Hire World-Class <span className="ree-text rt40">Mobile App Developers</span></h3>
                                    <Link to="/contact" className="ree-btn  ree-btn-grdt1 mw-80">Hire Now <FaArrowRight className="inline ml-1" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <section className="r-bg-x zup sec-pad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sec-heading text-center blck">
                                <h2>Technologies  we work with</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt30">
                        <div className="col-lg-2 col-md-3 col-sm-2 col-6">
                            <div className="icon-with-title">
                                <a href="javascript:void(0)">
                                    <div className="iwt-icon"> <img src="../images/icons/apple.svg" alt="Apple" /> </div>
                                    <div className="iwt-content">
                                        <p>iOS</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-2 col-6">
                            <div className="icon-with-title">
                                <a href="javascript:void(0)">
                                    <div className="iwt-icon"> <img src="../images/icons/android.svg" alt="Android" /> </div>
                                    <div className="iwt-content">
                                        <p>Android</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-2 col-6">
                            <div className="icon-with-title">
                                <a href="javascript:void(0)">
                                    <div className="iwt-icon"> <img src="../images/icons/flutterio-icon.svg" alt="Flutter" /> </div>
                                    <div className="iwt-content">
                                        <p>Flutter</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-2 col-6">
                            <div className="icon-with-title">
                                <a href="javascript:void(0)">
                                    <div className="iwt-icon"> <img src="../images/icons/java.svg" alt="Java" />
                                    </div>
                                    <div className="iwt-content">
                                        <p>Java</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-2 col-6">
                            <div className="icon-with-title">
                                <a href="javascript:void(0)">
                                    <div className="iwt-icon"> <img src="../images/icons/physics.svg" alt="React Native" /> </div>
                                    <div className="iwt-content">
                                        <p>React Native</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-2 col-6">
                            <div className="icon-with-title">
                                <a href="javascript:void(0)">
                                    <div className="iwt-icon"> <img src="../images/kotlin.png" alt="python" /> </div>
                                    <div className="iwt-content">
                                        <p>Kotlin</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-2 col-6">
                            <div className="icon-with-title">
                                <a href="javascript:void(0)">
                                    <div className="iwt-icon"> <img src="../images/icons/java.svg" alt="Java" />
                                    </div>
                                    <div className="iwt-content">
                                        <p>Java</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-2 col-6">
                            <div className="icon-with-title">
                                <a href="javascript:void(0)">
                                    <div className="iwt-icon"> <img src="../images/icons/swift.svg" alt="Apswiftple" /> </div>
                                    <div className="iwt-content">
                                        <p>Swift</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-2 col-6">
                            <div className="icon-with-title">
                                <a href="javascript:void(0)">
                                    <div className="iwt-icon"> <img src="../images/dart.png" alt="pwa" />
                                    </div>
                                    <div className="iwt-content">
                                        <p>Dart</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>











            <section className="mobile-container">
                <div className="bg_wrapper">
                    <div className="container">
                        <div className="cl_serv_part">
                            <h2 className="heading2"> Why Choose Us for Custom
                                Mobile <br />Gozoom Development Services?</h2>
                            <div className="app__subhead para"> Gozoom is an excellent native and cross-platform mobile app
                                development service <br /> provider. With over three years of experience, an expert team of over
                                1,200 professionals, and
                                an <br /> impressive portfolio of over 3,000 successful projects, our team is capable of
                                delivering
                                top-notch <br /> next-generation mobile apps that guarantee highest ROI.</div>
                            <div className="parter_tab_panel">
                                <div className="ds_flex flex_spc_btw">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="tab__head_panel">
                                                    <ul>
                                                        <li className="tab-link-wrapper active" rel="tab1"> <span>Security- and <br />
                                                            Compliance-First Approach</span></li>
                                                        <li className="tab-link-wrapper" rel="tab2"> <span>4.5/5 Average Rating</span></li>
                                                        <li className="tab-link-wrapper" rel="tab3"> <span>Advanced Technical <br />
                                                            Expertise</span></li>
                                                        <li className="tab-link-wrapper" rel="tab4"> <span>Faster Delivery</span></li>
                                                    </ul>
                                                </div>


                                            </div>
                                            <div className="col">
                                                <div className="part_rght_panel ds_flex flex_spc_btw">
                                                    <div className="tab-detail block" id="tab1" style={{ "display": "block" }}>
                                                        <div className="tab_detl_inner ds_flex flex_spc_btw flex_al_start">
                                                            <div className="tab_img_wrap">
                                                                <figure> <img src="../images/young-business-team.webp" alt="" /></figure>
                                                            </div>
                                                            <p className="para text"> By prioritizing data encryption and strictly following all
                                                                compliances and
                                                                regulations
                                                                we cater to secure mobile
                                                                application development for our esteemed clients. Our commitment to
                                                                implement robust security measures help businesses mitigate risks and
                                                                establish customer trust, ensuring a more substantial online presence and
                                                                enhanced business agility.</p>
                                                        </div>
                                                    </div>
                                                    <div className="tab-detail" id="tab2">
                                                        <div className="tab_detl_inner ds_flex flex_spc_btw flex_al_start">
                                                            <div className="tab_img_wrap">
                                                                <figure> <img src="../images/business-people.webp" alt="" /></figure>
                                                            </div>
                                                            <p className="para"> Custom mobile apps developed for our client base witness an
                                                                exceptional
                                                                average rating of 4.5/5 at both the Google Play Store and App Store. The
                                                                positive feedback and excellent ratings for our app’s performance, features,
                                                                and overall UX are a testimony to the level of perfection we achieve for our
                                                                clients’ projects.</p>
                                                        </div>
                                                    </div>
                                                    <div className="tab-detail" id="tab3">
                                                        <div className="tab_detl_inner ds_flex flex_spc_btw flex_al_start">
                                                            <div className="tab_img_wrap">
                                                                <figure> <img src="../images/programmer-working-with-software.webp" alt="" /></figure>
                                                            </div>
                                                            <p className="para"> Our skilled team is highly proficient in an extensive array of
                                                                technologies,
                                                                encompassing
                                                                Artificial
                                                                Intelligence, Cloud Computing, IoT, and more. Each member of our team
                                                                contributes a distinct skill set and valuable experience in offering custom
                                                                mobile apps services to our client base.</p>
                                                        </div>
                                                    </div>
                                                    <div className="tab-detail" id="tab4">
                                                        <div className="tab_detl_inner ds_flex flex_spc_btw flex_al_start">
                                                            <div className="tab_img_wrap">
                                                                <figure> <img src="../images/software-developers.webp" alt="" /></figure>
                                                            </div>
                                                            <p className="para">we consistently deliver
                                                                projects 57%
                                                                faster compared to traditional delivery methods. Our dedicated mobile
                                                                software development services and efficient project management techniques
                                                                enable us to accelerate development timelines while maintaining high quality
                                                                and client satisfaction.</p>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
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

export default MobileAppDev;
