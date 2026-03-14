import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { usePhoneCountry } from '../hooks/usePhonePrefix';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaEdit, FaLock, FaLightbulb } from 'react-icons/fa';

const RECAPTCHA_SITE_KEY = '6Lf9TsQnAAAAANxF0lHRxZTC_YMZIMmV1qX1v1qs';

const Contact = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const recaptchaRef = useRef(null);
  const detectedCountry = usePhoneCountry(); // auto-detect from IP
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', service: '' });
  const [submitting, setSubmitting] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const services = [
    { key: 'retail', value: 'Retail Solutions' },
    { key: 'integration', value: 'Integration Services' },
    { key: 'web', value: 'Web Development' },
    { key: 'mobile', value: 'Mobile App Development' },
    { key: 'seo', value: 'SEO & Digital Marketing' },
    { key: 'kiosks', value: 'Kiosks & Digital Signage' },
    { key: 'other', value: 'Other' }
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

  const labelClass = "block text-slate-700 text-sm font-semibold mb-2 ml-2";
  const inputClass = "w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-2xl px-6 py-4 text-[16px] text-slate-800 placeholder-slate-400 transition-all duration-300 outline-none shadow-sm";

  return (
    <div className="font-['Outfit',sans-serif] overflow-x-hidden bg-slate-50 text-slate-900">

      {/* Hero with floating form */}
      <section className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gozoomContactBg.webp"
            alt="Contact Background"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-blue-900/40"></div>
          {/* Decorative Blur Orbs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

            {/* Left Content */}
            <div className="w-full lg:w-[45%] text-left">
              <div
                className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 font-bold text-xs mb-8 uppercase tracking-[0.2em]"
                data-aos="fade-down"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                {t('contact_page.hero.get_in_touch')}
              </div>

              <h1
                className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                {t('contact_page.hero.title1')}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
                  {t('contact_page.hero.title2')}
                </span>
              </h1>

              <p
                className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                {t('contact_page.hero.desc')}
              </p>

              <div className="flex flex-wrap gap-6 justify-center mb-12">
                <div className="flex items-center gap-4 text-blue-200/80" data-aos="fade-up" data-aos-delay="500">
                  <div className="w-14 h-14 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center text-xl group hover:scale-110 transition-transform duration-300">
                    <FaEdit className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">{t('contact_page.hero.fast_response_label')}</p>
                    <p className="text-sm font-semibold">{t('contact_page.hero.fast_response_val')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-blue-200/80" data-aos="fade-up" data-aos-delay="700">
                  <div className="w-14 h-14 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center text-xl group hover:scale-110 transition-transform duration-300">
                    <FaLock className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">{t('contact_page.hero.confidential_label')}</p>
                    <p className="text-sm font-semibold">{t('contact_page.hero.confidential_val')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div
              className="w-full lg:w-[50%] lg:max-w-[620px]"
              data-aos="zoom-in-left"
              data-aos-delay="400"
            >
              <div className="glass-premium p-2 sm:p-3 bg-white/95 backdrop-blur-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] !rounded-[2.5rem]">
                <div className="px-8 md:px-14 py-16 md:py-20">
                  <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">{t('contact_page.form.title')}</h2>
                    <p className="text-slate-500 text-xs sm:text-sm">{t('contact_page.form.desc')}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className={labelClass}>{t('contact_page.form.full_name')}<span className="text-blue-500/80 ml-1">*</span></label>
                        <input
                          type="text" required maxLength={50} placeholder={t('contact_page.form.full_name_placeholder')}
                          value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                          className={inputClass}
                        />
                      </div>

                      <div className="space-y-1">
                        <label className={labelClass}>{t('contact_page.form.work_email')}<span className="text-blue-500/80 ml-1">*</span></label>
                        <input
                          type="email" required placeholder={t('contact_page.form.work_email_placeholder')}
                          value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                      <div className="space-y-1">
                        <label className={labelClass}>{t('contact_page.form.phone_number')}<span className="text-blue-500/80 ml-1">*</span></label>
                        <div className="phone-input-premium">
                          <PhoneInput
                            country={detectedCountry}
                            enableSearch
                            autoFormat
                            value={form.phone}
                            onChange={phone => setForm({ ...form, phone })}
                            inputClass="!w-full !h-full !bg-slate-50 !border !border-slate-200 !rounded-2xl !pl-16 !py-5 !text-slate-800 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                            containerClass="!w-full !h-[58px]"
                            buttonClass="!bg-transparent !border-none !rounded-l-2xl !px-4"
                            dropdownClass="!bg-white !rounded-2xl !shadow-2xl !border-slate-100"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className={labelClass}>{t('contact_page.form.interested_service')}</label>
                        <div className="relative">
                          <select
                            value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                            className={`${inputClass} appearance-none cursor-pointer`}
                          >
                            <option value="">{t('contact_page.form.select_service')}</option>
                            {services.map(s => <option key={s.key} value={s.value}>{t(`contact_page.form.services.${s.key}`)}</option>)}
                          </select>
                          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className={labelClass}>{t('contact_page.form.project_desc')}</label>
                      <textarea
                        placeholder={t('contact_page.form.project_desc_placeholder')}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        rows={3}
                        className={`${inputClass} resize-none min-h-[120px]`}
                      />
                    </div>

                    {/* reCAPTCHA with better spacing */}
                    <div className="flex justify-center py-2">
                      <div className="transform scale-[0.85] sm:scale-100 origin-center">
                        <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} />
                        {captchaError && (
                          <p className="text-red-500 text-xs text-center mt-2 font-medium">{t('contact_page.form.captcha_error')}</p>
                        )}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] disabled:opacity-70 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-2"
                      >
                        {submitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            {t('contact_page.form.submitting')}
                          </>
                        ) : (
                          <>
                            {t('contact_page.form.send_message')}
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* We're Here to Help - Upgraded Section */}
      <section className="py-16 lg:py-28 bg-white relative overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 font-bold text-xs mb-6 uppercase tracking-widest border border-blue-100">
              {t('contact_page.process.subtitle')}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{t('contact_page.process.title')}</h2>
            <p className="text-lg mt-6 text-slate-500 max-w-2xl mx-auto leading-relaxed">
              {t('contact_page.process.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12">
            {[
              {
                title: t('contact_page.process.steps.step1.title'),
                desc: t('contact_page.process.steps.step1.desc'),
                color: 'from-amber-400 to-orange-500',
                icon: <FaEdit />,
                step: '01'
              },
              {
                title: t('contact_page.process.steps.step2.title'),
                desc: t('contact_page.process.steps.step2.desc'),
                color: 'from-blue-500 to-indigo-600',
                icon: <FaLock />,
                step: '02'
              },
              {
                title: t('contact_page.process.steps.step3.title'),
                desc: t('contact_page.process.steps.step3.desc'),
                color: 'from-emerald-400 to-teal-600',
                icon: <FaLightbulb />,
                step: '03'
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-slate-50/50 rounded-[2.5rem] p-10 transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-transparent hover:border-slate-100 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                {/* Step Number Background */}
                <div className="absolute -top-4 -right-4 text-9xl font-black text-slate-900/5 transition-colors group-hover:text-slate-900/[0.08] select-none">
                  {item.step}
                </div>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center text-2xl shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-5 text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-[17px] leading-relaxed text-slate-500">{item.desc}</p>

                {/* Bottom Accent Decor */}
                <div className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${item.color} transition-all duration-500 w-0 group-hover:w-full`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;