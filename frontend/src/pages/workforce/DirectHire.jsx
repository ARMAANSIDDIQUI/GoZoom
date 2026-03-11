import React from 'react';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const DirectHire = () => {
    return (
        <WorkforceServiceLayout
            heroSubtitle="Count on us for"
            heroTitle="Direct Hire"
            heroDesc="We take the hassle out of hiring by carefully screening and handpicking the best candidates for your company. Our experts specialize in matching top candidates with the perfect job fit. Say goodbye to the time-consuming and costly process of finding the right employee and hello to an efficient and seamless hiring experience."
            reasonsTitle="Reasons to Choose GoZoom for Direct Hire"
            reasons={[
                { title: 'Wider pool of talent', desc: 'GoZoom can help your company access a wider pool of candidates, including both active and passive job seekers, increasing the chances of finding the right fit for the role.' },
                { title: 'Recruitment Expert', desc: 'We have expertise in identifying and selecting top candidates, and can use our resources and knowledge to find the best fit for the company\'s needs.' },
                { title: 'Time and cost savings', desc: 'With GoZoom direct hire staffing, you can save time and resources, as we handle the entire recruitment process, including screening candidates, and co-ordinating interviews.' },
                { title: 'Flexibility', desc: 'GoZoom can provide a range of direct hire staffing options, including temporary-to-permanent and permanent placements, allowing your company to choose the best fit for their needs.' },
                { title: 'Onboarding support', desc: 'GoZoom can provide support with onboarding and integrating new hires into the company, helping to ensure a smooth transition.' },
                { title: 'Risk management', desc: 'GoZoom can help a company mitigate the risk of hiring the wrong person by thoroughly screening and evaluating candidates, and providing guarantees or replacements if necessary.' }
            ]}
            caseStudyTitle="Implemented Direct Hire staffing strategy"
            caseStudyDesc="Direct hire staffing services can be particularly useful for companies that are struggling to find qualified candidates through traditional recruitment methods, or that have high-level positions that are difficult to fill. Using a staffing agency to find and recruit candidates can save a company time and resources, and can also provide access to a wider pool of qualified candidates."
        />
    );
};

export default DirectHire;
