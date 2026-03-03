import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaCheckCircle } from 'react-icons/fa';

const Integration = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return (
    <div>
      {/* EXACT MIGRATED CONTENT BEGIN */}
      <div className="w-full bg-black font-['Lato',sans-serif] text-[15px] overflow-x-hidden">

        {/* Hero Section */}
        <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/20.png")' }}>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h2 className="text-[3.1rem] md:text-[50px] font-normal text-white mb-6 tracking-[2px]">
              INTEGRATION
            </h2>
            <p className="text-[18px] font-normal text-white tracking-[2px]">
              Fueled by extensive knowledge, thorough research, and broad industry experience.
            </p>
          </div>
        </section>

        {/* Integration Expertise Section */}
        <section className="bg-[#f9f9f9] py-[40px] px-[10px]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="pb-[30px]">
              <h2 className="text-[30px] font-semibold text-[#00a2fe] mb-[5px] pb-[5px] tracking-[2px] leading-none text-left font-['Lato',sans-serif]">GZ Integration Expertise</h2>
              <p className="text-[18px] font-light text-[#aaa] text-left mx-auto font-['Lato',sans-serif]">
                Our proficiency in integration is evidenced by our experience of over 1800 cross-consulting hours, during which we have worked with all major integration tools, whether on-premises or in the cloud.
              </p>
              <p className="text-[18px] font-light text-[#aaa] text-left mx-auto font-['Lato',sans-serif] mt-4">
                We excel in seamlessly integrating all major ERP and business systems, encompassing SAP, Salesforce, ServiceNow, Oracle ERP, SuccessFactors, Workday, Coupa, and Concur, among others.
              </p>
              <p className="text-[18px] font-light text-[#aaa] text-left mx-auto font-['Lato',sans-serif] mt-4">
                With our tried and tested delivery model, we ensure successful integration and assist in the creation of a scalable IT landscape that is future-ready.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 mx-0">
              <div className="flex flex-col">
                <div className="bg-[#f9f9f9] p-[64px] h-[140px] mb-[25px] flex justify-center items-center overflow-hidden">
                  <div className="relative h-[140px] overflow-hidden transition-transform duration-500 ease-in-out hover:scale-125 flex items-center">
                    <img className="max-w-max h-auto flex shrink-0" src="images/msazure.png" alt="Azure" />
                  </div>
                </div>
                <div className="bg-[#f9f9f9] p-[64px] h-[140px] mb-[25px] flex justify-center items-center overflow-hidden">
                  <div className="relative h-[140px] overflow-hidden transition-transform duration-500 ease-in-out hover:scale-125 flex items-center">
                    <img className="max-w-max h-auto flex shrink-0" src="images/boomi.png" alt="Boomi" />
                  </div>
                </div>
                <div className="bg-[#f9f9f9] p-[64px] h-[140px] mb-[25px] flex justify-center items-center overflow-hidden">
                  <div className="relative h-[140px] overflow-hidden transition-transform duration-500 ease-in-out hover:scale-125 flex items-center">
                    <img className="max-w-max h-auto flex shrink-0" src="images/tibco.png" alt="Tibco" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="bg-[#f9f9f9] p-[64px] h-[140px] mb-[25px] flex justify-center items-center overflow-hidden">
                  <div className="relative h-[140px] overflow-hidden transition-transform duration-500 ease-in-out hover:scale-125 flex items-center">
                    <img className="max-w-max h-auto flex shrink-0" src="images/mulesoft.png" alt="Mulesoft" />
                  </div>
                </div>
                <div className="bg-[#f9f9f9] p-[64px] h-[140px] mb-[25px] flex justify-center items-center overflow-hidden">
                  <div className="relative h-[140px] overflow-hidden transition-transform duration-500 ease-in-out hover:scale-125 flex items-center">
                    <img className="max-w-max h-auto flex shrink-0" src="images/pega.png" alt="Pega" />
                  </div>
                </div>
                <div className="bg-[#f9f9f9] p-[64px] h-[140px] mb-[25px] flex justify-center items-center overflow-hidden">
                  <div className="relative h-[140px] overflow-hidden transition-transform duration-500 ease-in-out hover:scale-125 flex items-center">
                    <img className="max-w-max h-auto flex shrink-0" src="images/IBM.png" alt="IBM" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="bg-[#f9f9f9] p-[64px] h-[140px] mb-[25px] flex justify-center items-center overflow-hidden">
                  <div className="relative h-[140px] overflow-hidden transition-transform duration-500 ease-in-out hover:scale-125 flex items-center">
                    <img className="max-w-max h-auto flex shrink-0" src="images/sap.png" alt="SAP" />
                  </div>
                </div>
                <div className="bg-[#f9f9f9] p-[64px] h-[140px] mb-[25px] flex justify-center items-center overflow-hidden">
                  <div className="relative h-[140px] overflow-hidden transition-transform duration-500 ease-in-out hover:scale-125 flex items-center">
                    <img className="max-w-max h-auto flex shrink-0" src="images/Dynamics.png" alt="Dynamics" />
                  </div>
                </div>
                <div className="bg-[#f9f9f9] p-[64px] h-[140px] mb-[25px] flex justify-center items-center overflow-hidden">
                  <div className="relative h-[140px] overflow-hidden transition-transform duration-500 ease-in-out hover:scale-125 flex items-center">
                    <img className="max-w-max h-auto flex shrink-0" src="images/workato.png" alt="Workato" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-[#0a0f25] text-left overflow-hidden py-[40px] px-[10px]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="wow animate__animated animate__fadeInLeft">
                <div>
                  <p className="block text-[#00a2fe] text-[32px] uppercase tracking-[4px] font-['Lato',sans-serif] font-normal mb-0"><b> What sets us apart?</b></p>
                  <p className="block my-[1em] text-[#ccc] text-[18px] font-['Lato',sans-serif]">
                    As organizations go through transformational phases, such as expansion through organic growth or mergers and acquisitions, they often require new systems to be added to their IT landscape.
                  </p>
                  <p className="block my-[1em] text-[#ccc] text-[18px] font-['Lato',sans-serif]">
                    Our commitment lies in aiding organizations in guaranteeing business continuity, harnessing the full potential of data, seamless system integration, and leveraging technology for transformation.
                  </p>
                  <p className="block my-[1em] text-[#ccc] text-[18px] font-['Lato',sans-serif]">Join us in a partnership for success!!</p>

                  <div className="pt-3 mb-5 wow animate__animated animate__slideInDown">
                    <a href="/contact" className="text-[#007bff] bg-transparent border border-[#00A2FE] p-[10px] text-[21px] rounded-[10px] no-underline">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>

              <div className="wow animate__animated animate__fadeInRight">
                <div>
                  <div>
                    <p className="text-[#00a2fe] text-[26px] font-['Lato',sans-serif] mt-0 mb-[1rem]">Harness your Current IT Landscape</p>
                    <p className="text-[#ccc] text-[18px] font-['Lato',sans-serif] mt-0 mb-[1rem]">
                      At GOZOOM, we offer solutions that capitalize on your current IT landscape investments. Our services facilitate the transformation of your application landscape to one that is both scalable and agile, empowering developers to efficiently create new applications and integrate with existing solutions.
                    </p>
                    <p className="text-[#ccc] text-[18px] font-['Lato',sans-serif] mt-0 mb-[1rem]">
                      We conduct a comprehensive architectural review and provide enhancements to ensure that your systems remain ahead of the curve.
                    </p>
                  </div>
                  <div>
                    <div>
                      <p className="text-[#00a2fe] text-[26px] font-['Lato',sans-serif] mt-0 mb-[1rem]">Experience Powerful Integrations</p>
                      <p className="text-[#ccc] text-[18px] font-['Lato',sans-serif] mt-0 mb-[1rem]">
                        At GOZOOM, system integration is a comprehensive process, whether it involves a small number of interfaces or a large-scale integration project.
                      </p>
                      <p className="text-[#ccc] text-[18px] font-['Lato',sans-serif] mt-0 mb-[1rem]">
                        We ensure that your system has extensive connection points, allowing for flexibility and the capability to efficiently perform integrations at the speed of your business requirements.
                      </p>
                    </div>
                    <div>
                      <div>
                        <p className="text-[#00a2fe] text-[26px] font-['Lato',sans-serif] mt-0 mb-[1rem]">Attain Your Desired Business Results</p>
                        <p className="text-[#ccc] text-[18px] font-['Lato',sans-serif] mt-0 mb-[1rem]">
                          It is imperative to comprehend your objectives, processes and strategies. However, at GOZOOM, we go further by examining:
                        </p>
                        <ul className="text-[#ccc] text-[18px] font-['Lato',sans-serif] leading-[24px] tracking-[0px] list-none pl-0 mt-0 mb-[1rem]">
                          <li className="mb-2 flex items-start gap-2"><FaCheckCircle className="text-[#16a9e2] mt-1 shrink-0" />Your existing obstacles.</li>
                          <li className="mb-2 flex items-start gap-2"><FaCheckCircle className="text-[#16a9e2] mt-1 shrink-0" />Your previous attempts, successes and failures.</li>
                          <li className="mb-2 flex items-start gap-2"><FaCheckCircle className="text-[#16a9e2] mt-1 shrink-0" />Your overarching aspirations and the reasoning behind them.</li>
                        </ul>
                        <p className="text-[#ccc] text-[18px] font-['Lato',sans-serif] mt-0 mb-[1rem]">We strive to deliver optimal outcomes for your enterprise.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operate Section */}
        <section className="bg-[url('/images/integration-steps.webp')] bg-center bg-no-repeat bg-cover h-auto md:h-[116vh] w-full relative py-[110px] md:py-0 pt-[25px] md:pt-0 flex items-center">
          <div className="container mx-auto px-4 py-[40px] flex justify-end">
            <div className="w-full lg:text-left text-right">
              <h2 className="text-[#00a2fe] text-[32px] tracking-[2px] font-['Gill_Sans',sans-serif] md:text-right font-semibold">HOW WE OPERATE</h2>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="bg-white m-0 py-10">
          <div className="mb-10">
            <h2 className="text-[#00a2fe] text-center py-[20px] text-[50px] font-semibold tracking-[4px]">PARTNERS</h2>
          </div>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-wrap flex-row w-full justify-center">
              <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex justify-center">
                <div className="m-auto p-auto flex justify-center">
                  <img className="h-[150px] w-[150px] p-[1rem] object-contain items-center" src="images/shadani.png" alt="Shadani" />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex justify-center">
                <div className="m-auto p-auto flex justify-center">
                  <img className="h-[150px] w-[150px] p-[1rem] object-contain items-center" src="images/rajdhani.png" alt="Rajdhani" />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex justify-center">
                <div className="m-auto p-auto flex justify-center">
                  <img className="h-[150px] w-[150px] p-[1rem] object-contain items-center" src="images/maisoninfra.png" alt="Maison" />
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex justify-center">
                <div className="m-auto p-auto flex justify-center">
                  <img className="h-[150px] w-[150px] p-[1rem] object-contain items-center" src="images/cornitos.png" alt="Cornitos" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Integration;
