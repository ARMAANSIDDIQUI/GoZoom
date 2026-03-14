const fs = require('fs');

const enPath = 'frontend/src/locales/en/translation.json';
const frPath = 'frontend/src/locales/fr/translation.json';

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const frData = JSON.parse(fs.readFileSync(frPath, 'utf8'));

enData.all_services_page = {
  hero: {
    title1: `Our`,
    title2: `Services`,
    desc: `Comprehensive digital solutions designed to propel your business forward. From AI and Cloud to robust Web Development.`,
    search_label: `Search Services`,
    search_placeholder: `Search services (e.g., cloud, chatbot, design)...`
  },
  categories: {
    no_results: `No services match “{{query}}”. Try another keyword.`,
    explore: `Explore Service`
  },
  cta: {
    title: `Ready to transform your business?`,
    desc: `Let's discuss how our services can align with your strategic goals.`,
    button: `Schedule a Consultation`
  },
  serviceCategories: [
        {
            title: `Cloud & Infrastructure`,
            description: `Scalable, secure, and robust cloud solutions tailored for modern enterprises.`,
            services: [
                { name: `Cloud Services (AWS, Oracle, Google)`, desc: `Comprehensive cloud migration and management.` },
                { name: `Kubernetes & Docker`, desc: `Containerization and orchestration solutions.` },
                { name: `Service Consulting`, desc: `Expert guidance on IT infrastructure and strategy.` }
            ]
        },
        {
            title: `Artificial Intelligence`,
            description: `Cutting-edge AI solutions to automate and innovate your business processes.`,
            services: [
                { name: `AI Powered Applications`, desc: `Smart applications leveraging machine learning.` },
                { name: `Chatbot Development`, desc: `Intelligent conversational agents for customer support.` },
                { name: `AI/Task Automation`, desc: `Streamline operations with smart automation.` },
                { name: `Agentic Development`, desc: `Building autonomous AI agents for complex tasks.` },
                { name: `AI Agent Customization`, desc: `Tailoring AI agents to specific business needs.` },
                { name: `AI Use Cases`, desc: `Explore how AI transforms various industries.` }
            ]
        },
        {
            title: `Web, Mobile & Digital Solutions`,
            description: `High-performance, responsive applications built with the latest technologies.`,
            services: [
                { name: `Full-Stack Web Development`, desc: `End-to-end custom web engineering solutions.` },
                { name: `UI / UX Design`, desc: `Human-centered, conversion-optimized interfaces and design systems.` },
                { name: `Cyber Security`, desc: `Enterprise-grade protection, pen testing, and zero trust architectures.` },
                { name: `Mobile App Development`, desc: `Cross-platform and native mobile apps.` },
                { name: `React Native Apps`, desc: `Cross-platform mobile apps with a single codebase.` },
                { name: `Flutter Apps`, desc: `Blazing fast native interfaces built by Google.` },
                { name: `Swift iOS Apps`, desc: `Premium native Apple experiences built with Swift.` },
                { name: `Android Development`, desc: `Secure and scalable native Android applications.` },
                { name: `iOS Development`, desc: `Premium iOS mobile experiences built with legacy architectures.` },
                { name: `Django Development`, desc: `High-level Python frameworks for robust backends.` },
                { name: `Java Enterprise Apps`, desc: `Highly robust, scalable backend enterprise applications.` },
                { name: `React Development`, desc: `Interactive and fast user interfaces.` },
                { name: `Next.js Development`, desc: `Server-side rendered React applications.` },
                { name: `Angular Development`, desc: `Dynamic single-page applications.` },
                { name: `Laravel Development`, desc: `Robust and secure PHP web applications.` },
                { name: `SEO & Digital Marketing`, desc: `Data-driven strategies to skyrocket your online presence.` },
                { name: `Kiosk Solutions`, desc: `Interactive kiosk software for enhanced customer autonomy.` }
            ]
        }
    ]
};

frData.all_services_page = {
  hero: {
    title1: `Nos`,
    title2: `Services`,
    desc: `Des solutions numériques complètes conçues pour propulser votre entreprise. De l'IA et du Cloud au développement web robuste.`,
    search_label: `Rechercher des Services`,
    search_placeholder: `Rechercher des services (ex: cloud, chatbot, design)...`
  },
  categories: {
    no_results: `Aucun service ne correspond à “{{query}}”. Essayez un autre mot-clé.`,
    explore: `Explorer le Service`
  },
  cta: {
    title: `Prêt à transformer votre entreprise ?`,
    desc: `Discutons de la manière dont nos services peuvent s'aligner sur vos objectifs stratégiques.`,
    button: `Planifier une Consultation`
  },
  serviceCategories: [
        {
            title: `Cloud et Infrastructure`,
            description: `Solutions cloud évolutives, sécurisées et robustes adaptées aux entreprises modernes.`,
            services: [
                { name: `Services Cloud (AWS, Oracle, Google)`, desc: `Migration et gestion complètes du cloud.` },
                { name: `Kubernetes et Docker`, desc: `Solutions de conteneurisation et d'orchestration.` },
                { name: `Conseil en Stratégie`, desc: `Conseils d'experts sur l'infrastructure et la stratégie informatiques.` }
            ]
        },
        {
            title: `Intelligence Artificielle`,
            description: `Des solutions d'IA de pointe pour automatiser et innover vos processus commerciaux.`,
            services: [
                { name: `Applications basées sur l'IA`, desc: `Applications intelligentes tirant parti de l'apprentissage automatique.` },
                { name: `Développement de Chatbot`, desc: `Agents conversationnels intelligents pour le support client.` },
                { name: `Automatisation des Tâches / IA`, desc: `Rationaliser les opérations avec une automatisation intelligente.` },
                { name: `Développement d'Agents`, desc: `Création d'agents IA autonomes pour des tâches complexes.` },
                { name: `Personnalisation d'Agents IA`, desc: `Adaptation des agents IA aux besoins spécifiques de l'entreprise.` },
                { name: `Cas d'Utilisation de l'IA`, desc: `Découvrez comment l'IA transforme diverses industries.` }
            ]
        },
        {
            title: `Web, Mobile et Solutions Numériques`,
            description: `Applications hautement performantes et réactives construites avec les dernières technologies.`,
            services: [
                { name: `Développement Web Full-Stack`, desc: `Solutions d'ingénierie web sur mesure de bout en bout.` },
                { name: `Conception UI / UX`, desc: `Interfaces centrées sur l'humain et optimisées pour la conversion.` },
                { name: `Cybersécurité`, desc: `Protection de niveau entreprise, tests d'intrusion et architectures zero trust.` },
                { name: `Développement d'Applications Mobiles`, desc: `Applications mobiles multiplateformes et natives.` },
                { name: `Applications React Native`, desc: `Applications mobiles multiplateformes avec une seule base de code.` },
                { name: `Applications Flutter`, desc: `Interfaces natives ultra-rapides créées par Google.` },
                { name: `Applications Swift iOS`, desc: `Expériences natives Apple haut de gamme créées avec Swift.` },
                { name: `Développement Android`, desc: `Applications Android natives sécurisées et évolutives.` },
                { name: `Développement iOS`, desc: `Expériences mobiles iOS haut de gamme avec des architectures héritées.` },
                { name: `Développement Django`, desc: `Frameworks Python de haut niveau pour des backends robustes.` },
                { name: `Applications d'Entreprise Java`, desc: `Applications d'entreprise backend très robustes et évolutives.` },
                { name: `Développement React`, desc: `Interfaces utilisateur interactives et rapides.` },
                { name: `Développement Next.js`, desc: `Applications React rendues côté serveur.` },
                { name: `Développement Angular`, desc: `Applications dynamiques à page unique.` },
                { name: `Développement Laravel`, desc: `Applications web PHP robustes et sécurisées.` },
                { name: `SEO & Marketing Numérique`, desc: `Stratégies basées sur les données pour propulser votre présence en ligne.` },
                { name: `Solutions de Kiosque`, desc: `Logiciel de kiosque interactif pour une meilleure autonomie client.` }
            ]
        }
    ]
};

enData.workforce_solutions_page = {
    hero: {
        subtitle: `Comprehensive Talent Strategy`,
        title1: `Workforce`,
        title2: `Solutions`,
        desc: `Empower your organization with our end-to-end workforce solutions. From contingent staffing and direct hire to global payroll and comprehensive vendor management, we optimize how you build and manage your teams.`,
        search_label: `Search solutions`,
        search_placeholder: `Search workforce solutions (e.g., payroll, RPO, sourcing)...`,
        button: `Partner With Us`
    },
    offerings: {
        subtitle: `Our Offerings`,
        title1: `Transform Your`,
        title2: `Workforce Ecosystem`,
        desc: `Discover the tailored solutions we offer to help you acquire, manage, and optimize the talent your business needs to thrive globally.`,
        no_results: `No solutions match “{{query}}”. Try another keyword.`,
        explore: `Explore Solution`
    },
    solutions: [
        { title: `Contingent Staffing`, desc: `GoZoom offers contingent staffing solutions to build and manage a flexible, on-demand workforce seamlessly.` },
        { title: `Direct Hire`, desc: `We carefully screen and handpick the best candidates, matching top talent with the perfect job fit for long-term success.` },
        { title: `Global Payroll & Compliance`, desc: `Trust our EOR/AOR services with seamless invoicing, compliance management, and payroll processing.` },
        { title: `Statement Of Work (SOW)`, desc: `Top-notch services to streamline projects, define scope, outline deliverables, and manage resources on time and budget.` },
        { title: `Nearshore and Offshore`, desc: `Flexible global delivery centers providing access to top talent, ensuring seamless collaboration and cost savings.` },
        { title: `Direct Sourcing`, desc: `Harness our global network to connect directly with the best candidates, eliminating intermediaries and delays.` },
        { title: `Recruitment Process Outsourcing (RPO)`, desc: `We handle every aspect of hiring, from sourcing to onboarding, saving you time and giving access to a larger talent pool.` },
        { title: `Diversity Spend Capture`, desc: `Consolidate workforce expenses to meet diversity goals with advanced data analytics and tailored compliance reporting.` },
        { title: `GCC BOT`, desc: `Our Build-Operate-Transfer (BOT) model helps you establish scalable operations and seamless transitions with reduced risk.` },
        { title: `Master Vendor Program (MVP)`, desc: `A comprehensive solution eliminating the complexity of managing multiple vendors through a single, streamlined partnership.` }
    ]
};

frData.workforce_solutions_page = {
    hero: {
        subtitle: `Stratégie de Talent Complète`,
        title1: `Solutions de`,
        title2: `Main-d'œuvre`,
        desc: `Renforcez votre organisation avec nos solutions de main-d'œuvre de bout en bout. De la dotation en personnel temporaire et de l'embauche directe à la paie mondiale et à la gestion complète des fournisseurs, nous optimisons la façon dont vous construisez et gérez vos équipes.`,
        search_label: `Rechercher des solutions`,
        search_placeholder: `Rechercher des solutions de main-d'œuvre (ex: paie, RPO, sourcing)...`,
        button: `Associez-vous à Nous`
    },
    offerings: {
        subtitle: `Nos Offres`,
        title1: `Transformez Votre`,
        title2: `Écosystème de Main-d'œuvre`,
        desc: `Découvrez les solutions sur mesure que nous proposons pour vous aider à acquérir, gérer et optimiser les talents dont votre entreprise a besoin pour prospérer à l'échelle mondiale.`,
        no_results: `Aucune solution ne correspond à “{{query}}”. Essayez un autre mot-clé.`,
        explore: `Explorer la Solution`
    },
    solutions: [
        { title: `Dotation en Personnel Temporaire`, desc: `GoZoom propose des solutions de dotation en personnel temporaire pour créer et gérer de manière transparente une main-d'œuvre flexible et à la demande.` },
        { title: `Embauche Directe`, desc: `Nous sélectionnons et trions sur le volet les meilleurs candidats, en associant les meilleurs talents à l'emploi parfait pour un succès à long terme.` },
        { title: `Paie Mondiale et Conformité`, desc: `Faites confiance à nos services EOR/AOR avec une facturation, une gestion de la conformité et un traitement de la paie transparents.` },
        { title: `Énoncé des Travaux (SOW)`, desc: `Des services de premier ordre pour rationaliser les projets, définir la portée, définir les livrables et gérer les ressources dans les délais et le budget impartis.` },
        { title: `Nearshore et Offshore`, desc: `Des centres de livraison mondiaux flexibles offrant un accès aux meilleurs talents, garantissant une collaboration transparente et des économies de coûts.` },
        { title: `Sourcing Direct`, desc: `Exploitez notre réseau mondial pour vous connecter directement avec les meilleurs candidats, en éliminant les intermédiaires et les retards.` },
        { title: `Externalisation du Processus de Recrutement (RPO)`, desc: `Nous gérons tous les aspects de l'embauche, du sourcing à l'intégration, ce qui vous fait gagner du temps et vous donne accès à un plus grand vivier de talents.` },
        { title: `Capture des Dépenses de Diversité`, desc: `Consolidez les dépenses de main-d'œuvre pour atteindre les objectifs de diversité avec des analyses de données avancées et des rapports de conformité sur mesure.` },
        { title: `GCC BOT`, desc: `Notre modèle Build-Operate-Transfer (BOT) vous aide à établir des opérations évolutives et des transitions transparentes avec un risque réduit.` },
        { title: `Programme de Fournisseur Principal (MVP)`, desc: `Une solution complète éliminant la complexité de la gestion de plusieurs fournisseurs grâce à un partenariat unique et rationalisé.` }
    ]
};

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
fs.writeFileSync(frPath, JSON.stringify(frData, null, 2));

console.log('JSON files updated successfully.');
