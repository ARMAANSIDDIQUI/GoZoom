const fs = require('fs');

const enPath = 'c:/Users/dell/Downloads/gozoom-main/frontend/src/locales/en/translation.json';
const frPath = 'c:/Users/dell/Downloads/gozoom-main/frontend/src/locales/fr/translation.json';

const workforceCommonEn = {
    "core_benefits": "Core Benefits",
    "case_study": "Case Study",
    "request_service": "Request Service",
    "discuss_project": "Discuss Your Project"
};

const workforceCommonFr = {
    "core_benefits": "Avantages Principaux",
    "case_study": "Étude de Cas",
    "request_service": "Demander le Service",
    "discuss_project": "Discuter de Votre Projet"
};

const hireCommonEn = {
    "enquire_now": "Enquire Now",
    "our_capabilities": "Our Capabilities",
    "enterprise_platforms": "Enterprise Platforms",
    "high_octane_php": "High-Octane PHP",
    "pixel_perfect_engineering": "Pixel-Perfect Engineering",
    "lightweight_dom_mastery": "Lightweight DOM Mastery",
    "artisans_choice": "The Artisan's Choice",
    "reliable_enterprise_solutions": "Reliable Enterprise Solutions",
    "elite_react_talent": "Elite React Talent",
    "core_strengths": "Core Strengths",
    "submit_requirements": "Submit Your Requirements",
    "project_brief": "Project Brief",
    "how_can_we_help": "How can we help?",
    "dispatch_enquiry": "Dispatch Enquiry",
    "transmission_received": "Transmission Received",
    "architect_contact": "Our senior lead architect will be in touch within 24 hours.",
    "start_consultation": "Start Consultation",
    "direct_lead_comm": "Direct Lead Dev Communication",
    "brief_desc": "Briefly describe your project or the talent gaps you're looking to fill.",
    "name_label": "Name *",
    "email_label": "Email *",
    "phone_label": "Contact Number *",
    "message_label": "How can we help?"
};

const hireCommonFr = {
    "enquire_now": "S'enquérir Maintenant",
    "our_capabilities": "Nos Capacités",
    "enterprise_platforms": "Plateformes d'Entreprise",
    "high_octane_php": "PHP à Haute Performance",
    "pixel_perfect_engineering": "Ingénierie au Pixel Près",
    "lightweight_dom_mastery": "Maîtrise du DOM Léger",
    "artisans_choice": "Le Choix de l'Artisan",
    "reliable_enterprise_solutions": "Solutions d'Entreprise Fiables",
    "elite_react_talent": "Talent React d'Élite",
    "core_strengths": "Points Forts",
    "submit_requirements": "Soumettez Vos Besoins",
    "project_brief": "Résumé du Projet",
    "how_can_we_help": "Comment pouvons-nous vous aider ?",
    "dispatch_enquiry": "Envoyer la Demande",
    "transmission_received": "Transmission Reçue",
    "architect_contact": "Notre architecte principal vous contactera dans les 24 heures.",
    "start_consultation": "Démarrer la Consultation",
    "direct_lead_comm": "Communication Directe avec le Développeur Principal",
    "brief_desc": "Décrivez brièvement votre projet ou les lacunes en talents que vous cherchez à combler.",
    "name_label": "Nom *",
    "email_label": "E-mail *",
    "phone_label": "Numéro de Contact *",
    "message_label": "Comment pouvons-nous vous aider ?"
};

function update(path, isFr) {
    console.log(`Processing ${path}...`);
    let raw = fs.readFileSync(path, 'utf8');
    // Basic fix for the known syntax error
    raw = raw.replace(/\}\s*\"workforce_common\"/g, '}, "workforce_common"');
    
    let data;
    try {
        data = JSON.parse(raw);
    } catch (e) {
        console.error(`Error parsing ${path}:`, e.message);
        return;
    }
    
    data.workforce_common = isFr ? workforceCommonFr : workforceCommonEn;
    data.hire_common = isFr ? hireCommonFr : hireCommonEn;
    
    // I will add the PAGES content in a separate step or a more robust script
    // but for the common blocks and fixing the syntax, this is perfect.
    
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
    console.log(`Success: ${path}`);
}

update(enPath, false);
update(frPath, true);
