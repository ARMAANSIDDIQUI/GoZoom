import React from 'react';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const StatementOfWork = () => {
    return (
        <WorkforceServiceLayout
            heroSubtitle="Drive More Value With"
            heroTitle="Statement of Work (SOW)"
            heroDesc="We offer top-notch Statement of Work services to help you streamline your projects and ensure they are completed on time and within budget. Whether you need help defining scope, outlining deliverables, or managing resources, we've got you covered."
            reasonsTitle="Reasons to Choose GoZoom for SOW Services"
            reasons={[
                { title: 'Access to talent', desc: 'You may not have the necessary skills or expertise in-house to complete a particular project or task, choose us as your vendor or contractor. We have the required skills and experience.' },
                { title: 'Flexibility', desc: 'A company may only need certain services on a temporary or project-by-project basis, in which case using a vendor or contractor can be more flexible than hiring full-time employees.' },
                { title: 'Cost-effectiveness', desc: 'It may be more cost-effective for a company to use a vendor or contractor for certain services, rather than hiring full-time employees or training existing staff to acquire the necessary skills.' },
                { title: 'Scalability', desc: 'A company may need to ramp up or scale back their operations on a project-by-project basis, in which case using a vendor or contractor can provide the necessary flexibility.' },
                { title: 'Quality', desc: 'A company may choose to use a vendor or contractor with a proven track record of delivering high-quality work.' },
                { title: 'Time-saving', desc: 'Using a vendor or contractor can save a company time and resources by allowing them to focus on their core competencies, rather than having to manage all aspects of a project in-house.' }
            ]}
            caseStudyTitle="Streamlining Staffing Services with a Statement of Work"
            caseStudyDesc="SOW services are typically used when a company needs to hire a vendor or contractor to perform specific tasks or projects, rather than hiring full-time employees. SOW services can be used to access specialized skills or expertise on an as-needed basis, or to provide flexibility and scalability for a company's operations."
        />
    );
};

export default StatementOfWork;
