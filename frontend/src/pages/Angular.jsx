import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const Angular = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return (
    <div>
      {/* EXACT MIGRATED CONTENT BEGIN */}



      <section className="page-angular-banner banner-top">
        <div className="banner-inner min-adj">
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <div className="heading-in page-angular">
                  <h1>Hire Dedicated Angular Developers</h1>
                  <p className="page-angular-banner-text">
                    Everything you need to get your project started in 24 hours
                  </p>
                  <p>
                    <Link to="/contact" className="btn starBtn page-angular-btn-default">Get Started</Link><Link to="/about" className="btn starBtn page-angular-btn">About Us</Link>
                  </p>
                </div>
              </div>
              <div className="col-sm-5"></div>
            </div>
          </div>
        </div>
        <div className="banner-overlay1"></div>
        <div className="banner-overlay-shape1"></div>
        <div className="banner-overlay-shape2"></div>
      </section>
      <section className="page-angular intro-text whiteSection no-after">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="whoText angular-intro-content">
                <h2 className="long-lg-text">
                  Enhance your project with our in-house talent, offering expertise in Angular Development services and beyond."
                </h2>
                <p>
                  Angular is an open-source JavaScript framework that extends the
                  funcationality of HTML. The important use of Angular is to
                  improve browser-based applications with the help of MVC (model
                  view controller) capability. In simpler words, it’s designed to
                  make front-end web development and testing much easier and
                  faster by using templates, command line tools, and IDEs. Angular
                  offers cross platform support for today’s devices, the speed and
                  performance required as a modern development tool, and the
                  productivity of a framework.
                </p>
                <p>
                  GoZooms employs specialized Angular developers who are
                  experienced in Javascript and jQuery to create real-time
                  applications effortlessly in this framework. We are highly
                  recognized as the best Angular development company for
                  developing single page applications in an agile manner. Our team
                  will help you to take your web or mobile app ideas from concept
                  to reality using the Angular framework.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="page-angular-image-top text-center">
                <img className="angular-mascot" src="/images/angularboy.svg" width="230" height="280" alt="CodeClouds' Angular JS development services" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-angular skilled-angular-developement light-blue whiteSection no-after">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="long-lg-text">
                Dedicated and Skilled Angular Development
              </h3>
            </div>
            <div className="col-md-4 col-sm-4 col-xl-12 clearfix">
              <div className="skilled-angular-developement-blocks text-center clearfix">
                <div className="skilled-angular-developement-blocks-imgHolder">
                  <img className="skilled-angular-developement-blocks-img-experience" src="../images/thought.png" width="104" height="113" alt="5 years of Angular experience" />
                </div>
                <p className="skilled-angular-developement-blocks-textConent">
                  5+ years of working with Angular has given us extensive
                  knowledge and technical skills to deal with all types of
                  projects.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xl-12 clearfix">
              <div className="skilled-angular-developement-blocks text-center clearfix">
                <div className="skilled-angular-developement-blocks-imgHolder">
                  <img className="skilled-angular-developement-blocks-img-accomplished" src="../images/expertise.png" width="80" height="111" alt="Experienced with Angular" />
                </div>
                <p className="skilled-angular-developement-blocks-textConent">
                  We’re an accomplished Angular development company working with
                  enthusiasm and dedication to produce great results.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xl-12 clearfix">
              <div className="skilled-angular-developement-blocks text-center clearfix">
                <div className="skilled-angular-developement-blocks-imgHolder">
                  <img className="skilled-angular-developement-blocks-img-effiency" src="../images/performance.png" width="136" height="76" alt="Efficient Development" />
                </div>
                <p className="skilled-angular-developement-blocks-textConent">
                  Our efficiency means competitive rates and rapid delivery of
                  Angular development services and solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-angular page-angular-services">
        <div className="page-angular-services-inner">
          <div className="app-development-expert-left">
            <img className="angular-support-img" src="../images/angular-icon.svg" width="234" height="312" alt="Customer satisfaction" />
          </div>
          <div className="app-development-expert-right">
            <div className="app-development-expert-right-inner">
              <div className="angular-support-content">
                <h3 className="long-lg-text">
                  Our High Quality Angular Development Services
                </h3>
                <ul className="support-list">
                  <li>Angular web app development</li>
                  <li>Angular dashboards and web portals</li>
                  <li>Angular mobile web app development</li>
                  <li>Angular single-page applications</li>
                </ul>
                <ul className="support-list">
                  <li>Angular performance optimization</li>
                  <li>Angular eCommerce development</li>
                  <li>Angular cross-platform development</li>
                  <li>Angular plugin and widget development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-angular talk-to-codecloud-ng-experts light-blue whiteSection no-after">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="long-lg-text">
                Talk to GoZooms Expert Angular Developers Today
              </h3>
            </div>
            <div className="col-md-12 clearfix text-center">
              <ul className="arrows">
                <li className="blue">Get in touch with us</li>
                <li className="gray-first">Discuss your project</li>
                <li className="gray-second">Finalize the details</li>
                <li className="last red">Project Begins</li>
              </ul>
              <div className="triangle-3"></div>
            </div>
          </div>
          <div className="row">
            <div className="wpcf7 js" id="wpcf7-f16448-o1" lang="en-US" dir="ltr">
              <div className="screen-reader-response">
                <p role="status" aria-live="polite" aria-atomic="true"></p>
                <ul></ul>
              </div>
              <form action="../angular.php" method="post" className="wpcf7-form init salesBtn theme_1 noErrorMsg" id="contactform7" aria-label="Contact form" novalidate="novalidate" data-status="init">
                <div style={{ "display": "none" }}>
                  <input type="hidden" name="_wpcf7" value="16448" />
                  <input type="hidden" name="_wpcf7_version" value="5.7.6" />
                  <input type="hidden" name="_wpcf7_locale" value="en_US" />
                  <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f16448-o1" />
                  <input type="hidden" name="_wpcf7_container_post" value="0" />
                  <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                  <input type="hidden" name="_wpcf7cf_hidden_group_fields" value="[]" />
                  <input type="hidden" name="_wpcf7cf_hidden_groups" value="[]" />
                  <input type="hidden" name="_wpcf7cf_visible_groups" value="[]" />
                  <input type="hidden" name="_wpcf7cf_repeaters" value="[]" />
                  <input type="hidden" name="_wpcf7cf_steps" value="{}" />
                  <input type="hidden" name="_wpcf7cf_options" value="{&quot;form_id&quot;:16448,&quot;conditions&quot;:[],&quot;settings&quot;:{&quot;animation&quot;:&quot;yes&quot;,&quot;animation_intime&quot;:200,&quot;animation_outtime&quot;:200,&quot;conditions_ui&quot;:&quot;normal&quot;,&quot;notice_dismissed&quot;:false,&quot;notice_dismissed_update-cf7-5.6&quot;:true,&quot;notice_dismissed_update-cf7-5.6.2&quot;:true,&quot;notice_dismissed_update-cf7-5.6.4&quot;:true}}" />
                </div>
                <div className="col-md-6 clearfix">
                  <div className="form-group-row clearfix">
                    <div className="form-group col-md-6 talk-to-expert-form-holder-block name">
                      <p>
                        <span className="wpcf7-form-control-wrap" data-name="Name"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control required" tabindex="1" aria-required="true" aria-invalid="false" placeholder="Name" value="" type="text" name="angularName" /></span>
                      </p>
                    </div>
                    <div className="form-group col-md-6 talk-to-expert-form-holder-block organisation">
                      <p>
                        <span className="wpcf7-form-control-wrap" data-name="Business"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control required" tabindex="2" aria-required="true" aria-invalid="false" placeholder="Business/Organization" value="" type="text" name="angularBusiness" /></span>
                      </p>
                    </div>
                  </div>
                  <div className="form-group-row clearfix">
                    <div className="form-group col-md-6 talk-to-expert-form-holder-block name">
                      <p>
                        <span className="wpcf7-form-control-wrap" data-name="Email"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control required email" tabindex="3" aria-required="true" aria-invalid="false" placeholder="Email" value="" type="email" name="angularEmail" /></span>
                      </p>
                    </div>
                    <div className="form-group col-md-6 talk-to-expert-form-holder-block organisation">
                      <p>
                        <span className="wpcf7-form-control-wrap" data-name="Email"><input size="17" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control required phone" tabindex="3" aria-required="true" aria-invalid="false" placeholder="Phone No." value="" type="tel" name="angularPhoneNo" /></span>
                      </p>
                    </div>
                  </div>
                  <div className="form-group-row clearfix">
                    <div className="form-group talk-to-expert-form-holder-block">
                      <p>
                        <span className="wpcf7-form-control-wrap" data-name="Subject"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control required" tabindex="5" aria-required="true" aria-invalid="false" placeholder="Subject" value="" type="text" name="angularSubject" /></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 form-group">
                  <p>
                    <span className="wpcf7-form-control-wrap" data-name="Enquiry">
                      <textarea cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control expert-message required" tabindex="6" aria-required="true" aria-invalid="false" placeholder="Tell us more about your enquiry" name="angularTextArea"></textarea>
                    </span>
                  </p>
                </div>
                <div className="form-group col-md-12 privacy-text clearfix">
                  <div className="row clearfix">
                    <div className="col-md-6">
                      <p>
                        <label className="agree-lable"><span className="wpcf7-form-control-wrap" data-name="AgreePrivacyPolicy"><span className="wpcf7-form-control wpcf7-checkbox wpcf7-validates-as-required form-contro required" id="contact_form_chkbox"><span className="wpcf7-list-item first last"><input type="checkbox" name="AgreePrivacyPolicy[]" value="I have read and agree" tabindex="7" checked="checked" className="required" /><span className="wpcf7-list-item-label">I have read and
                          agree</span></span></span></span>
                          to the
                          <a href="#" className="privacy-link form_pp" target="_blank" rel="nofollow">Privacy Policy</a></label>
                      </p>
                      <div id="error_msg" style={{ "display": "none" }}>
                        <p>This field is required.</p>
                      </div>
                      <p>
                        <label className="agree-lable subscrb-check"><span className="wpcf7-form-control-wrap" data-name="subscribeCheck"><span className="wpcf7-form-control wpcf7-checkbox cf7-checkbox form-check-input"><span className="wpcf7-list-item first last"><input type="checkbox" name="subscribeCheck[]" value="yes" checked="checked" tabindex="8" /><span className="wpcf7-list-item-label">yes</span></span></span></span>
                          I would like to receive information about GoZooms’
                          products, services and newsletters.</label>
                      </p>
                      <div className="clearfix reason-for-data-collection">
                        <p className="data-collection-header">
                          Why we collect this information and how we use it
                          <input className="wpcf7-form-control wpcf7-hidden" id="current_url" value="https://www.codeclouds.com/web-development/angular/" type="hidden" name="pageUrl" />
                          <input className="wpcf7-form-control wpcf7-hidden" id="source_url" value="Organic" type="hidden" name="sourceUrl" />
                          <input className="wpcf7-form-control wpcf7-hidden" id="campain_url" value="" type="hidden" name="campainUrl" />
                          <input className="wpcf7-form-control wpcf7-hidden" id="device_url" value="Desktop" type="hidden" name="urlDevice" />
                          <input className="wpcf7-form-control wpcf7-hidden" id="user_country" value="India" type="hidden" name="userCountry" />
                        </p>
                        <p>
                          We treat your information with respect, and we will
                          never sell it to other companies. This information is
                          collected out of necessity for basic account creation,
                          billing, and support purposes. We will only email you
                          for support.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="btn-otr" style={{ "float": "right" }}>
                        <p>
                          <input className="wpcf7-form-control has-spinner wpcf7-submit btn starBtn expertAngulardevelopers" tabindex="8" type="submit" value="Submit" /><span className="wpcf7-spinner"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p style={{ "display": "none !important" }}>
                  <label>Δ<textarea name="_wpcf7_ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea></label><input type="hidden" id="ak_js_1" name="_wpcf7_ak_js" value="1687032437344" />

                </p>
                <div className="wpcf7-response-output" aria-hidden="true"></div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="page-angular why-chose-ng-clouds red-bg whiteSection no-after">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center color-white">
              <h3 className="long-lg-text">Why Should You Choose Us?</h3>
            </div>
          </div>
          <div className="row">
            <div className="clearfix col-md-4 color-white why-chose-ndDeveloper-block">
              <img className="chose-img-satisfaction" src="../images/expertises.png" width="40" height="40" alt="Customer satisfaction" />
              <h4 className="why-chose-header">Customer Satisfaction</h4>
              <p className="why-chose-content">
                We take customer satisfaction seriously, providing you a dedicated
                account manager and project manager to make sure all aspects of
                your engagement with us run smoothly.
              </p>
            </div>
            <div className="clearfix col-md-4 color-white color-white why-chose-ndDeveloper-block">
              <img className="chose-img-experience" src="../images/guarantees.png" width="50" height="40" alt="Extensive Experience" />
              <h4 className="why-chose-header">Extensive Experience</h4>
              <p className="why-chose-content">
                GoZooms is a provider of efficent solutions for business big or
                small. We don’t utilize off-the-shelf products but instead rely
                upon a fully integrated customized approach.
              </p>
            </div>
            <div className="clearfix col-md-4 color-white color-white why-chose-ndDeveloper-block">
              <img className="chose-img-Collaboration" src="../images/collectives.png" width="49" height="40" alt="Exceptional Collaboration" />
              <h4 className="why-chose-header">Exceptional Collaboration</h4>
              <p className="why-chose-content">
                Our offshore developers will work with you for dedicated hours. We
                aim to shape the right engagement model for your custom solution
                to meet your needs on time and on budget.
              </p>
            </div>
            <div className="clearfix col-md-4 color-white color-white why-chose-ndDeveloper-block">
              <img className="chose-img-fast-developement" src="../images/rockets.png" width="60" height="40" alt="Fast development" />
              <h4 className="why-chose-header">Fast Development</h4>
              <p className="why-chose-content">
                We have refined our development process to result in applications
                being built quicker and more efficiently, so projects are
                completed on time and on budget.
              </p>
            </div>
            <div className="clearfix col-md-4 color-white color-white why-chose-ndDeveloper-block">
              <img className="chose-img-Pricing-ng" src="../images/discounts.png" width="33" height="40" alt="Competitive pricing" />
              <h4 className="why-chose-header">Competitive Pricing</h4>
              <p className="why-chose-content">
                Hiring an expert Angular developer, designer, or consultant? Make
                sure you get a quote from us as we have some of the most
                competitive rates on the market for development professionals.
              </p>
            </div>
            <div className="clearfix col-md-4 color-white color-white why-chose-ndDeveloper-block">
              <img className="chose-img-technical-Support" src="../images/telephones.png" width="34" height="40" alt="18/5 Technical Support" />
              <h4 className="why-chose-header">18/5 Technical Support</h4>
              <p className="why-chose-content">
                Our open communication lines, dedicated support team, and strong
                technical assistance helps your business through any issues that
                you encounter.
              </p>
            </div>
          </div>
        </div>
      </section>














      {/* EXACT MIGRATED CONTENT END */}
    </div>
  );
};

export default Angular;
