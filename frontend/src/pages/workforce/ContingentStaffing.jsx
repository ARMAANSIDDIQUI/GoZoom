import React from 'react';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const ContingentStaffing = () => {
    return (
        <WorkforceServiceLayout
            heroSubtitle="Reduce fixed costs with"
            heroTitle="Contingent Staffing"
            heroDesc="GoZoom is a leading provider of contingent staffing solutions, offering businesses the opportunity to build and manage their own on-demand workforce. With our expertise in effective contingent workforce management, we help organizations seamlessly integrate employees and contingent workers, providing a comprehensive solution for their staffing needs. Our contingent staff consists of highly skilled professionals who are equipped to meet the dynamic demands of today's business landscape. We understand the importance of offering contingent workers employee benefits to ensure their satisfaction and productivity."
            reasonsTitle="Advantage of Choosing GoZoom"
            reasons={[
                { title: 'Flexibility', desc: 'Our Contingent staffing service will allow your company to bring on temporary or project-based employees as needed, rather than committing to hiring full-time employees.' },
                { title: 'Cost-effectiveness', desc: 'Contingent staffing service can be more cost-effectiveness than hiring full-time employees, as it allows your company to bring on staff only when they are needed, rather than paying for full-time salaries and benefits.' },
                { title: 'Time-saving', desc: 'Using GoZoom to find and onboard contingent employees can save your company time and resources, as we handle all of the recruitment and onboarding processes.' },
                { title: 'Access to specialized skills', desc: 'GoZoom can provide access to a wide pool of qualified candidates with a variety of skills and expertise, allowing a company to find the perfect fit for their specific needs.' },
                { title: 'Risk management', desc: 'Contingent staffing will allow your company to test out a new employee or project before committing to a full-time hire, which can help mitigate the risk of hiring the wrong person.' },
                { title: 'Compliance', desc: 'GoZoom can ensure that all necessary legal and compliance requirements are met, including taxes, insurance, and employment laws. This can help a company avoid any potential legal issues or fines.' }
            ]}
            caseStudyTitle="Implemented contingent staffing strategy"
            caseStudyDesc="Contingent staffing refers to the practice of hiring temporary or contract workers to meet a company's immediate workforce needs. In this case study, we will explore how our client implemented a contingent staffing strategy to address its fluctuating staffing needs."
        />
    );
};

export default ContingentStaffing;
