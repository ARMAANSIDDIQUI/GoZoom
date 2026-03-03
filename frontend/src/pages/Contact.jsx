import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { usePhoneCountry } from '../hooks/usePhonePrefix';

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
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-8 py-24">

            {/* Left heading */}
            <div className="w-full lg:w-[45%]">
              <h1 className="text-white text-[3rem] md:text-[3.8rem] font-bold leading-tight mb-6">
                Kickstart Your Digital<br />Journey Today
              </h1>
              <p className="text-white text-[17px] leading-[1.6]">
                Get all your questions answered by<br className="hidden md:block" /> our business development team.
              </p>
            </div>

            {/* Right form card */}
            <div className="w-full lg:w-[48%] bg-white rounded-xl shadow-2xl">
              <div className="px-10 py-8">
                <h2 className="text-center text-black font-bold text-[1.4rem] mb-6 tracking-wide">REACH US TODAY</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

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

                  <div className="pt-1">
                    <button type="submit" disabled={submitting}
                      className="w-full bg-[#0e90d0] hover:bg-[#007bac] text-white font-semibold py-3 rounded-md transition-colors text-[17px]">
                      {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* We're Here to Help */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">We're Here to Help</h2>
            <p className="text-[18px] mt-2 text-gray-600">We listen to your requirements analyze and suggest the best approach possible for your development.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-between mt-10">
            {[
              { title: 'Share Your Requirement', desc: 'We keenly analyze your requirements from the beginning for a seamless development process.', color: '#f4bd00' },
              { title: 'Non Disclosure Agreement (NDA)', desc: 'Your business ideas are always safe with us. We assure you complete confidentiality with NDA.', color: '#0884c4' },
              { title: 'Understanding Your Requirement', desc: 'Once we have your requirement, we will allocate our expert team for consultation to choose the right approach.', color: '#269d39' },
            ].map((item, i) => (
              <div key={i} className="flex-1">
                <h3 className="text-[22px] font-normal mb-4 pb-5 border-b" style={{ borderColor: item.color }}>{item.title}</h3>
                <p className="text-[17px] leading-[28px] text-gray-500 mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
