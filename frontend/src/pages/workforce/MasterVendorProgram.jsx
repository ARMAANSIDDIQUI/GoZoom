import React from 'react';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const MasterVendorProgram = () => {
    return (
        <WorkforceServiceLayout
            heroSubtitle="Reduce fixed costs with"
            heroTitle="Master Vendor Program (MVP)"
            heroDesc="Choosing GoZoom as your primary staffing partner gives you access to a comprehensive solution designed to optimize your workforce. Our MVP program offers high-level administrative, supervisory, and systems support—eliminating the complexity of managing multiple vendors. With one dedicated GoZoom team, you can oversee staffing needs, address challenges quickly, refine your supplier strategy, and identify opportunities for cost savings—all through a single, streamlined partnership."
            reasonsTitle="Benefits of Our MVP"
            reasons={[
                { title: 'Centralized Accountability', desc: 'Experience centralized accountability with a single point of contact for all your vendor management and staffing needs.' },
                { title: 'Expert Guidance', desc: 'Expert guidance backed by decades of staffing experience to ensure top-tier talent acquisition strategies.' },
                { title: 'Clear Performance Benchmarks', desc: 'Clear performance benchmarks through KPIs and metrics to measure vendor performance consistently.' },
                { title: 'Real-Time Market Insights', desc: 'Real-time market insights through daily analysis and research into current staffing trends.' },
                { title: 'Global Talent Network', desc: 'Access to GoZoom’s extensive national and global talent network, enabling you to secure the best fit for your team.' },
                { title: 'Seamless Supplier Integration', desc: 'Seamless supplier integration and enhanced operational transparency across all your engagements.' }
            ]}
            caseStudyTitle="A Global Logistics Company Tackles Staffing Challenges"
            caseStudyDesc="A global logistics company relying on over ten staffing vendors faced challenges with fragmented operations. This led to inefficiencies, heavy administrative workload, and limited visibility in the workforce. To address these issues, they partnered with GoZoom under the Master Vendor Program (MVP), streamlining their staffing process and reducing costs through a more centralized, efficient approach."
        />
    );
};

export default MasterVendorProgram;
