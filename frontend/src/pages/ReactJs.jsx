import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const ReactJs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* EXACT MIGRATED CONTENT BEGIN */}




            <section className="react-js-next-banner banner-top">
                <div className="banner-inner min-adj">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="heading-in page-29-next-heading">
                                    <h1 className="page-29-next-banner-heading">Hire Dedicated React Developers</h1>
                                    <h2 className="page-29-next-banner-text">Build the future of web applications with GoZooms’
                                        Reactjs developers</h2>
                                    <p><Link className="btn starBtn react-js-btn react-js-clr-btn scrollTo" to="/contact">Get Started</Link> <Link className="btn starBtn react-js-btn react-js-trans-btn" to="/about">About Us</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-overlay1"></div>
                <div className="banner-overlay-shape1"></div>
                <div className="banner-overlay-shape2"></div>
            </section>
            <section className="react-wt-nw react-intro-section whiteSection no-after">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-sm-7">
                            <div className="page-29-next-intro-content">
                                <h2 className="section_heading-lt-point mb-30">Next Level of ReactJS Development</h2>
                                <h3 className="banner-pr ltbl-bantext">We help you build remarkable React web and native mobile
                                    applications</h3>
                                <div className="react-wt-nw-intro-contentIn">
                                    <p className="section_cont mb-30">GoZooms’ developers use React to create impressively
                                        flexible user interfaces for web applications. Using React, we can help businesses build
                                        website static or dynamic websites using frameworks like Next.js; use React Native to
                                        build seamless mobile apps, or even create desktop apps using Electron.js!</p>
                                    <p className="section_cont">With our expertise and knowledge with React, you don’t need to look
                                        anywhere else for professional and dedicated React developers. Our React.js developers
                                        have experience with technology stacks like MERN, and adhere to strict architectural
                                        principles when building any React application. This means you can have confidence in us
                                        that we’ll provide the high-quality React solutions without breaking the budget or
                                        timeframe.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="react-wt-nw-intro-img text-center"> <img src="../images/reactboy.svg" width="280" height="556" alt="CodeClouds’ React Dev" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="react-integration-service whiteSection rct-blue-pg no-after">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="section_heading-lt-point mb-50 text-center" id="learn_more">Our Expert React JS Development
                                Services</h2>
                            <div className="crm-integration-serviceIn">
                                <div className="crm-integration-serviceIn-Row mb-50">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="crm-integration-serviceIn-category text-center"> <img src="../images/reactmy1.svg" alt="React Web App Development" width="1200" height="80" className="int-camp-icon" />
                                                <h3 className="integration-serviceIn-head dpt-blue-ht-text">React Web App
                                                    Development</h3>
                                                <div className="integration-serviceIn-content">
                                                    <p className="primary-grey-clr">Our React development and design experts can
                                                        help you build fast, scalable and large web applications.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="crm-integration-serviceIn-category text-center"> <img src="../images/react2.png" alt="React Native Mobile Applications" width="80" height="80" className="int-mig-icon" />
                                                <h3 className="integration-serviceIn-head dpt-blue-ht-text">React Native Mobile
                                                    Applications</h3>
                                                <div className="integration-serviceIn-content">
                                                    <p className="primary-grey-clr">We can build, test, and launch your dream mobile
                                                        app on Android and iOS. Let our React Native experts handle it!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="crm-integration-serviceIn-category text-center"> <img src="../images/react3.png" alt="Static &amp; Dynamic Websites" width="80" height="80" className="int-camp-icon" />
                                                <h3 className="integration-serviceIn-head dpt-blue-ht-text">Static &amp; Dynamic
                                                    Websites</h3>
                                                <div className="integration-serviceIn-content">
                                                    <p className="primary-grey-clr">We create powerful and scalable web applications
                                                        with React using frameworks like Next.js and Gatsby.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="crm-integration-serviceIn-Row mb-50">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="crm-integration-serviceIn-category text-center"> <img src="../images/react4.png" alt="React UI Development" width="120px" height="80" className="int-development-icon" />
                                                <h3 className="integration-serviceIn-head">React UI Development</h3>
                                                <div className="integration-serviceIn-content">
                                                    <p className="primary-grey-clr">Let GoZooms React specialists develop
                                                        impeccable user interfaces that are flexible and interactive!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="crm-integration-serviceIn-category text-center"> <img src="../images/react5.jpg" alt="Server-Side Development" width="120" height="80" className="int-api-icon" />
                                                <h3 className="integration-serviceIn-head">Server-Side Development</h3>
                                                <div className="integration-serviceIn-content">
                                                    <p className="primary-grey-clr">Our React experts can deliver secure, next
                                                        generation experiences through React’s server-side rendering components.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="crm-integration-serviceIn-category text-center"> <img src="../images/react6.svg" alt="React Migration &amp; Optimization" width="140" height="80" className="int-gateway-icon" />
                                                <h3 className="integration-serviceIn-head">React Migration &amp; Optimization</h3>
                                                <div className="integration-serviceIn-content">
                                                    <p className="primary-grey-clr">Want to migrate to React from another JavaScript
                                                        library? We can help you with that, as well as do optimization!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="stickyIO-get-started text-center"> <Link to="/contact">Get Started</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="react-new dev-choose-point whiteSection no-after">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="section_heading-lt-point mb-50">Why Choose Our ReactJS Developers?</h2>
                            <div className="stickyIO-int-dev-row mb-45">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="react-int-devIn flexible"> <img src="../images/react11.png" alt="Flexible Development Solutions" width="80" height="80" className="half-icon" />
                                            <h3 className="stickyIO-int-devIn-heading">Flexible Development Solutions</h3>
                                            <div className="stickyIO-int-devIn-cnt">
                                                <p className="section_cont">Whether you want to build a web application or just want
                                                    ongoing development support, you can <a href="" className="_hiredev_kywd">hire
                                                        our dedicated developers on our monthly or
                                                        fixed pricing packages</a>.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="react-int-devIn expertise"> <img src="../images/react11.png" alt="Expertise &amp; Experience" width="80" height="80" className="half-icon" />
                                            <h3 className="stickyIO-int-devIn-heading">Expertise &amp; Experience</h3>
                                            <div className="stickyIO-int-devIn-cnt">
                                                <p className="section_cont">Our developers are chosen based on their knowledge not
                                                    only with React, but with other JavaScript libraries, technology stacks and
                                                    their ability to adhere to software principles.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="stickyIO-int-dev-row">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="react-int-devIn satisfaction-gty"> <img src="../images/react12.png" alt="Satisfaction Guarantee" width="80" height="80" className="half-icon" />
                                            <h3 className="stickyIO-int-devIn-heading">Satisfaction Guarantee</h3>
                                            <div className="stickyIO-int-devIn-cnt">
                                                <p className="section_cont">We constantly strive for perfection in the solutions we
                                                    deliver. We make sure you’re kept in the loop during the development
                                                    process, so your expectations are met.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="react-int-devIn quality"> <img src="../images/react13.png" alt="Quality With Affordability" width="80" height="80" className="half-icon" />
                                            <h3 className="stickyIO-int-devIn-heading">Quality With Affordability</h3>
                                            <div className="stickyIO-int-devIn-cnt">
                                                <p className="section_cont">With our in-house development team we ensure the quality
                                                    of your project exceeds your expectations, not your budget. Let GoZooms
                                                    take care of your React app development.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-29-next page-29-next-expert whiteSection dp-primary-blue-bg-clr no-after">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4 className="section_heading" id="enquiry">Get Dedicated React Experts Today!</h4>
                            <div className="stickyIO-expertIn">
                                <div className="stickyIO-expertIn-formArea page-29-next-form-area">
                                    <div className="wpcf7 js" id="wpcf7-f23710-o1" lang="en-US" dir="ltr">
                                        <div className="screen-reader-response">
                                            <p role="status" aria-live="polite" aria-atomic="true"></p>
                                            <ul></ul>
                                        </div>
                                        <form action="/react.php" method="post" className="wpcf7-form init salesBtn theme_1 noErrorMsg" id="contactform7" aria-label="Contact form" novalidate="novalidate" data-status="init">
                                            <div style={{ "display": "none" }}> <input type="hidden" name="_wpcf7" value="23710" />
                                                <input type="hidden" name="_wpcf7_version" value="5.7.6" /> <input type="hidden" name="_wpcf7_locale" value="en_US" /> <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f23710-o1" /> <input type="hidden" name="_wpcf7_container_post" value="0" /> <input type="hidden" name="_wpcf7_posted_data_hash" value="" /> <input type="hidden" name="_wpcf7cf_hidden_group_fields" value="[]" /> <input type="hidden" name="_wpcf7cf_hidden_groups" value="[]" /> <input type="hidden" name="_wpcf7cf_visible_groups" value="[]" /> <input type="hidden" name="_wpcf7cf_repeaters" value="[]" /> <input type="hidden" name="_wpcf7cf_steps" value="{}" /> <input type="hidden" name="_wpcf7cf_options" value="{&quot;form_id&quot;:23710,&quot;conditions&quot;:[],&quot;settings&quot;:{&quot;animation&quot;:&quot;yes&quot;,&quot;animation_intime&quot;:200,&quot;animation_outtime&quot;:200,&quot;conditions_ui&quot;:&quot;normal&quot;,&quot;notice_dismissed&quot;:false,&quot;notice_dismissed_update-cf7-5.6&quot;:true,&quot;notice_dismissed_update-cf7-5.6.2&quot;:true,&quot;notice_dismissed_update-cf7-5.6.4&quot;:true}}" />
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="inner-fld-block">
                                                        <div className="form-group">
                                                            <p><label>Name</label><span className="wpcf7-form-control-wrap" data-name="Name"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control required" aria-required="true" aria-invalid="false" value="" type="text" name="reactName" /></span></p>
                                                        </div>
                                                    </div>
                                                    <div className="inner-fld-block">
                                                        <div className="form-group">
                                                            <p><label>Email</label><span className="wpcf7-form-control-wrap" data-name="Email"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control required email" aria-required="true" aria-invalid="false" value="" type="email" name="reactEmail" /></span></p>
                                                        </div>
                                                    </div>
                                                    <div className="inner-fld-block">
                                                        <div className="form-group">
                                                            <p><label>Phone no</label><span className="wpcf7-form-control-wrap" data-name="Phone no"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control required email" aria-required="true" aria-invalid="false" value="" type="tel" name="reactPhoneNo" /></span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="inner-fld-block">
                                                        <div className="form-group">
                                                            <p><label>Subject</label><span className="wpcf7-form-control-wrap" data-name="Subject"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control required" aria-required="true" aria-invalid="false" value="" type="text" name="reactSubject" /></span></p>
                                                        </div>
                                                    </div>
                                                    <div className="inner-fld-block">
                                                        <div className="form-group">
                                                            <p><label>Message</label><span className="wpcf7-form-control-wrap" data-name="Enquiry"><textarea cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control required" aria-required="true" aria-invalid="false" name="reactTextArea"></textarea></span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="status-txt">
                                                        <p className="bld-head"><strong>Why we collect this information and how
                                                            we use it?</strong></p>
                                                        <p>We treat your information with respect, and we will never sell it
                                                            to other companies. This information is collected out of
                                                            necessity for basic account creation, billing, and support
                                                            purposes. We will only email you for support. <input className="wpcf7-form-control wpcf7-hidden" id="current_url" value="https://www.codeclouds.com/web-development/reactjs-development/" type="hidden" name="pageUrl" /> <input className="wpcf7-form-control wpcf7-hidden" id="source_url" value="Organic" type="hidden" name="sourceUrl" /> <input className="wpcf7-form-control wpcf7-hidden" id="campain_url" value="" type="hidden" name="campainUrl" /> <input className="wpcf7-form-control wpcf7-hidden" id="device_url" value="Desktop" type="hidden" name="urlDevice" /> <input className="wpcf7-form-control wpcf7-hidden" id="user_country" value="India" type="hidden" name="userCountry" /></p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="agree_check">
                                                        <p><label className="agree-lable"><span className="wpcf7-form-control-wrap" data-name="AgreePrivacyPolicy"><span className="wpcf7-form-control wpcf7-checkbox wpcf7-validates-as-required form-contro required" id="contact_form_chkbox"><span className="wpcf7-list-item first last"><input type="checkbox" name="AgreePrivacyPolicy[]" value="I have read and agree" tabindex="7" checked="checked" className="required" /><span className="wpcf7-list-item-label">I have read and
                                                            agree</span></span></span></span> to the <a href="#" className="privacy-link form_pp" target="_blank" rel="nofollow">Privacy Policy</a></label></p>
                                                        <div id="error_msg" style={{ "display": "none" }}>
                                                            <p>This field is required.</p>
                                                        </div>
                                                    </div>
                                                    <div className="agree_check subscrb-check">
                                                        <p><label className="agree-lable"><span className="wpcf7-form-control-wrap" data-name="subscribeCheck"><span className="wpcf7-form-control wpcf7-checkbox wpcf7-validates-as-required form-contro required" id="contact_form_chkbox"><span className="wpcf7-list-item first last"><input type="checkbox" name="AgreePrivacyPolicy[]" value="I have read and agree" tabindex="8" checked="checked" className="required" /> <span className="wpcf7-list-item-label">yes</span></span></span></span>
                                                            I
                                                            would like to receive information about GoZooms’ products,
                                                            services and newsletters.</label></p>
                                                    </div>
                                                    <p><input className="wpcf7-form-control has-spinner wpcf7-submit btn starBtn skickyIO-submit text-right" type="submit" value="Send Enquiry" /><span className="wpcf7-spinner"></span></p>
                                                </div>
                                            </div>
                                            <p style={{ "display": "none !important" }}><label>Δ<textarea name="_wpcf7_ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea></label><input type="hidden" id="ak_js_1" name="_wpcf7_ak_js" value="1687126180384" />

                                            </p>
                                            <div className="wpcf7-response-output" aria-hidden="true"></div>
                                        </form>
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

export default ReactJs;
