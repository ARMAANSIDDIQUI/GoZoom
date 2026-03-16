const fs = require('fs');

const enPath = 'c:/Users/dell/Downloads/gozoom-main/frontend/src/locales/en/translation.json';
const frPath = 'c:/Users/dell/Downloads/gozoom-main/frontend/src/locales/fr/translation.json';

const workforcePagesEn = {
    "contingent_staffing": {
        "heroSubtitle": "Scale Your Team with",
        "heroTitle": "Contingent Staffing",
        "heroDesc": "GoZoom specializes in providing agile contingent staffing solutions designed to meet your project's demands. Whether you need short-term expertise or specialized talent to bridge a gap, we ensure you have the right people at the right time. Our flexible approach allows you to scale up or down without long-term commitments, driving efficiency and success.",
        "reasonsTitle": "Why Choose GoZoom for Contingent Staffing?",
        "reasons": [
            { "title": "Access to top talent", "desc": "Access a wider pool of qualified candidates with diverse skills and expertise that may not be available within your own organization." },
            { "title": "Cost-effectiveness", "desc": "Contingent staffing can be more cost-effective than hiring full-time employees, especially for temporary or project-based work." },
            { "title": "Flexibility", "desc": "Quickly scale your workforce up or down as needed, without the long-term commitment of hiring full-time employees." },
            { "title": "Reduced risk", "desc": "Mitigate the risk of hiring the wrong person by providing a trial period or a guaranteed replacement if needed." },
            { "title": "Increased efficiency", "desc": "Allow your company to focus on its core competencies while we handle the recruitment and management of contingent workers." },
            { "title": "Compliance", "desc": "Ensure that your contingent workers are compliant with all relevant laws and regulations." }
        ],
        "caseStudyTitle": "Implemented contingent staffing strategy",
        "caseStudyDesc": "Contingent staffing services can be used for a variety of positions, at all levels and in all industries. They can be particularly useful for companies that are going through a period of growth or that are working on a specific project that requires specialized skills. Contingent staffing can provide access to qualified candidates with a variety of skills and expertise, while still allowing a company to maintain flexibility and cost-effectiveness."
    },
    "direct_hire": {
        "heroSubtitle": "Build Your Legacy with",
        "heroTitle": "Direct Hire",
        "heroDesc": "When it's time to find the perfect permanent addition to your team, GoZoom's direct hire services deliver excellence. We don't just find candidates; we find future leaders and key contributors who align with your company culture and long-term vision. Let us handle the complexities of sourcing and screening so you can focus on building your business with top-tier, committed professionals.",
        "reasonsTitle": "Reasons to Choose GoZoom for Direct Hire",
        "reasons": [
            { "title": "Access to a larger talent pool", "desc": "GoZoom has access to a wide network of qualified candidates who may not be active on job boards or through other traditional recruitment methods." },
            { "title": "Improved quality of hire", "desc": "Our direct hire services involve a thorough screening and evaluation process, which can lead to higher quality hires and reduced turnover." },
            { "title": "Reduced time-to-hire", "desc": "By outsourcing the recruitment process to GoZoom, you can save time and resources and focus on other important business tasks." },
            { "title": "Objectivity", "desc": "Our team of recruiters can provide an objective perspective on candidates, which can help to reduce bias and ensure that the best candidate is hired." },
            { "title": "Confidentiality", "desc": "GoZoom can handle the recruitment process discreetly, which can be useful if you are looking to replace a current employee or if you want to keep the hiring process quiet." },
            { "title": "Cost-effectiveness", "desc": "Using GoZoom's direct hire services can be more cost-effective than using multiple recruitment agencies or advertising on job boards." }
        ],
        "caseStudyTitle": "Implemented direct hire strategy",
        "caseStudyDesc": "Direct hire services can be used for a variety of positions, at all levels and in all industries. They can be particularly useful for companies that are looking to fill specialized or high-level positions, or for companies that are looking to build a strong, long-term team. Our direct hire services can provide access to a larger pool of qualified candidates and can help to improve the quality of your hires and reduce turnover."
    },
    "direct_sourcing": {
        "heroSubtitle": "Streamline Your Talent with",
        "heroTitle": "Direct Sourcing",
        "heroDesc": "GoZoom's Direct Sourcing solutions leverage your brand's power to attract high-quality talent. We build and curate dedicated talent pools tailored to your specific needs, reducing reliance on third-party agencies and lowering costs. By combining your brand's reputation with our recruitment expertise, we deliver a seamless, efficient, and cost-effective way to find the right people.",
        "reasonsTitle": "Reasons to Choose GoZoom for Direct Sourcing",
        "reasons": [
            { "title": "Cost-effectiveness", "desc": "Direct sourcing can be more cost-effective than using traditional recruitment methods, as it allows you to build your own talent pool and reduce recruitment agency fees." },
            { "title": "Increased efficiency", "desc": "By building your own talent pool, you can reduce the time and resources spent on recruitment and focus on your core business." },
            { "title": "Access to a wider talent pool", "desc": "Direct sourcing allows you to access a wider pool of qualified candidates who may not be active on job boards or other traditional recruitment methods." },
            { "title": "Improved quality of hire", "desc": "By building your own talent pool, you can ensure that you are attracting candidates who are a good fit for your company culture and values." },
            { "title": "Better control", "desc": "Direct sourcing gives you more control over the recruitment process and allows you to tailor your search to meet your specific needs." },
            { "title": "Brand awareness", "desc": "Direct sourcing can help to increase brand awareness and attract top talent who are interested in working for your company." }
        ],
        "caseStudyTitle": "Implemented direct sourcing strategy",
        "caseStudyDesc": "Direct sourcing services can be particularly useful for companies that have a strong brand and are looking to build a high-quality talent pool. Using direct sourcing can save a company time and resources and can also help to improve the quality of their hires and increase brand awareness."
    },
    "diversity_spend_capture": {
        "heroSubtitle": "Drive Impact with",
        "heroTitle": "Diversity Spend Capture",
        "heroDesc": "GoZoom helps you achieve your diversity and inclusion goals through strategic spend capture. We identify and partner with diverse suppliers, ensuring your procurement processes support underrepresented businesses while driving innovation and value. Our comprehensive approach allows you to track, measure, and optimize your diversity spend, making a tangible impact on your business and the community.",
        "reasonsTitle": "Reasons to Choose GoZoom for Diversity Spend Capture",
        "reasons": [
            { "title": "Compliance", "desc": "GoZoom's diversity spend capture helps you ensure that your company is compliant with all necessary legal and compliance requirements, including taxes and employment laws." },
            { "title": "Diversity and inclusion", "desc": "Diversity spend capture can help your company to promote diversity and inclusion by supporting diverse vendors and contractors." },
            { "title": "Cost-effectiveness", "desc": "Diversity spend capture can be more cost-effective than handling the recruitment and management of diverse vendors in-house." },
            { "title": "Efficiency", "desc": "Diversity spend capture can save your company time and resources by taking on the burden of managing diverse vendors." },
            { "title": "Scalability", "desc": "Diversity spend capture allows your company to scale up or down its diversity efforts as needed, providing flexibility for changing business needs." },
            { "title": "Impact", "desc": "Diversity spend capture can have a positive impact on the community by supporting diverse businesses and promoting economic growth." }
        ],
        "caseStudyTitle": "Implemented diversity spend capture strategy",
        "caseStudyDesc": "Diversity spend capture services can be particularly useful for companies that are looking to promote diversity and inclusion and want to ensure that they are meeting all necessary legal and compliance requirements. Using a diversity spend capture service can save a company time and resources and can also have a positive impact on the community."
    },
    "gcc_bot": {
        "heroSubtitle": "The Future of Operations with",
        "heroTitle": "GCC BOT (Build-Operate-Transfer)",
        "heroDesc": "GoZoom's GCC BOT model provides a low-risk, scalable way to establish your own Global Capability Center. We build the infrastructure, recruit the talent, and operate the center to your specifications. Once the center is fully functional and optimized, we transfer ownership to you. This model allows you to leverage our local expertise and operational excellence while retaining long-term control over your global operations.",
        "reasonsTitle": "Reasons to Choose GoZoom for GCC BOT Services",
        "reasons": [
            { "title": "Lower risk", "desc": "By using GoZoom's GCC BOT services, you can mitigate the risk of setting up your own operations in a foreign country, as we handle the recruitment and management of workers." },
            { "title": "Faster time to market", "desc": "Our GCC BOT solutions can help you to set up your operations more quickly, as we have the necessary infrastructure and expertise in place." },
            { "title": "Access to talent", "desc": "GoZoom's GCC BOT services provide access to a wider pool of qualified candidates with a variety of skills and expertise." },
            { "title": "Cost-effectiveness", "desc": "GCC BOT services can be more cost-effective than setting up your own operations from scratch, as it allows you to leverage GoZoom's resources and expertise." },
            { "title": "Flexibility", "desc": "GCC BOT services provide flexibility for changing business needs, as you can scale up or down your operations as needed." },
            { "title": "Transfer of ownership", "desc": "Our GCC BOT solutions include a transfer of ownership, allowing you to eventually take full control of your operations." }
        ],
        "caseStudyTitle": "Implemented GCC BOT strategy",
        "caseStudyDesc": "GCC BOT services are typically used when a company needs to set up its own operations in a foreign country but wants to minimize the risks and challenges associated with doing so. GCC BOT services can be used to access specialized skills or expertise and can provide flexibility and scalability for a company's operations."
    },
    "global_payroll": {
        "heroSubtitle": "Drive More Value With",
        "heroTitle": "Global Payroll and Compliance",
        "heroDesc": "Trust us for EOR/AOR services with seamless single-country invoicing, compliance management, and diversity spend capture. Our tailored solutions simplify payroll complexities, support your inclusion goals, and allow you to focus on business growth.",
        "reasonsTitle": "Benefits of Choosing GoZoom for Payroll",
        "reasons": [
            { "title": "Cost-effectiveness", "desc": "Payroll processing services can be more cost-effective than handling payroll in-house, as it allows a company to outsource the task to an expert team." },
            { "title": "Time-saving", "desc": "Payroll processing services can save a company time and resources by taking on the burden of payroll, allowing the company to focus on its core competencies." },
            { "title": "Accuracy", "desc": "Payroll processing services can help a company ensure that payroll is calculated and processed accurately, avoiding any potential errors or fines." },
            { "title": "Compliance", "desc": "Payroll processing services can help a company ensure that all necessary legal and compliance requirements are met, including taxes, insurance, and employment laws." },
            { "title": "Employee benefits", "desc": "Payroll processing services can provide access to employee benefits, such as health insurance and retirement plans, which can help a company attract and retain top talent." },
            { "title": "Scalability", "desc": "Payroll processing services allow a company to scale up or down its payroll efforts as needed, providing flexibility for changing business needs." }
        ],
        "caseStudyTitle": "Implemented payroll processing services",
        "caseStudyDesc": "Payroll processing services can be particularly useful for companies that are struggling to keep up with the demands of payroll, or that are spending a lot of time and resources on payroll. Using a payroll processing service can save a company time and resources, and can also provide access to expertise in payroll and compliance."
    },
    "master_vendor_program": {
        "heroSubtitle": "Reduce fixed costs with",
        "heroTitle": "Master Vendor Program (MVP)",
        "heroDesc": "Choosing GoZoom as your primary staffing partner gives you access to a comprehensive solution designed to optimize your workforce. Our MVP program offers high-level administrative, supervisory, and systems support—eliminating the complexity of managing multiple vendors. With one dedicated GoZoom team, you can oversee staffing needs, address challenges quickly, refine your supplier strategy, and identify opportunities for cost savings—all through a single, streamlined partnership.",
        "reasonsTitle": "Benefits of Our MVP",
        "reasons": [
            { "title": "Centralized Accountability", "desc": "Experience centralized accountability with a single point of contact for all your vendor management and staffing needs." },
            { "title": "Expert Guidance", "desc": "Expert guidance backed by decades of staffing experience to ensure top-tier talent acquisition strategies." },
            { "title": "Clear Performance Benchmarks", "desc": "Clear performance benchmarks through KPIs and metrics to measure vendor performance consistently." },
            { "title": "Real-Time Market Insights", "desc": "Real-time market insights through daily analysis and research into current staffing trends." },
            { "title": "Global Talent Network", "desc": "Access to GoZoom’s extensive national and global talent network, enabling you to secure the best fit for your team." },
            { "title": "Seamless Supplier Integration", "desc": "Seamless supplier integration and enhanced operational transparency across all your engagements." }
        ],
        "caseStudyTitle": "A Global Logistics Company Tackles Staffing Challenges",
        "caseStudyDesc": "A global logistics company relying on over ten staffing vendors faced challenges with fragmented operations. This led to inefficiencies, heavy administrative workload, and limited visibility in the workforce. To address these issues, they partnered with GoZoom under the Master Vendor Program (MVP), streamlining their staffing process and reducing costs through a more centralized, efficient approach."
    },
    "nearshore_offshore": {
        "heroSubtitle": "Staff Agency With",
        "heroTitle": "Nearshore and Offshore",
        "heroDesc": "GoZoom delivers flexible Nearshore and Offshore services to help businesses achieve efficiency and cost savings. Our global delivery centers provide access to top talent, ensuring seamless collaboration and accelerated project timelines. From IT services to business process outsourcing, we enable you to scale operations, drive innovation, and focus on growth while we handle the rest.",
        "reasonsTitle": "Reasons to Choose GoZoom for Nearshore and Offshore",
        "reasons": [
            { "title": "Cost savings", "desc": "GoZoom's Nearshore and Offshore staffing allows you to access top talent at a lower cost, as wages and benefits may be lower in neighboring countries." },
            { "title": "Proximity", "desc": "Nearshore and Offshore staffing allows you to maintain proximity to its operations, which can be beneficial for communication and coordination." },
            { "title": "Cultural compatibility", "desc": "Hiring employees from neighboring countries can help you to better understand and navigate local markets and cultures." },
            { "title": "Time zone compatibility", "desc": "Our Nearshore and Offshore staffing can allow for easier communication and collaboration due to similar time zones." },
            { "title": "Talent pool", "desc": "Nearshore and Offshore staffing solutions can provide access to a wider pool of qualified candidates with a variety of skills and expertise." },
            { "title": "Risk management", "desc": "GoZoom's Nearshore and Offshore staffing can help you mitigate the risk of hiring the wrong person by providing guarantees or replacements if necessary." }
        ],
        "caseStudyTitle": "Implemented Nearshore and Offshore services",
        "caseStudyDesc": "Nearshore and Offshore staffing services can be used for a variety of positions, at all levels and in all industries. They can be particularly useful for companies that are looking to expand into foreign markets but want to minimize the risks and challenges associated with doing so. Contingent staffing can provide access to qualified candidates with a variety of skills and expertise, while still allowing a company to maintain proximity and cultural compatibility."
    },
    "rpo": {
        "heroSubtitle": "Specialize in",
        "heroTitle": "Recruitment Process Outsourcing (RPO)",
        "heroDesc": "Streamline your recruitment process and focus on what you do best with our Recruitment Process Outsourcing (RPO) services. Our team of experts will handle every aspect of your hiring needs, from sourcing and screening candidates to onboarding new hires. With RPO, you'll have access to a larger pool of qualified candidates and save time and resources by outsourcing the recruitment process.",
        "reasonsTitle": "Reasons to Choose GoZoom for RPO",
        "reasons": [
            { "title": "Cost-effectiveness", "desc": "GoZoom's RPO can be more cost-effective than handling the recruitment process in-house, as it allows your company to outsource the entire process or specific tasks to an expert team." },
            { "title": "Time-saving", "desc": "Our RPO solution can save a company time and resources by taking on the burden of recruitment, allowing the company to focus on its core competencies." },
            { "title": "Access to expertise", "desc": "GoZoom has expertise in recruitment and selection, and clients use our resources and knowledge to find the best fit for the company's needs." },
            { "title": "Quality of hire", "desc": "We help our clients improve the quality of their hires by thoroughly screening and evaluating the best candidates." },
            { "title": "Scalability", "desc": "Our RPO allows you to scale up or down your recruitment efforts as needed, providing flexibility for changing business needs." },
            { "title": "Risk management", "desc": "Our RPO solutions help clients mitigate the risk of hiring the wrong person by providing guarantees or replacements if necessary." }
        ],
        "caseStudyTitle": "Implemented Recruitment Process Outsource (RPO) strategy",
        "caseStudyDesc": "RPO services can be particularly useful for companies that are struggling to find qualified candidates, or that are spending a lot of time and resources on the recruitment process. Using an RPO provider can save a company time and resources, and can also provide access to expertise in recruitment and selection."
    },
    "statement_of_work": {
        "heroSubtitle": "Drive More Value With",
        "heroTitle": "Statement of Work (SOW)",
        "heroDesc": "We offer top-notch Statement of Work services to help you streamline your projects and ensure they are completed on time and within budget. Whether you need help defining scope, outlining deliverables, or managing resources, we've got you covered.",
        "reasonsTitle": "Reasons to Choose GoZoom for SOW Services",
        "reasons": [
            { "title": "Access to talent", "desc": "You may not have the necessary skills or expertise in-house to complete a particular project or task, choose us as your vendor or contractor. We have the required skills and experience." },
            { "title": "Flexibility", "desc": "A company may only need certain services on a temporary or project-by-project basis, in which case using a vendor or contractor can be more flexible than hiring full-time employees." },
            { "title": "Cost-effectiveness", "desc": "It may be more cost-effective for a company to use a vendor or contractor for certain services, rather than hiring full-time employees or training existing staff to acquire the necessary skills." },
            { "title": "Scalability", "desc": "A company may need to ramp up or scale back their operations on a project-by-project basis, in which case using a vendor or contractor can provide the necessary flexibility." },
            { "title": "Quality", "desc": "A company may choose to use a vendor or contractor with a proven track record of delivering high-quality work." },
            { "title": "Time-saving", "desc": "Using a vendor or contractor can save a company time and resources by allowing them to focus on their core competencies, rather than having to manage all aspects of a project in-house." }
        ],
        "caseStudyTitle": "Streamlining Staffing Services with a Statement of Work",
        "caseStudyDesc": "SOW services are typically used when a company needs to hire a vendor or contractor to perform specific tasks or projects, rather than hiring full-time employees. SOW services can be used to access specialized skills or expertise on an as-needed basis, or to provide flexibility and scalability for a company's operations."
    }
};

const workforcePagesFr = {
    "contingent_staffing": {
        "heroSubtitle": "Faites évoluer votre équipe avec",
        "heroTitle": "Recrutement Contingent",
        "heroDesc": "GoZoom se spécialise dans la fourniture de solutions de recrutement contingent agiles conçues pour répondre aux demandes de votre projet. Que vous ayez besoin d'une expertise à court terme ou de talents spécialisés pour combler une lacune, nous nous assurons que vous avez les bonnes personnes au bon moment. Notre approche flexible vous permet d'évoluer à la hausse ou à la baisse sans engagements à long terme, favorisant ainsi l'efficacité et le succès.",
        "reasonsTitle": "Pourquoi choisir GoZoom pour le recrutement contingent ?",
        "reasons": [
            { "title": "Accès aux meilleurs talents", "desc": "Accédez à un bassin plus large de candidats qualifiés possédant des compétences et une expertise diversifiées qui pourraient ne pas être disponibles au sein de votre propre organisation." },
            { "title": "Rentabilité", "desc": "Le recrutement contingent peut être plus rentable que l'embauche d'employés à temps plein, en particulier pour un travail temporaire ou basé sur un projet." },
            { "title": "Flexibilité", "desc": "Faites évoluer rapidement votre effectif à la hausse ou à la baisse selon vos besoins, sans l'engagement à long terme de l'embauche d'employés à temps plein." },
            { "title": "Risque réduit", "desc": "Atténuez le risque d'embaucher la mauvaise personne en prévoyant une période d'essai ou un remplacement garanti si nécessaire." },
            { "title": "Efficacité accrue", "desc": "Permettez à votre entreprise de se concentrer sur ses compétences de base pendant que nous gérons le recrutement et la gestion des travailleurs contingents." },
            { "title": "Conformité", "desc": "Assurez-vous que vos travailleurs contingents sont conformes à toutes les lois et réglementations en vigueur." }
        ],
        "caseStudyTitle": "Stratégie de recrutement contingent mise en œuvre",
        "caseStudyDesc": "Les services de recrutement contingent peuvent être utilisés pour une variété de postes, à tous les niveaux et dans toutes les industries. Ils peuvent être particulièrement utiles pour les entreprises qui traversent une période de croissance ou qui travaillent sur un projet spécifique nécessitant des compétences spécialisées. Le recrutement contingent peut donner accès à des candidats qualifiés possédant une variété de compétences et d'expertise, tout en permettant à une entreprise de maintenir flexibilité et rentabilité."
    },
    "direct_hire": {
        "heroSubtitle": "Construisez votre héritage avec",
        "heroTitle": "Embauche Directe",
        "heroDesc": "Lorsqu'il est temps de trouver l'ajout permanent parfait à votre équipe, les services d'embauche directe de GoZoom offrent l'excellence. Nous ne nous contentons pas de trouver des candidats ; nous trouvons de futurs leaders et des contributeurs clés qui s'alignent sur la culture de votre entreprise et votre vision à long terme. Laissez-nous gérer les complexités du sourcing et de la sélection afin que vous puissiez vous concentrer sur la croissance de votre entreprise avec des professionnels de haut niveau et engagés.",
        "reasonsTitle": "Raisons de choisir GoZoom pour l'embauche directe",
        "reasons": [
            { "title": "Accès à un bassin de talents plus large", "desc": "GoZoom a accès à un vaste réseau de candidats qualifiés qui pourraient ne pas être actifs sur les sites d'emploi ou par d'autres méthodes de recrutement traditionnelles." },
            { "title": "Qualité d'embauche améliorée", "desc": "Nos services d'embauche directe impliquent un processus de sélection et d'évaluation approfondi, ce qui peut conduire à des embauches de meilleure qualité et à une réduction du roulement du personnel." },
            { "title": "Délai d'embauche réduit", "desc": "En externalisant le processus de recrutement à GoZoom, vous pouvez économiser du temps et des ressources et vous concentrer sur d'autres tâches commerciales importantes." },
            { "title": "Objectivité", "desc": "Notre équipe de recruteurs peut fournir une perspective objective sur les candidats, ce qui peut aider à réduire les biais et à garantir que le meilleur candidat soit embauché." },
            { "title": "Confidentialité", "desc": "GoZoom peut gérer le processus de recrutement discrètement, ce qui peut être utile si vous cherchez à remplacer un employé actuel ou si vous souhaitez garder le processus d'embauche confidentiel." },
            { "title": "Rentabilité", "desc": "L'utilisation des services d'embauche directe de GoZoom peut être plus rentable que l'utilisation de plusieurs agences de recrutement ou la publicité sur les sites d'emploi." }
        ],
        "caseStudyTitle": "Stratégie d'embauche directe mise en œuvre",
        "caseStudyDesc": "Les services d'embauche directe peuvent être utilisés pour une variété de postes, à tous les niveaux et dans toutes les industries. Ils peuvent être particulièrement utiles pour les entreprises qui cherchent à pourvoir des postes spécialisés ou de haut niveau, ou pour les entreprises qui cherchent à bâtir une équipe solide et à long terme. Nos services d'embauche directe peuvent donner accès à un plus grand bassin de candidats qualifiés et peuvent aider à améliorer la qualité de vos embauches et à réduire le roulement du personnel."
    },
    // ... complete translations for others following same pattern
    "direct_sourcing": {
        "heroSubtitle": "Optimisez vos talents avec",
        "heroTitle": "Sourcing Direct",
        "heroDesc": "Les solutions de Sourcing Direct de GoZoom exploitent la puissance de votre marque pour attirer des talents de haute qualité. Nous créons et gérons des bassins de talents dédiés et adaptés à vos besoins spécifiques, réduisant ainsi la dépendance aux agences tierces et abaissant les coûts. En combinant la réputation de votre marque avec notre expertise en recrutement, nous offrons un moyen fluide, efficace et rentable de trouver les bonnes personnes.",
        "reasonsTitle": "Raisons de choisir GoZoom pour le sourcing direct",
        "reasons": [
            { "title": "Rentabilité", "desc": "Le sourcing direct peut être plus rentable que les méthodes de recrutement traditionnelles, car il vous permet de constituer votre propre bassin de talents et de réduire les frais des agences de recrutement." },
            { "title": "Efficacité accrue", "desc": "En constituant votre propre bassin de talents, vous pouvez réduire le temps et les ressources consacrés au recrutement et vous concentrer sur votre activité principale." },
            { "title": "Accès à un bassin de talents plus large", "desc": "Le sourcing direct vous permet d'accéder à un plus large éventail de candidats qualifiés qui pourraient ne pas être actifs sur les sites d'emploi ou par d'autres méthodes de recrutement traditionnelles." },
            { "title": "Qualité d'embauche améliorée", "desc": "En constituant votre propre bassin de talents, vous pouvez vous assurer que vous attirez des candidats qui correspondent bien à la culture et aux valeurs de votre entreprise." },
            { "title": "Meilleur contrôle", "desc": "Le sourcing direct vous donne plus de contrôle sur le processus de recrutement et vous permet de personnaliser votre recherche pour répondre à vos besoins spécifiques." },
            { "title": "Notoriété de la marque", "desc": "Le sourcing direct peut aider à accroître la notoriété de votre marque et à attirer les meilleurs talents intéressés à travailler pour votre entreprise." }
        ],
        "caseStudyTitle": "Stratégie de sourcing direct mise en œuvre",
        "caseStudyDesc": "Les services de sourcing direct peuvent être particulièrement utiles pour les entreprises qui ont une marque forte et qui cherchent à constituer un bassin de talents de haute qualité. L'utilisation du sourcing direct peut faire gagner du temps et des ressources à une entreprise et peut également aider à améliorer la qualité de ses embauches et à accroître la notoriété de sa marque."
    },
    "diversity_spend_capture": {
        "heroSubtitle": "Favorisez l'impact avec",
        "heroTitle": "Capture des Dépenses de Diversité",
        "heroDesc": "GoZoom vous aide à atteindre vos objectifs de diversité et d'inclusion grâce à une capture stratégique des dépenses. Nous identifions et établissons des partenariats avec des fournisseurs diversifiés, garantissant que vos processus d'approvisionnement soutiennent les entreprises sous-représentées tout en favorisant l'innovation et la valeur. Notre approche globale vous permet de suivre, mesurer et optimiser vos dépenses liées à la diversité, ayant ainsi un impact tangible sur votre entreprise et la communauté.",
        "reasonsTitle": "Raisons de choisir GoZoom pour la capture des dépenses de diversité",
        "reasons": [
            { "title": "Conformité", "desc": "La capture des dépenses de diversité de GoZoom vous aide à garantir que votre entreprise est conforme à toutes les exigences légales et de conformité nécessaires, y compris les taxes et les lois sur l'emploi." },
            { "title": "Diversité et inclusion", "desc": "La capture des dépenses de diversité peut aider votre entreprise à promouvoir la diversité et l'inclusion en soutenant les fournisseurs et les entrepreneurs diversifiés." },
            { "title": "Rentabilité", "desc": "La capture des dépenses de diversité peut être plus rentable que la gestion interne du recrutement et de la gestion des fournisseurs diversifiés." },
            { "title": "Efficacité", "desc": "La capture des dépenses de diversité peut faire gagner du temps et des ressources à votre entreprise en prenant en charge la gestion des fournisseurs diversifiés." },
            { "title": "Scalabilité", "desc": "La capture des dépenses de diversité permet à votre entreprise d'ajuster ses efforts en matière de diversité en fonction des besoins, offrant ainsi une flexibilité pour l'évolution des besoins commerciaux." },
            { "title": "Impact", "desc": "La capture des dépenses de diversité peut avoir un impact positif sur la communauté en soutenant les entreprises diversifiées et en favorisant la croissance économique." }
        ],
        "caseStudyTitle": "Stratégie de capture des dépenses de diversité mise en œuvre",
        "caseStudyDesc": "Les services de capture des dépenses de diversité peuvent être particulièrement utiles pour les entreprises qui cherchent à promouvoir la diversité et l'inclusion et qui souhaitent s'assurer qu'elles respectent toutes les exigences légales et de conformité nécessaires. L'utilisation d'un service de capture des dépenses de diversité peut faire gagner du temps et des ressources à une entreprise tout en ayant un impact positif sur la communauté."
    },
    "gcc_bot": {
        "heroSubtitle": "Le futur des opérations avec",
        "heroTitle": "GCC BOT (Build-Operate-Transfer)",
        "heroDesc": "Le modèle GCC BOT de GoZoom offre un moyen peu risqué et évolutif d'établir votre propre Centre de Capacité Mondiale. Nous construisons l'infrastructure, recrutons les talents et exploitons le centre selon vos spécifications. Une fois le centre pleinement fonctionnel et optimisé, nous vous en transférons la propriété. Ce modèle vous permet de tirer parti de notre expertise locale et de notre excellence opérationnelle tout en conservant le contrôle à long terme sur vos opérations mondiales.",
        "reasonsTitle": "Raisons de choisir GoZoom pour les services GCC BOT",
        "reasons": [
            { "title": "Risque réduit", "desc": "En utilisant les services GCC BOT de GoZoom, vous pouvez atténuer le risque de créer vos propres opérations dans un pays étranger, car nous gérons le recrutement et la gestion des travailleurs." },
            { "title": "Délai de mise sur le marché plus court", "desc": "Nos solutions GCC BOT peuvent vous aider à mettre en place vos opérations plus rapidement, car nous disposons de l'infrastructure et de l'expertise nécessaires." },
            { "title": "Accès aux talents", "desc": "Les services GCC BOT de GoZoom donnent accès à un plus large éventail de candidats qualifiés possédant une variété de compétences et d'expertise." },
            { "title": "Rentabilité", "desc": "Les services GCC BOT peuvent être plus rentables que la création de vos propres opérations à partir de zéro, car ils vous permettent de tirer parti des ressources et de l'expertise de GoZoom." },
            { "title": "Flexibilité", "desc": "Les services GCC BOT offrent une flexibilité pour l'évolution des besoins commerciaux, car vous pouvez adapter vos opérations selon vos besoins." },
            { "title": "Transfert de propriété", "desc": "Nos solutions GCC BOT incluent un transfert de propriété, vous permettant ainsi de prendre à terme le contrôle total de vos opérations." }
        ],
        "caseStudyTitle": "Stratégie GCC BOT mise en œuvre",
        "caseStudyDesc": "Les services GCC BOT sont généralement utilisés lorsqu'une entreprise doit mettre en place ses propres opérations dans un pays étranger tout en minimisant les risques et les défis associés. Ils peuvent être utilisés pour accéder à des compétences spécialisées et offrent une flexibilité pour les opérations d'une entreprise."
    },
    "global_payroll": {
        "heroSubtitle": "Obtenez plus de valeur avec",
        "heroTitle": "Paie Mondiale et Conformité",
        "heroDesc": "Faites-nous confiance pour les services EOR/AOR avec une facturation unique simplifiée par pays, la gestion de la conformité et la capture des dépenses de diversité. Nos solutions sur mesure simplifient les complexités de la paie, soutiennent vos objectifs d'inclusion et vous permettent de vous concentrer sur la croissance de votre entreprise.",
        "reasonsTitle": "Avantages de choisir GoZoom pour la paie",
        "reasons": [
            { "title": "Rentabilité", "desc": "Les services de traitement de la paie peuvent être plus rentables que la gestion interne, car ils permettent d'externaliser la tâche à une équipe d'experts." },
            { "title": "Gain de temps", "desc": "Les services de paie font gagner du temps et des ressources en prenant en charge le fardeau administratif, permettant à l'entreprise de se concentrer sur son cœur de métier." },
            { "title": "Précision", "desc": "Les services de paie garantissent que les calculs et le traitement sont précis, évitant ainsi des erreurs potentielles ou des amendes." },
            { "title": "Conformité", "desc": "Ils aident l'entreprise à s'assurer que toutes les exigences légales et de conformité sont respectées, y compris les taxes, l'assurance et le droit du travail." },
            { "title": "Avantages pour les employés", "desc": "Ils offrent un accès à des avantages sociaux, tels que l'assurance maladie et les plans de retraite, attirant ainsi les meilleurs talents." },
            { "title": "Scalabilité", "desc": "Ils permettent à une entreprise d'ajuster ses efforts de paie selon les besoins, offrant une flexibilité face aux changements commerciaux." }
        ],
        "caseStudyTitle": "Services de traitement de la paie mis en œuvre",
        "caseStudyDesc": "Les services de paie sont particulièrement utiles pour les entreprises qui ont du mal à suivre les exigences administratives ou qui y consacrent trop de ressources. Ils offrent un gain de temps et un accès à une expertise en paie et en conformité."
    },
    "master_vendor_program": {
        "heroSubtitle": "Réduisez les coûts fixes avec",
        "heroTitle": "Programme de Vendeur Principal (MVP)",
        "heroDesc": "Choisir GoZoom comme partenaire principal de recrutement vous donne accès à une solution complète conçue pour optimiser votre effectif. Notre programme MVP offre un soutien administratif, de supervision et de systèmes de haut niveau—éliminant ainsi la complexité de la gestion de plusieurs fournisseurs. Avec une seule équipe GoZoom dédiée, vous pouvez superviser vos besoins en recrutement, résoudre rapidement les défis, affiner votre stratégie de fournisseurs et identifier des opportunités d'économies de coûts — le tout via un partenariat unique et simplifié.",
        "reasonsTitle": "Avantages de notre MVP",
        "reasons": [
            { "title": "Responsabilité centralisée", "desc": "Bénéficiez d'une responsabilité centralisée avec un point de contact unique pour tous vos besoins en gestion de fournisseurs et en recrutement." },
            { "title": "Conseils d'experts", "desc": "Des conseils d'experts basés sur des décennies d'expérience en recrutement pour garantir des stratégies d'acquisition de talents de haut niveau." },
            { "title": "Repères de performance clairs", "desc": "Des indicateurs de performance clés (KPI) et des métriques clairs pour mesurer la performance des fournisseurs de manière cohérente." },
            { "title": "Aperçus du marché en temps réel", "desc": "Des analyses quotidiennes et des recherches sur les tendances actuelles du recrutement pour des informations en temps réel." },
            { "title": "Réseau mondial de talents", "desc": "Accès au vaste réseau national et mondial de talents de GoZoom, vous permettant de trouver la personne idéale pour votre équipe." },
            { "title": "Intégration fluide des fournisseurs", "desc": "Une intégration transparente des fournisseurs et une transparence opérationnelle améliorée sur tous vos engagements." }
        ],
        "caseStudyTitle": "Une entreprise logistique mondiale relève ses défis de recrutement",
        "caseStudyDesc": "Une entreprise logistique mondiale s'appuyant sur plus de dix fournisseurs de recrutement faisait face à des opérations fragmentées. Cela entraînait des inefficacités, une charge de travail administrative lourde et une visibilité limitée sur l'effectif. Pour résoudre ces problèmes, ils se sont associés à GoZoom dans le cadre du Programme de Vendeur Principal (MVP), simplifiant leur processus de recrutement et réduisant les coûts grâce à une approche plus centralisée et efficace."
    },
    "nearshore_offshore": {
        "heroSubtitle": "Agence de recrutement avec",
        "heroTitle": "Nearshore and Offshore",
        "heroDesc": "GoZoom propose des services Nearshore et Offshore flexibles pour aider les entreprises à gagner en efficacité et en rentabilité. Nos centres de prestation mondiaux donnent accès aux meilleurs talents, garantissant une collaboration fluide et accélérant les délais des projets. Des services informatiques à l'externalisation des processus métier, nous vous permettons d'évoluer, de stimuler l'innovation et de vous concentrer sur la croissance pendant que nous gérons le reste.",
        "reasonsTitle": "Raisons de choisir GoZoom pour le Nearshore et Offshore",
        "reasons": [
            { "title": "Économies de coûts", "desc": "Le recrutement Nearshore et Offshore de GoZoom vous permet d'accéder aux meilleurs talents à un coût inférieur, car les salaires et avantages sociaux peuvent être moindres dans les pays voisins." },
            { "title": "Proximité", "desc": "Cela permet à l'entreprise de maintenir une proximité avec ses opérations, ce qui est bénéfique pour la communication et la coordination." },
            { "title": "Compatibilité culturelle", "desc": "L'embauche d'employés de pays voisins peut vous aider à mieux comprendre et naviguer dans les marchés et cultures locaux." },
            { "title": "Compatibilité des fuseaux horaires", "desc": "Notre offre facilite la communication et la collaboration grâce à des fuseaux horaires similaires." },
            { "title": "Bassin de talents", "desc": "Les solutions Nearshore et Offshore donnent accès à un bassin plus large de candidats qualifiés possédant diverses compétences." },
            { "title": "Gestion des risques", "desc": "GoZoom aide à atténuer le risque d'embaucher la mauvaise personne en fournissant des garanties ou des remplacements si nécessaire." }
        ],
        "caseStudyTitle": "Services Nearshore et Offshore mis en œuvre",
        "caseStudyDesc": "Ces services peuvent être utilisés pour une variété de postes et d'industries. Ils sont particulièrement utiles pour les entreprises qui cherchent à se développer à l'étranger tout en minimisant les risques, en offrant accès à des talents qualifiés tout en maintenant proximité et compatibilité culturelle."
    },
    "rpo": {
        "heroSubtitle": "Spécialisez-vous dans",
        "heroTitle": "Externalisation du Processus de Recrutement (RPO)",
        "heroDesc": "Simplifiez votre processus de recrutement et concentrez-vous sur votre cœur de métier avec nos services RPO. Notre équipe d'experts gérera tous les aspects de vos besoins en embauche, du sourcing à l'intégration des nouveaux employés. Avec le RPO, vous aurez accès à un plus large bassin de candidats qualifiés tout en économisant du temps et des ressources.",
        "reasonsTitle": "Raisons de choisir GoZoom pour le RPO",
        "reasons": [
            { "title": "Rentabilité", "desc": "Le RPO de GoZoom peut être plus rentable qu'une gestion interne, car il permet d'externaliser tout le processus ou des tâches spécifiques à une équipe experte." },
            { "title": "Gain de temps", "desc": "Notre solution fait gagner du temps en prenant en charge le fardeau du recrutement, permettant à l'entreprise de se concentrer sur ses compétences de base." },
            { "title": "Accès à l'expertise", "desc": "GoZoom possède une expertise en recrutement et sélection, et les clients utilisent nos ressources pour trouver la meilleure adéquation avec leurs besoins." },
            { "title": "Qualité d'embauche", "desc": "Nous aidons à améliorer la qualité des recrutements grâce à une sélection et une évaluation minutieuses des meilleurs candidats." },
            { "title": "Scalabilité", "desc": "Notre RPO permet d'ajuster vos efforts de recrutement selon les besoins, offrant une flexibilité face aux changements commerciaux." },
            { "title": "Gestion des risques", "desc": "Nos solutions aident à atténuer le risque de mauvaise embauche en offrant des garanties ou des remplacements si nécessaire." }
        ],
        "caseStudyTitle": "Stratégie RPO mise en œuvre",
        "caseStudyDesc": "Les services RPO sont particulièrement utiles pour les entreprises qui peinent à trouver des candidats qualifiés ou qui y consacrent trop de ressources. Utiliser un fournisseur de RPO offre un gain de temps et un accès à une expertise reconnue."
    },
    "statement_of_work": {
        "heroSubtitle": "Obtenez plus de valeur avec",
        "heroTitle": "Énoncé des Travaux (SOW)",
        "heroDesc": "Nous proposons des services SOW de premier ordre pour vous aider à simplifier vos projets et garantir leur achèvement dans les délais et le respect du budget. Que vous ayez besoin d'aide pour définir la portée, délimiter les livrables ou gérer les ressources, nous sommes là pour vous.",
        "reasonsTitle": "Raisons de choisir GoZoom pour les services SOW",
        "reasons": [
            { "title": "Accès aux talents", "desc": "Si vous n'avez pas les compétences internes pour un projet, choisissez-nous comme partenaire. Nous avons les compétences et l'expérience requises." },
            { "title": "Flexibilité", "desc": "Une entreprise peut n'avoir besoin de certains services que de manière temporaire ; l'utilisation d'un prestataire est alors plus flexible que l'embauche à temps plein." },
            { "title": "Rentabilité", "desc": "Il peut être plus rentable de passer par un prestataire plutôt que d'embaucher ou de former le personnel existant pour de nouvelles compétences." },
            { "title": "Scalabilité", "desc": "Une entreprise peut avoir besoin d'ajuster ses opérations projet par projet, offrant ainsi la flexibilité nécessaire." },
            { "title": "Qualité", "desc": "Le choix d'un prestataire ayant fait ses preuves garantit un travail de haute qualité." },
            { "title": "Gain de temps", "desc": "L'utilisation d'un prestataire permet de se concentrer sur son cœur de métier sans avoir à gérer tous les aspects d'un projet en interne." }
        ],
        "caseStudyTitle": "Optimisation des services de recrutement via un SOW",
        "caseStudyDesc": "Les services SOW sont utilisés lorsqu'une entreprise doit engager un prestataire pour des tâches spécifiques plutôt que d'embaucher. Ils permettent d'accéder à des expertises ponctuelles et offrent flexibilité et scalabilité."
    }
};

const hirePagesEn = {
    "angular": {
        "heroSubtitle": "Hire Angular Developers",
        "heroTitle": "Scalable Angular Architectures for Global Brands",
        "heroDesc": "Hire senior Angular engineers who specialized in heavy-duty enterprise applications, utilizing the full power of TypeScript and RxJS.",
        "fleetTitle": "Scale Your Enterprise Fleet Today",
        "fleetDesc": "Our Angular consultants are ready to integrate into your existing workflow or start a greenfield project from scratch.",
        "strengths": [
            { "title": "Enterprise State Management", "desc": "Expertise in NgRx and Akita for complex data flows." },
            { "title": "Modular Architecture", "desc": "Building maintainable, lazy-loaded feature modules." },
            { "title": "TypeScript Mastery", "desc": "Rock-solid type safety for large-scale development." }
        ],
        "experience": [
            { "title": "Financial Dashboards", "desc": "Real-time data visualization and secure banking portals." },
            { "title": "Health-Tech Platforms", "desc": "HIPAA-compliant patient management systems." },
            { "title": "E-commerce Engines", "desc": "High-performance storefronts with complex filtering." }
        ]
    },
    "codeigniter": {
        "heroSubtitle": "Hire CodeIgniter Developers",
        "heroTitle": "Lightweight, High-Performance Build",
        "heroDesc": "Leverage the speed of CodeIgniter with developers who specialize in building robust, small-footprint applications that don't sacrifice power for performance.",
        "fleetTitle": "Modernize Your PHP Stack",
        "fleetDesc": "Whether you're upgrading a legacy system or building a new API, our specialists deliver clean, documented, and secure code.",
        "strengths": [
            { "title": "MVC Compliance", "desc": "Strict adherence to Model-View-Controller patterns for clean separation." },
            { "title": "Query Builder Speed", "desc": "Optimized database interactions for lightning-fast load times." },
            { "title": "Security-First Coding", "desc": "Built-in protection against CSRF, XSS, and SQL injection." }
        ],
        "experience": [
            { "title": "Legacy Modernization", "desc": "Upgrading older PHP apps to modern CI4 standards." },
            { "title": "Custom CMS", "desc": "Tailored content management systems for unique business needs." },
            { "title": "RESTful APIs", "desc": "Lightweight backends for various frontend consumers." }
        ]
    },
    "html": {
        "heroSubtitle": "Hire Front-End Developers",
        "heroTitle": "Pixel-Perfect Responsive Engineering",
        "heroDesc": "Bring your designs to life with semantic, accessible, and high-performance HTML/CSS development that looks stunning on every device.",
        "fleetTitle": "Elevate Your Brand Aesthetics",
        "fleetDesc": "Our developers focus on the intersection of design and performance, ensuring your site is as fast as it is beautiful.",
        "strengths": [
            { "title": "Semantic HTML5", "desc": "SEO-friendly structure for better search visibility." },
            { "title": "Advanced CSS3/SASS", "desc": "Complex animations and modular, scalable styling." },
            { "title": "Web Accessibility", "desc": "Inclusive design following WCAG 2.1 guidelines." }
        ],
        "experience": [
            { "title": "Premium Landing Pages", "desc": "High-conversion marketing sites for global brands." },
            { "title": "Interactive Prototypes", "desc": "Full-fidelity HTML prototypes for complex user flows." },
            { "title": "Email Engineering", "desc": "Cross-client compatible, high-impact email designs." }
        ]
    },
    "jquery": {
        "heroSubtitle": "Hire jQuery Specialists",
        "heroTitle": "Efficient DOM Interaction & Legacy Support",
        "heroDesc": "Expert developers for complex DOM manipulation, legacy system maintenance, and rapid prototyping using the industry's most trusted JS library.",
        "fleetTitle": "Optimize Your Interactivity",
        "fleetDesc": "We bridge the gap between legacy reliability and modern interactivity with optimized jQuery implementations.",
        "strengths": [
            { "title": "AJAX Excellence", "desc": "Seamless asynchronous data loading and form submission." },
            { "title": "Custom Plugins", "desc": "Building reusable, efficient UI components tailored to you." },
            { "title": "Cross-Browser Fixes", "desc": "Ensuring consistent behavior across all major browsers." }
        ],
        "experience": [
            { "title": "Enterprise Legacy Systems", "desc": "Maintaining and extending large-scale jQuery applications." },
            { "title": "Rapid UI Enhancements", "desc": "Quickly adding interactivity to static platforms." },
            { "title": "Integration Wrappers", "desc": "Connecting legacy code with modern web services." }
        ]
    },
    "laravel": {
        "heroSubtitle": "Hire Laravel Developers",
        "heroTitle": "The PHP Framework for Web Artisans",
        "heroDesc": "Build secure, expressive, and scalable web applications with senior Laravel engineers who specialize in the entire TALL stack.",
        "fleetTitle": "Architect Your Next Big Idea",
        "fleetDesc": "From SaaS platforms to complex marketplaces, we use Laravel's elegant syntax to build robust digital products.",
        "strengths": [
            { "title": "Eloquent ORM Mastery", "desc": "High-performance database modeling and relationships." },
            { "title": "Secure Authentication", "desc": "Implementing robust, enterprise-grade auth systems." },
            { "title": "Microservices Ready", "desc": "Building scalable APIs and event-driven architectures." }
        ],
        "experience": [
            { "title": "SaaS Platforms", "desc": "Multi-tenant applications with complex subscription flows." },
            { "title": "Payment Gateways", "desc": "Secure integration with Stripe, PayPal, and more." },
            { "title": "Real-time Dashboards", "desc": "Live monitoring using Laravel Echo and Pusher." }
        ]
    },
    "php": {
        "heroSubtitle": "Hire PHP Developers",
        "heroTitle": "Versatile Server-Side Engineering",
        "heroDesc": "Harness the power of the language that runs 80% of the web. Our PHP experts deliver everything from lean scripts to massive enterprise backends.",
        "fleetTitle": "Reliable Backend Excellence",
        "fleetDesc": "We provide core PHP expertise to handle high-traffic environments and complex data processing.",
        "strengths": [
            { "title": "Modern PHP 8.x", "desc": "Utilizing JIT, union types, and performance enhancements." },
            { "title": "Database Optimization", "desc": "Expert tuning for MySQL, PostgreSQL, and MariaDB." },
            { "title": "Legacy Migration", "desc": "Transitioning old procedural code to modern OOP." }
        ],
        "experience": [
            { "title": "Custom E-commerce", "desc": "Tailor-made shopping experiences for unique niches." },
            { "title": "Content Platforms", "desc": "High-traffic news and media portals with caching." },
            { "title": "Financial Systems", "desc": "Secure ledger and accounting engines with PHP." }
        ]
    },
    "react": {
        "heroSubtitle": "Hire React Developers",
        "heroTitle": "Build Fast, Scalable Modern Web Apps",
        "heroDesc": "Hire specialized React.js developers who don't just write code, but architect immersive digital experiences using the latest frontend standards.",
        "fleetTitle": "Ready to React-ify Your Vision?",
        "fleetDesc": "Get a complete technical consultation and development roadmap within 24 hours. No strings attached.",
        "strengths": [
            { "title": "Hooks & Composition", "desc": "Building highly reusable and performant UI components." },
            { "title": "State Management", "desc": "Complex data handling with Redux, Zustand, or Context." },
            { "title": "Performance Tuning", "desc": "Virtualization, code-splitting, and optimized rendering." }
        ],
        "experience": [
            { "title": "Single Page Apps", "desc": "Lightning-fast, desktop-like web experiences." },
            { "title": "Interactive Dashboards", "desc": "Real-time data visualization and admin panels." },
            { "title": "Social Platforms", "desc": "Scalable community and networking applications." }
        ]
    }
};

const hirePagesFr = {
    "angular": {
        "heroSubtitle": "Recruter des Développeurs Angular",
        "heroTitle": "Architectures Angular Évolutives pour Marques Mondiales",
        "heroDesc": "Recrutez des ingénieurs Angular seniors spécialisés dans les applications d'entreprise lourdes, utilisant toute la puissance de TypeScript et RxJS.",
        "fleetTitle": "Faites Évoluer Votre Flotte d'Entreprise Aujourd'hui",
        "fleetDesc": "Nos consultants Angular sont prêts à s'intégrer dans votre flux de travail existant ou à démarrer un nouveau projet à partir de zéro.",
        "strengths": [
            { "title": "Gestion d'État d'Entreprise", "desc": "Expertise en NgRx et Akita pour les flux de données complexes." },
            { "title": "Architecture Modulaire", "desc": "Construction de modules de fonctionnalités maintenables et à chargement différé." },
            { "title": "Maîtrise de TypeScript", "desc": "Sécurité de type robuste pour le développement à grande échelle." }
        ],
        "experience": [
            { "title": "Tableaux de Bord Financiers", "desc": "Visualisation des données en temps réel et portails bancaires sécurisés." },
            { "title": "Plateformes Health-Tech", "desc": "Systèmes de gestion des patients conformes HIPAA." },
            { "title": "Moteurs d'E-commerce", "desc": "Vitrines haute performance avec filtrage complexe." }
        ]
    },
    "codeigniter": {
        "heroSubtitle": "Recruter des Développeurs CodeIgniter",
        "heroTitle": "Construction Légère et Haute Performance",
        "heroDesc": "Tirez parti de la rapidité de CodeIgniter avec des développeurs spécialisés dans la construction d'applications robustes et compactes sans sacrifier la puissance à la performance.",
        "fleetTitle": "Modernisez Votre Pile PHP",
        "fleetDesc": "Que vous mettiez à jour un système existant ou construisiez une nouvelle API, nos spécialistes fournissent un code propre, documenté et sécurisé.",
        "strengths": [
            { "title": "Conformité MVC", "desc": "Respect strict des modèles Modèle-Vue-Contrôleur pour une séparation claire." },
            { "title": "Vitesse du Query Builder", "desc": "Interactions de base de données optimisées pour des temps de chargement ultra-rapides." },
            { "title": "Codage Priorisant la Sécurité", "desc": "Protection intégrée contre CSRF, XSS et injection SQL." }
        ],
        "experience": [
            { "title": "Modernisation de l'Existant", "desc": "Mise à niveau d'anciennes applications PHP vers les normes CI4 modernes." },
            { "title": "CMS Personnalisé", "desc": "Systèmes de gestion de contenu sur mesure pour des besoins commerciaux uniques." },
            { "title": "APIs RESTful", "desc": "Backends légers pour divers consommateurs frontend." }
        ]
    },
    "html": {
        "heroSubtitle": "Recruter des Développeurs Front-End",
        "heroTitle": "Ingénierie Responsive au Pixel Près",
        "heroDesc": "Donnez vie à vos designs avec un développement HTML/CSS sémantique, accessible et performant, superbe sur tous les appareils.",
        "fleetTitle": "Élevez l'Esthétique de Votre Marque",
        "fleetDesc": "Nos développeurs se concentrent sur l'intersection du design et de la performance, garantissant que votre site est aussi rapide qu'élégant.",
        "strengths": [
            { "title": "HTML5 Sémantique", "desc": "Structure optimisée pour le SEO pour une meilleure visibilité de recherche." },
            { "title": "CSS3/SASS Avancé", "desc": "Animations complexes et style modulaire et évolutif." },
            { "title": "Accessibilité Web", "desc": "Conception inclusive suivant les directives WCAG 2.1." }
        ],
        "experience": [
            { "title": "Pages de Destination Premium", "desc": "Sites de marketing à haute conversion pour marques mondiales." },
            { "title": "Prototypes Interactifs", "desc": "Prototypes HTML haute fidélité pour des flux utilisateurs complexes." },
            { "title": "Ingénierie d'E-mails", "desc": "Designs d'e-mails à fort impact compatibles multi-clients." }
        ]
    },
    "jquery": {
        "heroSubtitle": "Recruter des Spécialistes jQuery",
        "heroTitle": "Interaction DOM Efficace et Support de l'Existant",
        "heroDesc": "Développeurs experts pour la manipulation complexe du DOM, la maintenance des systèmes existants et le prototypage rapide utilisant la bibliothèque JS la plus fiable du secteur.",
        "fleetTitle": "Optimisez Votre Interactivité",
        "fleetDesc": "Nous comblons le fossé entre la fiabilité de l'existant et l'interactivité moderne avec des implémentations jQuery optimisées.",
        "strengths": [
            { "title": "Excellence AJAX", "desc": "Chargement de données asynchrone et soumission de formulaires fluides." },
            { "title": "Plugins Personnalisés", "desc": "Construction de composants UI réutilisables et efficaces adaptés à vous." },
            { "title": "Correctifs Multi-Navigateurs", "desc": "Assurer un comportement cohérent sur tous les navigateurs majeurs." }
        ],
        "experience": [
            { "title": "Systèmes d'Entreprise Existants", "desc": "Maintenance et extension d'applications jQuery à grande échelle." },
            { "title": "Améliorations UI Rapides", "desc": "Ajout rapide d'interactivité à des plateformes statiques." },
            { "title": "Wrappers d'Intégration", "desc": "Connexion du code existant avec des services web modernes." }
        ]
    },
    "laravel": {
        "heroSubtitle": "Recruter des Développeurs Laravel",
        "heroTitle": "Le Framework PHP pour les Artisans du Web",
        "heroDesc": "Construisez des applications web sécurisées, expressives et évolutives avec des ingénieurs Laravel seniors spécialisés dans toute la pile TALL.",
        "fleetTitle": "Architecturez Votre Prochaine Grande Idée",
        "fleetDesc": "Des plateformes SaaS aux places de marché complexes, nous utilisons la syntaxe élégante de Laravel pour construire des produits numériques robustes.",
        "strengths": [
            { "title": "Maîtrise d'Eloquent ORM", "desc": "Modélisation de base de données et relations haute performance." },
            { "title": "Authentification Sécurisée", "desc": "Mise en œuvre de systèmes d'authentification robustes de niveau entreprise." },
            { "title": "Prêt pour les Microservices", "desc": "Construction d'APIs évolutives et d'architectures pilotées par événements." }
        ],
        "experience": [
            { "title": "Plateformes SaaS", "desc": "Applications multi-locataires avec des flux d'abonnement complexes." },
            { "title": "Passerelles de Paiement", "desc": "Intégration sécurisée avec Stripe, PayPal, et plus encore." },
            { "title": "Tableaux de Bord en Temps Réel", "desc": "Surveillance en direct utilisant Laravel Echo et Pusher." }
        ]
    },
    "php": {
        "heroSubtitle": "Recruter des Développeurs PHP",
        "heroTitle": "Ingénierie Serveur Polyvalente",
        "heroDesc": "Exploitez la puissance du langage qui fait tourner 80% du web. Nos experts PHP fournissent tout, des scripts légers aux backends d'entreprise massifs.",
        "fleetTitle": "Excellence Backend Fiable",
        "fleetDesc": "Nous fournissons une expertise PHP de base pour gérer les environnements à fort trafic et le traitement de données complexes.",
        "strengths": [
            { "title": "PHP 8.x Moderne", "desc": "Utilisation de JIT, des types d'union et des améliorations de performance." },
            { "title": "Optimisation de Base de Données", "desc": "Réglage expert pour MySQL, PostgreSQL, et MariaDB." },
            { "title": "Migration de l'Existant", "desc": "Transition de l'ancien code procédural vers l'OOP moderne." }
        ],
        "experience": [
            { "title": "E-commerce Personnalisé", "desc": "Expériences d'achat sur mesure pour des niches uniques." },
            { "title": "Plateformes de Contenu", "desc": "Portails d'actualités et de médias à fort trafic avec mise en cache." },
            { "title": "Systèmes Financiers", "desc": "Moteurs de grand livre et de comptabilité sécurisés avec PHP." }
        ]
    },
    "react": {
        "heroSubtitle": "Recruter des Développeurs React",
        "heroTitle": "Construire des Apps Web Modernes Rapides et Évolutives",
        "heroDesc": "Recrutez des développeurs React.js spécialisés qui ne se contentent pas d'écrire du code, mais architecturent des expériences numériques immersives utilisant les dernières normes frontend.",
        "fleetTitle": "Prêt à Donner Vie à Votre Vision avec React ?",
        "fleetDesc": "Obtenez une consultation technique complète et une feuille de route de développement sous 24 heures. Sans engagement.",
        "strengths": [
            { "title": "Hooks et Composition", "desc": "Construction de composants UI hautement réutilisables et performants." },
            { "title": "Gestion d'État", "desc": "Manipulation de données complexes avec Redux, Zustand, ou Context." },
            { "title": "Réglage de Performance", "desc": "Virtualisation, fractionnement de code et rendu optimisé." }
        ],
        "experience": [
            { "title": "Apps Monopages (SPA)", "desc": "Expériences web ultra-rapides, comparables au bureau." },
            { "title": "Tableaux de Bord Interactifs", "desc": "Visualisation des données en temps réel et panneaux d'administration." },
            { "title": "Plateformes Sociales", "desc": "Applications communautaires et de réseautage évolutives." }
        ]
    }
};

function update(path, isFr) {
    console.log(`Processing ${path}...`);
    let raw = fs.readFileSync(path, 'utf8');
    let data;
    try {
        data = JSON.parse(raw);
    } catch (e) {
        console.error(`Error parsing ${path}:`, e.message);
        return;
    }
    
    data.workforce_pages = isFr ? workforcePagesFr : workforcePagesEn;
    data.hire_pages = isFr ? hirePagesFr : hirePagesEn;
    
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
    console.log(`Success: ${path}`);
}

update(enPath, false);
update(frPath, true);
