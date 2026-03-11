import React from 'react';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const DirectSourcing = () => {
    return (
        <WorkforceServiceLayout
            heroSubtitle="Elevate Your Hiring Strategy With"
            heroTitle="Direct Sourcing"
            heroDesc="Revolutionize the way you recruit top talent with GoZoom's cutting-edge Direct Sourcing services. Our innovative approach harnesses the power of our global network and industry-leading expertise to connect you directly with the best candidates, eliminating unnecessary intermediaries and delays in the recruitment process."
            reasonsTitle="Reasons to Choose GoZoom for Direct Sourcing"
            reasons={[
                { title: 'Global Reach', desc: 'Our extensive global network allows us to source top talent from around the world, providing you with a diverse pool of candidates to choose from.' },
                { title: 'Industry Expertise', desc: 'With years of experience in various industries, our team understands the specific skills and qualifications needed for success in your sector.' },
                { title: 'Cost-Effective Solutions', desc: 'By directly sourcing candidates, we help you save on recruitment costs typically incurred through traditional hiring methods.' },
                { title: 'Efficiency and Speed', desc: 'Our direct sourcing approach expedites the recruitment process, ensuring that you get access to the best talent quickly and efficiently.' },
                { title: 'Customized Service', desc: 'We tailor our direct sourcing services to meet your unique hiring requirements, providing personalized solutions that align with your business goals.' },
                { title: 'Quality Assurance', desc: 'Through rigorous screening and vetting processes, we guarantee that the candidates presented to you meet the highest standards of excellence, saving you time and resources in the long run.' }
            ]}
            caseStudyTitle="Direct Sourcing Transformation for a Tech Company"
            caseStudyDesc="Client, a leading global company in the technology sector, was seeking to enhance its hiring strategy to meet the increasing demand for specialized talent in a competitive market. With traditional recruitment methods yielding slow and inconsistent results, Client turned to GoZoom for a direct sourcing transformation."
        />
    );
};

export default DirectSourcing;
