import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { usePhoneCountry } from '../hooks/usePhonePrefix';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const RECAPTCHA_SITE_KEY = '6Lf9TsQnAAAAANxF0lHRxZTC_YMZIMmV1qX1v1qs';

const Contact = () => {
  const navigate = useNavigate();
  const recaptchaRef = useRef(null);
  const detectedCountry = usePhoneCountry(); // auto-detect from IP
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', service: '' });
  const [submitting, setSubmitting] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const services = [
    'Retail Solutions', 'Integration Services', 'Web Development',
    'Mobile App Development', 'SEO & Digital Marketing', 'Kiosks & Digital Signage', 'Other'
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captchaToken = recaptchaRef.current?.getValue();
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setSubmitting(true);
    try {
      const res = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, captchaToken }),
      });
      if (res.ok) navigate('/success');
    } catch (err) {
      console.error('Form error:', err);
    } finally {
      setSubmitting(false);
      recaptchaRef.current?.reset();
    }
  };

  const labelClass = "block text-[#00a2fe] text-[15px] font-medium mb-1";
  const inputClass = "w-full bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none py-2 text-[16px] text-gray-700 placeholder-gray-400 transition-colors";

  return (
    <div className="font-['Lato',sans-serif] overflow-x-hidden">

      {/* Hero with floating form */}
      <section className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/gozoomContactBg.webp")' }}>
        <div className="absolute inset-0 bg-[#1a2e44]/70"></div>
        <div className="relative z-10 container mx-auto px-4 max-w-6xl min-h-screen flex items-center">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-8 pt-[92px] pb-12">

            {/* Left heading */}
            <div className="w-full lg:w-[45%]">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-6 uppercase tracking-wider" data-aos="fade-down">Get in Touch</span>
              <h1 className="text-white text-[3rem] md:text-[3.8rem] lg:text-7xl font-bold leading-tight mb-6" data-aos="fade-right" data-aos-delay="100">
                Kickstart Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Digital</span> Journey
              </h1>
              <p className="text-slate-300 text-[18px] leading-relaxed max-w-lg" data-aos="fade-right" data-aos-delay="300">
                Get all your questions answered by our business development team. We are ready to bring your ideas to life.
              </p>
            </div>

            {/* Right form card */}
            <div className="w-full lg:w-[48%] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-2 md:p-4" data-aos="fade-left" data-aos-delay="300">
              <div className="px-6 md:px-10 py-8">
                <h2 className="text-center text-slate-800 font-bold text-2xl md:text-3xl mb-8 tracking-wide">REACH US TODAY</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                  <div>
                    <label className={labelClass}>Your Name<span className="text-red-500 ml-0.5">*</span></label>
                    <input type="text" required maxLength={50} placeholder="Name"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className={inputClass} />
                  </div>

                  <div>
                    <label className={labelClass}>Email<span className="text-red-500 ml-0.5">*</span></label>
                    <input type="email" required placeholder="E-mail"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className={inputClass} />
                  </div>

                  {/* Phone with react-phone-input-2 (real flags + IP auto-detect) */}
                  <div>
                    <label className={labelClass}>Phone<span className="text-red-500 ml-0.5">*</span></label>
                    <PhoneInput
                      country={detectedCountry}
                      enableSearch
                      autoFormat
                      value={form.phone}
                      onChange={phone => setForm({ ...form, phone })}
                      inputStyle={{
                        width: '100%',
                        border: 'none',
                        borderBottom: '1px solid #d1d5db',
                        borderRadius: 0,
                        fontSize: '16px',
                        paddingLeft: '52px',
                        background: 'transparent',
                        color: '#374151',
                      }}
                      buttonStyle={{
                        border: 'none',
                        borderBottom: '1px solid #d1d5db',
                        borderRadius: 0,
                        background: 'transparent',
                      }}
                      dropdownStyle={{ zIndex: 9999 }}
                      placeholder="Contact No."
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Interested Service</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none py-2 text-[16px] text-gray-500 transition-colors appearance-none">
                      <option value="">Interested In</option>
                      {services.map(s => <option key={s} value={s} className="text-gray-700">{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Message</label>
                    <textarea placeholder="Message" value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none py-2 text-[16px] text-gray-700 placeholder-gray-400 transition-colors resize-none" />
                  </div>

                  {/* reCAPTCHA */}
                  <div>
                    <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} />
                    {captchaError && (
                      <p className="text-red-500 text-sm mt-1">Please complete the reCAPTCHA.</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={submitting}
                      className="w-full bg-gradient-to-r from-[#0e90d0] to-[#007bac] hover:shadow-lg hover:shadow-blue-500/30 text-white font-bold py-4 rounded-xl transition-all transform hover:-translate-y-1 text-lg">
                      {submitting ? 'Submitting...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* We're Here to Help */}
      <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-50 rounded-full blur-[80px] -ml-32 -mb-32"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-4">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800">We're Here to Help</h2>
            <p className="text-[18px] mt-4 text-gray-600 max-w-2xl mx-auto">We listen to your requirements, accurately analyze them, and suggest the best possible approach for your development journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Share Your Requirement', desc: 'We keenly analyze your requirements from the beginning for a seamless development process.', color: '#f4bd00', icon: '📝' },
              { title: 'Non Disclosure Agreement', desc: 'Your business ideas are always safe with us. We assure you complete confidentiality with our strict NDAs.', color: '#0884c4', icon: '🔒' },
              { title: 'Expert Consultation', desc: 'Once we have your requirement, we will allocate our expert team for consultation to choose the right tech stack.', color: '#269d39', icon: '💡' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col" data-aos="fade-up" data-aos-delay={i * 150}>
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">{item.title}</h3>
                <div className="w-12 h-1 rounded-full mb-4" style={{ backgroundColor: item.color }}></div>
                <p className="text-[16px] leading-relaxed text-gray-600 flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
