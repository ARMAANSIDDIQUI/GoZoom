import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const Retail = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* EXACT MIGRATED CONTENT BEGIN */}
            <div className="w-full bg-white font-['Lato',sans-serif] text-[15px] overflow-x-hidden">

                {/* Hero Section */}
                <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("/images/retail.webp")' }}>
                    <div className="relative z-10 text-left px-4 max-w-4xl mx-auto w-full">
                        <h2 className="text-[2.5rem] md:text-[3.1rem] font-bold text-white mb-4 leading-tight font-['Lato',sans-serif]">
                            Beyond Retail
                        </h2>
                        <p className="text-[18px] font-normal text-white tracking-[2px] leading-[1.5] mt-2 max-w-[500px]">
                            We aim to revolutionize and enhance the retail experience like never before through innovation and transformation.
                        </p>
                    </div>
                </section>

                {/* Retail Solutions Section */}
                <section className="bg-white py-[40px] px-[10px]">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="pb-[30px]">
                            <h2 className="text-[30px] font-semibold text-[#00a2fe] mb-[5px] pb-[5px] tracking-[2px] leading-none text-center font-['Lato',sans-serif]">RETAIL SOLUTIONS</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2%] justify-items-center">

                            {/* Card 1 */}
                            <div className="relative w-[350px] h-[500px] mb-[20px] group overflow-hidden">
                                <img src="images/11.webp" alt="img" className="block w-[350px] h-[500px] object-cover" />
                                <div className="flex justify-center bg-black py-[10px]">
                                    <h2 className="text-white text-[1rem] tracking-[4px] m-0 font-['Lato',sans-serif]">RETAIL EXCECUTION</h2>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-0 bg-[#024e80] opacity-0 group-hover:opacity-100 group-hover:w-[90%] transition-all duration-500 ease-in-out z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] text-white text-[1rem] leading-[1.4rem]">
                                        <h2 className="text-[20px] font-bold mb-[10px] font-['Lato',sans-serif]">RETAIL EXCECUTION</h2>
                                        <p className="text-[18px] text-justify font-['Lato',sans-serif]">GOZOOM's connected retail solutions empower global companies to enhance retail execution, boost sales, and increase profitability through innovative and industry-leading products and solutions.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="relative w-[350px] h-[500px] mb-[20px] group overflow-hidden">
                                <img src="images/brandProtection.jpg" alt="img" className="block w-[350px] h-[500px] object-cover" />
                                <div className="flex justify-center bg-black py-[10px]">
                                    <h2 className="text-white text-[1rem] tracking-[4px] m-0 font-['Lato',sans-serif]">SECURITY</h2>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-0 bg-[#024e80] opacity-0 group-hover:opacity-100 group-hover:w-[90%] transition-all duration-500 ease-in-out z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] text-white text-[1rem] leading-[1.4rem]">
                                        <h2 className="text-[20px] font-bold mb-[10px] font-['Lato',sans-serif]">SECURITY</h2>
                                        <p className="text-[18px] text-justify font-['Lato',sans-serif]">GOZOOM offers customized solutions to protect brands comprehensively, safeguard investments and reputation, prevent counterfeits, and increase profits through track and trace capabilities. Our ecosystem of solutions uses the latest technology to provide real-time data, enhancing your business operations.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="relative w-[350px] h-[500px] mb-[20px] group overflow-hidden">
                                <img src="images/enhance.webp" alt="img" className="block w-[350px] h-[500px] object-cover" />
                                <div className="flex justify-center bg-black py-[10px]">
                                    <h2 className="text-white text-[1rem] tracking-[4px] m-0 font-['Lato',sans-serif]">CUSTOMER EXPERIENCE</h2>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-0 bg-[#024e80] opacity-0 group-hover:opacity-100 group-hover:w-[90%] transition-all duration-500 ease-in-out z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] text-white text-[1rem] leading-[1.4rem]">
                                        <h2 className="text-[20px] font-bold mb-[10px] font-['Lato',sans-serif]">CUSTOMER EXPERIENCE</h2>
                                        <p className="text-[18px] text-justify font-['Lato',sans-serif]">At GOZOOM, we prioritize enhancing the customer experience as it is crucial for companies to distinguish themselves in the marketplace and connect with their audience. We offer a range of solutions that cater to different shopping experiences such as pop-up stores, web or app shopping, QR or voice-based commerce, etc. Our goal is to make sure your brand stands out and provides an exceptional customer experience.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Products & Services Section */}
                <section className="bg-white py-[40px] px-[10px]">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="pb-[30px]">
                            <h2 className="text-[30px] font-semibold text-[#00a2fe] mb-[5px] pb-[5px] tracking-[2px] leading-none text-center font-['Lato',sans-serif]">PRODUCTS &amp; SERVICES</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2%] justify-items-center mb-[20px]">

                            {/* Card 1 */}
                            <div className="relative w-[350px] h-[350px] mb-[20px] group overflow-hidden">
                                <img src="images/6.png" alt="img" className="block w-[350px] h-[350px] object-cover" />
                                <div className="flex justify-center bg-black py-[10px]">
                                    <h2 className="text-white text-[1rem] tracking-[4px] m-0 font-['Lato',sans-serif]">CHECKOUT</h2>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-0 bg-[#024e80] opacity-0 group-hover:opacity-100 group-hover:w-[90%] transition-all duration-500 ease-in-out z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] text-white text-[1rem] leading-[1.1rem]">
                                        <h2 className="text-[1.3rem] font-bold mb-[10px] font-['Lato',sans-serif]">CHECKOUT</h2>
                                        <p className="text-[1rem] text-justify font-['Lato',sans-serif] leading-tight">GOZOOM's point of sale (PoS) system goes beyond just a cash register. We transform your raw sales data into meaningful insights that can be used for accounting and management purposes. Our integrated PoS system also supports payments, making it easier for you to access all your sales information in one place.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="relative w-[350px] h-[350px] mb-[20px] group overflow-hidden">
                                <img src="images/digitalpay.webp" alt="img" className="block w-[350px] h-[350px] object-cover" />
                                <div className="flex justify-center bg-black py-[10px]">
                                    <h2 className="text-white text-[1rem] tracking-[4px] m-0 font-['Lato',sans-serif]">ELECTRONIC PAYMENTS</h2>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-0 bg-[#024e80] opacity-0 group-hover:opacity-100 group-hover:w-[90%] transition-all duration-500 ease-in-out z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] text-white text-[1rem] leading-[1.1rem]">
                                        <h2 className="text-[1.3rem] font-bold mb-[10px] font-['Lato',sans-serif]">ELECTRONIC PAYMENTS</h2>
                                        <p className="text-[1rem] text-justify font-['Lato',sans-serif] leading-tight">GOZOOM's integrated digital payment solutions offer greater accuracy, time-saving benefits, and eliminate manual transactions. By having all transactions in one place, reporting and reconciliation become more streamlined. With our digital payment solutions, relationship management, accounting, and payment processing are integrated into a cohesive process.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="relative w-[350px] h-[350px] mb-[20px] group overflow-hidden">
                                <img src="images/selforder.webp" alt="img" className="block w-[350px] h-[350px] object-cover" />
                                <div className="flex justify-center bg-black py-[10px]">
                                    <h2 className="text-white text-[1rem] tracking-[4px] m-0 font-['Lato',sans-serif]">INTERACTIVE ORDERING</h2>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-0 bg-[#024e80] opacity-0 group-hover:opacity-100 group-hover:w-[90%] transition-all duration-500 ease-in-out z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] text-white text-[1rem] leading-[1.1rem]">
                                        <h2 className="text-[1.3rem] font-bold mb-[10px] font-['Lato',sans-serif]">INTERACTIVE ORDERING</h2>
                                        <p className="text-[1rem] text-justify font-['Lato',sans-serif] leading-tight">GOZOOM's Self-Ordering Kiosks offer customers a user-friendly menu and flexible payment options, allowing them to easily place their orders. By using our kiosks, employees can concentrate on increasing sales, improving profitability, and enhancing overall operations.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="relative w-[350px] h-[350px] mb-[20px] group overflow-hidden">
                                <img src="images/livereport.webp" alt="img" className="block w-[350px] h-[350px] object-cover" />
                                <div className="flex justify-center bg-black py-[10px]">
                                    <h2 className="text-white text-[1rem] tracking-[4px] m-0 font-['Lato',sans-serif]">REAL TIME REPORTING</h2>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-0 bg-[#024e80] opacity-0 group-hover:opacity-100 group-hover:w-[90%] transition-all duration-500 ease-in-out z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] text-white text-[1rem] leading-[1.1rem]">
                                        <h2 className="text-[1.3rem] font-bold mb-[10px] font-['Lato',sans-serif]">REAL TIME REPORTING</h2>
                                        <p className="text-[1rem] text-justify font-['Lato',sans-serif] leading-tight">GOZOOM's LIV Reporting app provides real-time data access to our customers from anywhere in the world, empowering them to make informed decisions based on analytics. With the ability to be proactive, businesses can improve their overall organizational efficiency.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 5 */}
                            <div className="relative w-[350px] h-[350px] mb-[20px] group overflow-hidden">
                                <img src="images/rfid.jpg" alt="img" className="block w-[350px] h-[350px] object-cover" />
                                <div className="flex justify-center bg-black py-[10px]">
                                    <h2 className="text-white text-[1rem] tracking-[4px] m-0 font-['Lato',sans-serif]">SMART RFID SOLUTIONS</h2>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-0 bg-[#024e80] opacity-0 group-hover:opacity-100 group-hover:w-[90%] transition-all duration-500 ease-in-out z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] text-white text-[1rem] leading-[1.1rem]">
                                        <h2 className="text-[1.3rem] font-bold mb-[10px] font-['Lato',sans-serif]">SMART RFID SOLUTIONS</h2>
                                        <p className="text-[1rem] text-justify font-['Lato',sans-serif] leading-tight">Smart RFID enables swift and hassle-free shopping experience. It not only provides hands free operations for your warehouse activities but avoids thefts and counterfeits. Our next-gen RFID products aim to solve multiple problems cycle from 'Purchase Order to Point-of-Sale'.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 6 */}
                            <div className="relative w-[350px] h-[350px] mb-[20px] group overflow-hidden">
                                <img src="images/webmobilebg.webp" alt="img" className="block w-[350px] h-[350px] object-cover" />
                                <div className="flex justify-center bg-black py-[10px]">
                                    <h2 className="text-white text-[1rem] tracking-[4px] m-0 font-['Lato',sans-serif]">WEB-MOBILE DEVELOPEMENT</h2>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-0 bg-[#024e80] opacity-0 group-hover:opacity-100 group-hover:w-[90%] transition-all duration-500 ease-in-out z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] text-white text-[1rem] leading-[1.1rem]">
                                        <h2 className="text-[1.3rem] font-bold mb-[10px] font-['Lato',sans-serif]">WEB &amp; MOBILE DEVELOPEMENT</h2>
                                        <p className="text-[1rem] text-justify font-['Lato',sans-serif] leading-tight">Our design team is committed to giving your customer the best user experience so that they are compelled to return to your websites and mobile apps.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Industry Solutions Section */}
                <section className="bg-white py-[40px] px-[10px]">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="w-[80%] mx-auto mb-[15px]">
                            <h2 className="text-[30px] font-semibold text-[#00a2fe] tracking-[2px] text-center w-full font-['Lato',sans-serif]">INDUSTRY SOLUTIONS</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2%] justify-items-center w-full">

                            {/* Card 1 */}
                            <div className="relative w-[250px] h-[400px] mb-[20px] group overflow-hidden wow animate__animated animate__fadeInLeft">
                                <img src="images/FB.png" alt="img" className="block w-[250px] h-[400px] object-cover" />
                                <div className="flex justify-center bg-black py-[10px]">
                                    <h2 className="text-white text-[1rem] tracking-[4px] m-0 font-['Lato',sans-serif]">FOOD &amp; BEVERAGES</h2>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-0 bg-[#024e80] opacity-0 group-hover:opacity-100 group-hover:w-[90%] transition-all duration-500 ease-in-out z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-white text-[15px] leading-[1.4rem]">
                                        <ul className="list-none text-left m-0 pt-[10px] pl-[15px] w-full text-white">
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ POS</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ KDS</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ CLOUD KITCHEN</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ SELF ODERING KIOSK</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ CONTACTLESS ODERING</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ LIVE REPORTING</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ INTEGRATED PAYMENTS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="relative w-[250px] h-[400px] mb-[20px] group overflow-hidden">
                                <img src="images/12.webp" alt="img" className="block w-[250px] h-[400px] object-cover" />
                                <div className="flex justify-center bg-black py-[10px]">
                                    <h2 className="text-white text-[1rem] tracking-[4px] m-0 font-['Lato',sans-serif]">MERCHANDISING</h2>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-0 bg-[#024e80] opacity-0 group-hover:opacity-100 group-hover:w-[90%] transition-all duration-500 ease-in-out z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-white text-[15px] leading-[1.4rem]">
                                        <ul className="list-none text-left m-0 pt-[10px] pl-[15px] w-full text-white">
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ POS</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ RFID</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ ENDLESS AISLE</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ SELF CHECKOUT</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ LIVE REPORTING</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ INTEGRATED PAYMENTS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="relative w-[250px] h-[400px] mb-[20px] group overflow-hidden wow animate__animated animate__fadeInRight">
                                <img src="images/cinema.webp" alt="img" className="block w-[250px] h-[400px] object-cover" />
                                <div className="flex justify-center bg-black py-[10px]">
                                    <h2 className="text-white text-[1rem] tracking-[4px] m-0 font-['Lato',sans-serif]">ENTERTAINMENT</h2>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-0 bg-[#024e80] opacity-0 group-hover:opacity-100 group-hover:w-[90%] transition-all duration-500 ease-in-out z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-white text-[15px] leading-[1.4rem]">
                                        <ul className="list-none text-left m-0 pt-[10px] pl-[15px] w-full text-white">
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ POS</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ SELF ODERING KIOSK</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ VOICE ODERING</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ LIVE REPORTING</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ INTEGRATED PAYMENTS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="relative w-[250px] h-[400px] mb-[20px] group overflow-hidden wow animate__animated animate__fadeInRight">
                                <img src="images/hospital.png" alt="img" className="block w-[250px] h-[400px] object-cover" />
                                <div className="flex justify-center bg-black py-[10px]">
                                    <h2 className="text-white text-[1rem] tracking-[4px] m-0 font-['Lato',sans-serif]">HEALTHCARE</h2>
                                </div>
                                <div className="absolute top-0 left-0 h-full w-0 bg-[#024e80] opacity-0 group-hover:opacity-100 group-hover:w-[90%] transition-all duration-500 ease-in-out z-10">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-white text-[15px] leading-[1.4rem]">
                                        <ul className="list-none text-left m-0 pt-[10px] pl-[15px] w-full text-white">
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ POS</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ HEALTHCARE KIOSK <br /> &nbsp;&nbsp;&nbsp; SOLUTION </li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ INFORMATION KIOSK</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ LIVE REPORTING</li>
                                            <li className="text-[12px] w-full font-['Lato',sans-serif] mb-2">+ INTEGRATED PAYMENTS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="bg-white mt-[5rem] overflow-hidden">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <h1 className="text-[#00a2fe] text-center py-[20px] text-[60px] font-bold font-['Lato',sans-serif] m-0">Testimonials</h1>
                    </div>

                    <div className="max-w-[1120px] w-full py-[40px] px-0 mx-auto">
                        <div className="mx-[10px] md:mx-[40px] overflow-visible pb-[50px] flex overflow-x-auto snap-x space-x-6 scrollbar-hide">

                            {/* Testimonial Card 1 */}
                            <div className="rounded-[25px] bg-white min-w-[300px] snap-center shrink-0 border border-gray-100 shadow-md">
                                <div className="flex flex-col items-center p-[10px_14px]">
                                    <div className="relative flex flex-col items-center p-[25px_0] gap-[5px] w-full">
                                        <span className="absolute left-0 top-0 h-full w-full rounded-[25px_25px_0_25px]"></span>
                                        <div className="relative h-[200px] w-[200px] rounded-full bg-white p-[3px]">
                                            <img src="images/shadani.png" alt="" className="h-full w-full object-contain rounded-full border-[4px] border-[#00a2fe]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center p-[10px_14px]">
                                    <p className="text-[14px] text-[#707070] text-center font-['Lato',sans-serif] leading-relaxed">
                                        Working with Gozoom Technologies IT Solutions has been a game-changer for our business. Their team of experts seamlessly integrated our systems and provided us with a comprehensive solution that has boosted our productivity and efficiency. We are now able to focus on our core business functions with the confidence that our IT systems are being taken care of by the best in the industry
                                    </p>
                                </div>
                            </div>

                            {/* Testimonial Card 2 */}
                            <div className="rounded-[25px] bg-white min-w-[300px] snap-center shrink-0 border border-gray-100 shadow-md">
                                <div className="flex flex-col items-center p-[10px_14px]">
                                    <div className="relative flex flex-col items-center p-[25px_0] gap-[5px] w-full">
                                        <span className="absolute left-0 top-0 h-full w-full rounded-[25px_25px_0_25px]"></span>
                                        <div className="relative h-[200px] w-[200px] rounded-full bg-white p-[3px]">
                                            <img src="images/rajdhani.png" alt="" className="h-full w-full object-contain rounded-full border-[4px] border-[#00a2fe]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center p-[10px_14px]">
                                    <p className="text-[14px] text-[#707070] text-center font-['Lato',sans-serif] leading-relaxed">
                                        I was blown away by the professionalism and expertise of the team at Gozoom Technologies. They took the time to understand our unique business requirements and offered customized solutions that exceeded our expectations. Their ongoing support and maintenance services have been exceptional, and we couldn't have asked for a better partner to help us navigate the ever-evolving world of technology
                                    </p>
                                </div>
                            </div>

                            {/* Testimonial Card 3 */}
                            <div className="rounded-[25px] bg-white min-w-[300px] snap-center shrink-0 border border-gray-100 shadow-md">
                                <div className="flex flex-col items-center p-[10px_14px]">
                                    <div className="relative flex flex-col items-center p-[25px_0] gap-[5px] w-full">
                                        <span className="absolute left-0 top-0 h-full w-full rounded-[25px_25px_0_25px]"></span>
                                        <div className="relative h-[200px] w-[200px] rounded-full bg-white p-[3px]">
                                            <img src="images/maisoninfra.png" alt="" className="h-full w-full object-contain rounded-full border-[4px] border-[#00a2fe]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center p-[10px_14px]">
                                    <p className="text-[14px] text-[#707070] text-center font-['Lato',sans-serif] leading-relaxed">
                                        The team at GoZoom IT Solutions is truly top-notch. They provided us with a comprehensive suite of services that has transformed the way we do business. From digital transformation to cybersecurity, their team of experts seamlessly integrated our systems and provided us with the peace of mind that our data is secure and our IT infrastructure is optimized for success.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <section className="bg-white mt-[3rem] py-[40px]">
                    <div className="mb-[20px]">
                        <h2 className="text-[#00a2fe] text-center py-[20px] text-[50px] font-semibold tracking-[4px] font-['Lato',sans-serif]">PARTNERS</h2>
                    </div>

                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center items-center">
                            <div className="flex justify-center items-center p-[1rem]">
                                <img className="h-[150px] w-[150px] object-contain flex items-center shrink-0" src="images/shadani.png" alt="" />
                            </div>
                            <div className="flex justify-center items-center p-[1rem]">
                                <img className="h-[150px] w-[150px] object-contain flex items-center shrink-0" src="images/rajdhani.png" alt="" />
                            </div>
                            <div className="flex justify-center items-center p-[1rem]">
                                <img className="h-[150px] w-[150px] object-contain flex items-center shrink-0" src="images/maisoninfra.png" alt="" />
                            </div>
                            <div className="flex justify-center items-center p-[1rem]">
                                <img className="h-[150px] w-[150px] object-contain flex items-center shrink-0" src="images/cornitos.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>            {/* EXACT MIGRATED CONTENT END */}
        </div>
    );
};

export default Retail;
