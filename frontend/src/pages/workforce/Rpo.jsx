import React from 'react';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const Rpo = () => {
    return (
        <WorkforceServiceLayout
            heroSubtitle="Specialize in"
            heroTitle="Recruitment Process Outsourcing (RPO)"
            heroDesc="Streamline your recruitment process and focus on what you do best with our Recruitment Process Outsourcing (RPO) services. Our team of experts will handle every aspect of your hiring needs, from sourcing and screening candidates to onboarding new hires. With RPO, you'll have access to a larger pool of qualified candidates and save time and resources by outsourcing the recruitment process."
            reasonsTitle="Reasons to Choose GoZoom for RPO"
            reasons={[
                { title: 'Cost-effectiveness', desc: 'GoZoom\'s RPO can be more cost-effective than handling the recruitment process in-house, as it allows your company to outsource the entire process or specific tasks to an expert team.' },
                { title: 'Time-saving', desc: 'Our RPO solution can save a company time and resources by taking on the burden of recruitment, allowing the company to focus on its core competencies.' },
                { title: 'Access to expertise', desc: 'GoZoom has expertise in recruitment and selection, and clients use our resources and knowledge to find the best fit for the company\'s needs.' },
                { title: 'Quality of hire', desc: 'We help our clients improve the quality of their hires by thoroughly screening and evaluating the best candidates.' },
                { title: 'Scalability', desc: 'Our RPO allows you to scale up or down your recruitment efforts as needed, providing flexibility for changing business needs.' },
                { title: 'Risk management', desc: 'Our RPO solutions help clients mitigate the risk of hiring the wrong person by providing guarantees or replacements if necessary.' }
            ]}
            caseStudyTitle="Implemented Recruitment Process Outsource (RPO) strategy"
            caseStudyDesc="RPO services can be particularly useful for companies that are struggling to find qualified candidates, or that are spending a lot of time and resources on the recruitment process. Using an RPO provider can save a company time and resources, and can also provide access to expertise in recruitment and selection."
        />
    );
};

export default Rpo;
