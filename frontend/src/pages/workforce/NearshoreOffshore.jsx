import React from 'react';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const NearshoreOffshore = () => {
    return (
        <WorkforceServiceLayout
            heroSubtitle="Staff Agency With"
            heroTitle="Nearshore and Offshore"
            heroDesc="GoZoom delivers flexible Nearshore and Offshore services to help businesses achieve efficiency and cost savings. Our global delivery centers provide access to top talent, ensuring seamless collaboration and accelerated project timelines. From IT services to business process outsourcing, we enable you to scale operations, drive innovation, and focus on growth while we handle the rest."
            reasonsTitle="Reasons to Choose GoZoom for Nearshore and Offshore"
            reasons={[
                { title: 'Cost savings', desc: 'GoZoom\'s Nearshore and Offshore staffing allows you to access top talent at a lower cost, as wages and benefits may be lower in neighboring countries.' },
                { title: 'Proximity', desc: 'Nearshore and Offshore staffing allows you to maintain proximity to its operations, which can be beneficial for communication and coordination.' },
                { title: 'Cultural compatibility', desc: 'Hiring employees from neighboring countries can help you to better understand and navigate local markets and cultures.' },
                { title: 'Time zone compatibility', desc: 'Our Nearshore and Offshore staffing can allow for easier communication and collaboration due to similar time zones.' },
                { title: 'Talent pool', desc: 'Nearshore and Offshore staffing solutions can provide access to a wider pool of qualified candidates with a variety of skills and expertise.' },
                { title: 'Risk management', desc: 'GoZoom\'s Nearshore and Offshore staffing can help you mitigate the risk of hiring the wrong person by providing guarantees or replacements if necessary.' }
            ]}
            caseStudyTitle="Implemented Nearshore and Offshore services"
            caseStudyDesc="Nearshore and Offshore staffing services can be used for a variety of positions, at all levels and in all industries. They can be particularly useful for companies that are looking to expand into foreign markets but want to minimize the risks and challenges associated with doing so. Contingent staffing can provide access to qualified candidates with a variety of skills and expertise, while still allowing a company to maintain proximity and cultural compatibility."
        />
    );
};

export default NearshoreOffshore;
