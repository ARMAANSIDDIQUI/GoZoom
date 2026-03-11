import React from 'react';
import WorkforceServiceLayout from '../../components/WorkforceServiceLayout';

const GccBot = () => {
    return (
        <WorkforceServiceLayout
            heroSubtitle="Count on us for"
            heroTitle="GCC BOT (Build-Operate-Transfer)"
            heroDesc="Driven by agility and a focus on innovation, GoZoom’s GCC BOT operates as a strategic extension of your business, delivering scalable solutions across talent management, analytics, business support, and digital operations. Our Build-Operate-Transfer (BOT) model enables organizations to establish and scale dedicated teams with reduced risk, managing operations end-to-end until they’re ready for a seamless transition."
            reasonsTitle="Reasons to Choose GoZoom for GCC (BOT)"
            reasons={[
                { title: 'Access to Global Talent', desc: 'GCCs built through the Build-Operate-Transfer (BOT) model provide access to skilled talent across multiple domains. This approach helps organizations scale quickly, foster innovation, and eventually take full ownership of a well-established, high-performing operation.' },
                { title: 'Cost Efficiency', desc: 'The Build-Operate-Transfer (BOT) model helps ensure consistency, control, and high service standards. By establishing GCCs in cost-effective, talent-rich locations, it enables businesses to lower labor and operational costs without compromising on quality.' },
                { title: 'Enhanced Control & Compliance', desc: 'With the Build-Operate-Transfer (BOT) model, full ownership is eventually transferred to the parent company, offering stronger protection of intellectual property, better alignment with internal policies, and greater operational transparency.' },
                { title: 'Operational Agility', desc: 'Enabled by the Build-Operate-Transfer (BOT) model, GCCs offer flexible and scalable operations that drive growth and transformation. This structure allows companies to adapt quickly to shifting market conditions and business needs.' },
                { title: 'Innovation & Digital Transformation', desc: 'Through the Build-Operate-Transfer (BOT) model, GCCs operate as innovation hubs-adopting emerging technologies, accelerating research and development, and driving digital transformation across the organization.' },
                { title: 'Seamless Collaboration', desc: 'The Build-Operate-Transfer (BOT) approach enhances productivity and alignment by integrating processes and resources that strengthen collaboration between onshore and offshore teams.' }
            ]}
            caseStudyTitle="Custom-Built for Long-Term Growth"
            caseStudyDesc="A tech-driven enterprise needed to scale operations, access top talent, and reduce costs. GoZoom introduced its GCC Build-Operate-Transfer (BOT) model — a structured, efficient approach to establishing a fully functional offshore center. GoZoom supports the client through each phase: building and operating the center, then seamlessly transferring ownership once it's operational and scalable. This ensures a smooth transition to a self-sustaining, growth-ready operation."
        />
    );
};

export default GccBot;
