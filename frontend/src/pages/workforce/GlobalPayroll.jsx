import React from 'react';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const GlobalPayroll = () => {
    return (
        <WorkforceServiceLayout
            heroSubtitle="Drive More Value With"
            heroTitle="Global Payroll and Compliance"
            heroDesc="Trust us for EOR/AOR services with seamless single-country invoicing, compliance management, and diversity spend capture. Our tailored solutions simplify payroll complexities, support your inclusion goals, and allow you to focus on business growth."
            reasonsTitle="Benefits of Choosing GoZoom for Payroll"
            reasons={[
                { title: 'Cost-effectiveness', desc: 'Payroll processing services can be more cost-effective than handling payroll in-house, as it allows a company to outsource the task to an expert team.' },
                { title: 'Time-saving', desc: 'Payroll processing services can save a company time and resources by taking on the burden of payroll, allowing the company to focus on its core competencies.' },
                { title: 'Accuracy', desc: 'Payroll processing services can help a company ensure that payroll is calculated and processed accurately, avoiding any potential errors or fines.' },
                { title: 'Compliance', desc: 'Payroll processing services can help a company ensure that all necessary legal and compliance requirements are met, including taxes, insurance, and employment laws.' },
                { title: 'Employee benefits', desc: 'Payroll processing services can provide access to employee benefits, such as health insurance and retirement plans, which can help a company attract and retain top talent.' },
                { title: 'Scalability', desc: 'Payroll processing services allow a company to scale up or down its payroll efforts as needed, providing flexibility for changing business needs.' }
            ]}
            caseStudyTitle="Implemented payroll processing services"
            caseStudyDesc="Payroll processing services can be particularly useful for companies that are struggling to keep up with the demands of payroll, or that are spending a lot of time and resources on payroll. Using a payroll processing service can save a company time and resources, and can also provide access to expertise in payroll and compliance."
        />
    );
};

export default GlobalPayroll;
