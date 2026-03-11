import React from 'react';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const DiversitySpendCapture = () => {
    return (
        <WorkforceServiceLayout
            heroSubtitle="Empowering Inclusion Through"
            heroTitle="Diversity Spend Capture"
            heroDesc="At GoZoom, we are committed to helping organizations meet their diversity and inclusion goals through our Diversity Spend Capture solutions. As a certified minority-owned business, we offer a single invoicing option that consolidates all workforce management expenses, simplifying the process of converting spend into recognized diverse spend."
            reasonsTitle="Reasons to Choose GoZoom for Diversity Spend Capture"
            reasons={[
                { title: 'Comprehensive Data Analytics', desc: 'Leverage our advanced data analytics to gain a clear understanding of your diversity spend. Our tools help you identify opportunities, track performance, and make data-driven decisions to maximize the impact of your supplier diversity programs.' },
                { title: 'Tailored Solutions for Your Needs', desc: 'We understand that every organization is unique. Our customized Diversity Spend Capture solutions align with your business goals, ensuring you achieve measurable results without disrupting existing processes.' },
                { title: 'Industry Expertise', desc: 'With years of experience in workforce solutions and supplier diversity, GoZoom is your trusted partner. Our team combines deep industry knowledge with innovative practices to help you stay ahead of evolving diversity standards.' },
                { title: 'End-to-End Support', desc: 'From identifying diverse suppliers to reporting progress, we provide holistic support at every stage. Our experts work closely with your team to streamline operations and ensure a seamless diversity spend management process.' },
                { title: 'Compliance and Reporting', desc: 'Stay compliant with government regulations and meet corporate diversity benchmarks with ease. Our robust reporting tools and audit-ready documentation ensure transparency and accountability in every dollar spent.' },
                { title: 'Commitment to Driving Impact', desc: 'At GoZoom, we believe in creating meaningful change. Partnering with us means aligning with a company committed to empowering diverse communities and fostering inclusive growth for a better future.' }
            ]}
            caseStudyTitle="Leveraging Diversity Spend Capture for Inclusive Growth"
            caseStudyDesc="A global manufacturing company aimed to enhance its supplier diversity program to align with its corporate social responsibility (CSR) goals and meet increasing regulatory requirements. The organization sought a solution to track and manage its diversity spend effectively while fostering stronger relationships with diverse suppliers."
        />
    );
};

export default DiversitySpendCapture;
