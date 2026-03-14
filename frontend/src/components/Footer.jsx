import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { usePhoneCountry } from '../hooks/usePhonePrefix';

const RECAPTCHA_SITE_KEY = '6Lf9TsQnAAAAANxF0lHRxZTC_YMZIMmV1qX1v1qs';

const Footer = () => {
    const recaptchaRef = useRef(null);
    const detectedCountry = usePhoneCountry(); // auto-detect from IP
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        interestedIn: '',
        message: ''
    });
    const [captchaError, setCaptchaError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const captchaToken = recaptchaRef.current?.getValue();
        if (!captchaToken) { setCaptchaError(true); return; }
        setCaptchaError(false);
        try {
            await axios.post('http://localhost:5001/api/enquiries/submit', { ...formData, captchaToken });
            alert('Enquiry submitted successfully!');
            setFormData({ name: '', email: '', contactNumber: '', interestedIn: '', message: '' });
            recaptchaRef.current?.reset();
        } catch (error) {
            console.error('Error submitting enquiry:', error);
            alert('Failed to submit enquiry. Please try again.');
        }
    };

    return (
        <footer className="bg-gray-900 text-white pt-8 pb-8 border-t border-white/5">
            <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Global Locations */}
                    <div>
                        <h2 className="text-xl font-bold mb-6 text-yellow-500 uppercase">Global Locations</h2>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <img className="w-8 h-8 mr-4 object-contain" src="/images/usflag.webp" alt="US" />
                                <address className="not-italic text-sm leading-relaxed">
                                    <strong>United States</strong><br />
                                    400 River Side CT<br />
                                    Santa Clara<br />
                                    CA 95054-3535
                                </address>
                            </li>
                            <li className="flex items-start">
                                <img className="w-8 h-8 mr-4 object-contain" src="/images/indiaflag.png" alt="India" />
                                <address className="not-italic text-sm leading-relaxed">
                                    <strong>India</strong><br />
                                    A1B/19 A, Paschim Vihar<br />
                                    New Delhi 110063<br />
                                    <a href="mailto:info@gozoomtech.com" className="hover:text-yellow-500">info@gozoomtech.com</a>
                                </address>
                            </li>
                            <li className="flex items-start">
                                <img className="w-8 h-8 mr-4 object-contain" src="/images/canadaflag.png" alt="Canada" />
                                <address className="not-italic text-sm leading-relaxed">
                                    <strong>Canada</strong><br />
                                    5765 Chem. de la Côte St Luc<br />
                                    Montréal, QC H3X 2E9
                                </address>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-bold mb-6 text-yellow-500 uppercase">Quick Links</h2>
                        <ul className="space-y-3 font-semibold text-sm">
                            <li><Link to="/" className="hover:text-yellow-500 transition-colors">HOME</Link></li>
                            <li><Link to="/integration" className="hover:text-yellow-500 transition-colors">INTEGRATION</Link></li>
                            <li><Link to="/retail" className="hover:text-yellow-500 transition-colors">RETAIL</Link></li>
                            <li><Link to="/services" className="hover:text-yellow-500 transition-colors">IT SOLUTIONS</Link></li>
                            <li><Link to="/workforce-solutions" className="hover:text-yellow-500 transition-colors">WORKFORCE SOLUTIONS</Link></li>
                            <li><Link to="/blogs" className="hover:text-yellow-500 transition-colors">BLOGS</Link></li>
                            <li><Link to="/about" className="hover:text-yellow-500 transition-colors">ABOUT US</Link></li>
                            <li><Link to="/contact" className="hover:text-yellow-500 transition-colors">CONTACT US</Link></li>
                        </ul>
                    </div>

                    {/* Reach Us Today Form */}
                    <div>
                        <h2 className="text-xl font-bold mb-6 text-yellow-500 uppercase">Reach Us Today</h2>
                        <div className="bg-white text-gray-800 p-6 rounded shadow-lg">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-1">Your Name<span className="text-red-500">*</span></label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border-b border-gray-300 focus:border-blue-500 outline-none pb-1" placeholder="Name" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1">Email<span className="text-red-500">*</span></label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-b border-gray-300 focus:border-blue-500 outline-none pb-1" placeholder="E-mail" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1">Phone<span className="text-red-500">*</span></label>
                                    <PhoneInput
                                        country={detectedCountry}
                                        enableSearch
                                        value={formData.contactNumber}
                                        onChange={phone => setFormData(prev => ({ ...prev, contactNumber: phone }))}
                                        inputStyle={{
                                            width: '100%',
                                            border: 'none',
                                            borderBottom: '1px solid #d1d5db',
                                            borderRadius: 0,
                                            fontSize: '14px',
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
                                        inputProps={{ required: true, name: 'contactNumber' }}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1">Interested Service</label>
                                    <select name="interestedIn" value={formData.interestedIn} onChange={handleChange} className="w-full border-b border-gray-300 focus:border-blue-500 outline-none pb-1 bg-transparent">
                                        <option value="" disabled>Select Service</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Mobile Development">Mobile Development</option>
                                        <option value="Integration">Integration</option>
                                        <option value="Retail">Retail</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1">Message</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 rounded p-2 focus:border-blue-500 outline-none h-24" placeholder="Message"></textarea>
                                </div>
                                <div>
                                    <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} size="compact" />
                                    {captchaError && <p className="text-red-500 text-xs mt-1">Please complete the reCAPTCHA.</p>}
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition-colors">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <div className="text-center mt-12 pt-6 border-t border-gray-700 text-sm">
                © COPYRIGHT <span className="font-bold text-yellow-500">GoZoom</span>. All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
