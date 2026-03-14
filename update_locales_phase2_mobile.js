const fs = require('fs');

const enPath = 'frontend/src/locales/en/translation.json';
const frPath = 'frontend/src/locales/fr/translation.json';

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const frData = JSON.parse(fs.readFileSync(frPath, 'utf8'));

// MOBILE APP DEV
enData.mobile_app_page = {
    hero: { subtitle: 'Mobile Development', title1: 'Top Mobile App Development', title2: 'Company', desc: 'Crafting secure, dynamic solutions for iOS, Android, and Cross-Platform, ensuring robustness and performance.', stats: { u: 'Users', f: 'Featured', p: 'Published' }, buttons: { talk: 'Talk to Our Expert', know: 'Know More' } },
    about: { subtitle: 'We Are Gozoom Technologies', title1: 'Award', title2: 'Winning App Development Company', p1: '#1 Mobile App Company, Awarded for its Top Features/Editor Apps Delivered.', p2: 'Gozoom Technologies is a leading global player in Web, App, and Digital Marketing services. Specializing in Web Design, App Development, Digital Marketing, Product Design, and Cloud Services, we prioritize affordability while delivering top-quality solutions.', stats: {p: 'Projects Delivered', c: 'Enterprise Clients', t: 'Expert Team', y: 'Success Years'} },
    services: { subtitle: 'Our Services', hire: { title1: 'Hire World-Class', title2: 'Mobile Engineers', button: 'Hire Now' }, items: [
        {title: 'Native iOS Apps', desc: 'Secure, high-performance apps built specifically for Apple devices using Swift and Objective-C.'},
        {title: 'Native Android Apps', desc: 'Robust applications designed to dominate the Google Play Store, utilizing Kotlin and Java.'},
        {title: 'Cross-Platform Apps', desc: 'Write once, deploy anywhere. We build efficient React Native and Flutter apps that look native.'},
        {title: 'IoT Mobile Interfaces', desc: 'Applications designed to communicate seamlessly with smart home devices and industrial sensors.'},
        {title: 'Enterprise Apps', desc: 'Internal communication tools, field service apps, and mobile ERP integrations for your workforce.'},
        {title: 'App Maintenance', desc: 'Ongoing support, performance tuning, and immediate bug fixes to ensure 99.99% uptime.'}
    ] },
    why_us: { subtitle: 'Why Us', title: 'Why Partner With Us?', items: [
        {title: 'Uncompromising Security', desc: 'We implement bank-grade encryption and secure authentication flows, protecting your user data against all vectors.'},
        {title: 'Lightning Fast Time-to-Market', desc: 'Our agile methodologies and deep talent pool allow us to drastically cut development timelines without sacrificing quality.'},
        {title: 'Perfect App Store Optimization', desc: 'We don’t just build apps; we help you launch them. We guide you through the strict Apple and Google publishing review loops.'},
        {title: 'Constant Reliability', desc: 'Through rigorous automated testing (unit, UI, integration), we ensure your app performs flawlessly before it ever reaches a user.'}
    ] },
    tech_stack: { subtitle: 'Tech Stack', title1: 'Technologies', title2: 'We Work With' }
};

frData.mobile_app_page = {
    hero: { subtitle: 'Développement Mobile', title1: 'Meilleure Société de Développement', title2: 'd'Applications', desc: 'Création de solutions sécurisées et dynamiques pour iOS, Android et multiplateformes, garantissant robustesse et performances.', stats: { u: 'Utilisateurs', f: 'En vedette', p: 'Publié' }, buttons: { talk: 'Parlez à Notre Expert', know: 'Savoir Plus' } },
    about: { subtitle: 'Nous Sommes Gozoom Technologies', title1: 'Société de Développement', title2: 'Primée', p1: 'Société n°1 d'applications mobiles, récompensée pour ses meilleures fonctionnalités et applications livrées.', p2: 'Gozoom Technologies est un acteur mondial de premier plan dans les services Web, App et Marketing Digital. Spécialisés dans la conception Web, le développement d'applications et les services cloud, nous privilégions l'accessibilité tout en fournissant des solutions de qualité supérieure.', stats: {p: 'Projets Livrés', c: 'Clients Entreprises', t: 'Équipe d'Experts', y: 'Années de Succès'} },
    services: { subtitle: 'Nos Services', hire: { title1: 'Embauchez des Ingénieurs Mobiles', title2: 'de Classe Mondiale', button: 'Embaucher' }, items: [
        {title: 'Applications iOS Natives', desc: 'Des applications sécurisées et performantes créées spécifiquement pour les appareils Apple en utilisant Swift et Objective-C.'},
        {title: 'Applications Android Natives', desc: 'Des applications robustes conçues pour dominer le Google Play Store, utilisant Kotlin et Java.'},
        {title: 'Applications Multiplateformes', desc: 'Écrivez une fois, déployez partout. Nous construisons des applications React Native et Flutter efficaces.'},
        {title: 'Interfaces Mobiles IoT', desc: 'Des applications conçues pour communiquer avec des appareils domestiques intelligents et des capteurs industriels.'},
        {title: 'Applications d'Entreprise', desc: 'Outils de communication interne, applications de service sur le terrain et intégrations ERP mobiles.'},
        {title: 'Maintenance d'Applications', desc: 'Support continu, optimisation des performances et corrections de bugs immédiates pour garantir une disponibilité de 99,99%.'}
    ] },
    why_us: { subtitle: 'Pourquoi Nous', title: 'Pourquoi S'Associer à Nous ?', items: [
        {title: 'Sécurité Intransigeante', desc: 'Nous mettons en œuvre un cryptage de niveau bancaire et des flux d'authentification sécurisés, protégeant vos données.'},
        {title: 'Mise sur le Marché Ultra-rapide', desc: 'Nos méthodologies agiles nous permettent de réduire considérablement les délais de développement sans sacrifier la qualité.'},
        {title: 'Optimisation Parfaite de l'App Store', desc: 'Nous ne nous contentons pas de créer des applications ; nous vous aidons à les lancer sur l'App Store et Google Play.'},
        {title: 'Fiabilité Constante', desc: 'Grâce à des tests automatisés rigoureux (unitaires, UI, intégration), nous garantissons que votre application fonctionne parfaitement.'}
    ] },
    tech_stack: { subtitle: 'Pile Technologique', title1: 'Technologies', title2: 'Avec Lesquelles Nous Travaillons' }
};

// ANDROID DEV
enData.android_dev_page = {
    hero: { subtitle: 'Android Development', title1: 'Leading Android App Development', title2: 'Experts', desc: 'Build powerful, native Android experiences that engage users and drive business growth through innovative engineering.', buttons: { enquire: 'Enquire Now', learn: 'Learn More' } },
    approach: { subtitle: 'Our Approach', title1: 'Assisting Businesses in', title2: 'Transforming Ideas', title3: 'into Amazing Android Experiences.', p1: 'Java is one of the most prominent and essential programming languages, fueling a significant portion of the mobile app ecosystem. With millions of apps built using Java, it stands as the preferred choice for feature-rich Android app development.', p2: 'Our team of experienced Android application developers deliver stable and efficient code that empowers clients worldwide. Collaborating with GoZooms ensures access to top-notch, tailored, and innovative Android app solutions. Leveraging a refined process honed over years of experience, we minimize development time and costs while maximizing quality.' },
    expertise: { subtitle: 'Expertise', title1: 'Our Android Team', title2: 'Specializes In...', items: [
        {title: 'Native Android Performance', desc: 'Crafting apps in Kotlin to squeeze out every drop of performance from Android hardware without cross-platform lag.'},
        {title: 'Android TV & Wearables', desc: 'Extending your brand’s reach by deploying optimized interfaces for Wear OS devices, smartwatches, and Android TV.'},
        {title: 'Legacy App Modernization', desc: 'Migrating outdated Java codebases safely to modern Kotlin architectures featuring Coroutines and Jetpack Compose.'},
        {title: 'AR/VR Integration', desc: 'Utilizing ARCore to build deeply immersive augmented reality experiences for retail, education, and gaming apps.'},
        {title: 'Machine Learning On-Device', desc: 'Integrating TensorFlow Lite to empower your app with image recognition and NLP directly on the user’s phone.'},
        {title: 'Enterprise Mobility', desc: 'Secure, MDM-compliant internal applications designed exclusively for your specialized corporate workforce.'}
    ] },
    why_us: { subtitle: 'Why Choose Us', title1: 'Why You Should Work with Our', title2: 'Android Experts', items: [
        {title: 'Jetpack Compose Mastery', desc: 'We utilize Modern UI toolkits to drastically cut down iteration speed, providing buttery smooth, reactive user interfaces faster than ever before.'},
        {title: 'Google Play Store Specialists', desc: 'We handle the entire publishing pipeline for you, ensuring your application strictly adheres to the newest Google developer policies and metadata rules.'},
        {title: 'Automated CI/CD Pipelines', desc: 'Using tools like Fastlane and GitHub Actions, we ship daily builds to your testing teams ensuring rapid feedback loops.'},
        {title: 'Ongoing Retainer Support', desc: 'Android OS updates can break apps overnight. We offer SLA-backed maintenance to ensure your app is instantly compatible with new OS drops.'}
    ], ask: { title1: 'Ask our Android Experts', title2: 'about their services today!', button: 'Get Started' } }
};

frData.android_dev_page = {
    hero: { subtitle: 'Développement Android', title1: 'Experts en Développement d'Applications', title2: 'Android', desc: 'Créez des expériences Android natives et puissantes qui engagent les utilisateurs et stimulent la croissance des entreprises grâce à une ingénierie innovante.', buttons: { enquire: 'Se Renseigner', learn: 'En Savoir Plus' } },
    approach: { subtitle: 'Notre Approche', title1: 'Aider les Entreprises à', title2: 'Transformer des Idées', title3: 'en d'Incroyables Expériences Android.', p1: 'Java est l'un des langages de programmation les plus importants, alimentant une part importante de l'écosystème des applications mobiles. Avec des millions d'applications créées à l'aide de Java, il reste le choix préféré.', p2: 'Notre équipe de développeurs d'applications Android expérimentés fournit un code stable et efficace qui donne les moyens aux clients du monde entier. La collaboration avec GoZooms garantit l'accès à des solutions sur mesure et innovantes.' },
    expertise: { subtitle: 'Expertise', title1: 'Notre Équipe Android', title2: 'Se Spécialise Dans...', items: [
        {title: 'Performance Android Native', desc: 'Création d'applications en Kotlin pour tirer le meilleur parti des performances du matériel Android sans décalage multiplateforme.'},
        {title: 'Android TV & Wearables', desc: 'Extension de la portée de votre marque en déployant des interfaces optimisées pour les appareils Wear OS, les montres intelligentes et Android TV.'},
        {title: 'Modernisation d'Applications', desc: 'Migration sécurisée d'anciennes bases de code Java vers des architectures Kotlin modernes avec Coroutines et Jetpack Compose.'},
        {title: 'Intégration AR/VR', desc: 'Utilisation d'ARCore pour créer des expériences de réalité augmentée profondément immersives pour le commerce de détail.'},
        {title: 'Machine Learning Embarqué', desc: 'Intégration de TensorFlow Lite pour doter votre application de la reconnaissance d'images et de la PNL directement sur le téléphone.'},
        {title: 'Mobilité d'Entreprise', desc: 'Applications internes sécurisées, conformes MDM, conçues exclusivement pour votre personnel spécialisé.'}
    ] },
    why_us: { subtitle: 'Pourquoi Nous Choisir', title1: 'Pourquoi Devriez-vous Travailler avec Nos', title2: 'Experts Android', items: [
        {title: 'Maîtrise de Jetpack Compose', desc: 'Nous utilisons des boîtes à outils d'interface utilisateur modernes pour réduire considérablement la vitesse d'itération, offrant des interfaces réactives et fluides.'},
        {title: 'Spécialistes du Google Play Store', desc: 'Nous gérons l'intégralité du pipeline de publication pour vous, en veillant à ce que votre application respecte strictement les dernières règles.'},
        {title: 'Pipelines CI/CD Automatisés', desc: 'En utilisant des outils tels que Fastlane et GitHub Actions, nous expédions des builds quotidiens à vos équipes de test.'},
        {title: 'Support Continu', desc: 'Les mises à jour du système d'exploitation Android peuvent interrompre les applications du jour au lendemain. Nous offrons une maintenance garantie par SLA.'}
    ], ask: { title1: 'Demandez à nos Experts Android', title2: 'sur leurs services dès aujourd'hui !', button: 'Commencer' } }
};

// IOS DEV
enData.ios_dev_page = {
    hero: { subtitle: 'iOS Development', title1: 'Get iOS Expert for', title2: 'Enterprises', desc: 'Our expert iOS developers help you build custom, scalable, and secure applications that deliver premium user experiences.', buttons: { enquire: 'Enquire Now', about: 'About Us' } },
    support: { subtitle: 'iOS Development', title1: 'We Provide Full', title2: 'iOS App', title3: 'Development Support', p1: 'Streamline iOS app development with Swift, a versatile and intuitive programming language. Swift's syntax simplifies coding tasks, from UI design to backend functionality, enhancing app performance and user experience.', p2: 'At GoZooms, we focus on elevating your digital presence with comprehensive iOS app development services. Our seasoned team leverages Swift, Apple's powerful programming language, to craft cutting-edge mobile solutions tailored to your business objectives. From concept ideation to app store deployment, we guide you through every step of the development process.' },
    capabilities: { subtitle: 'Expertise', title1: 'Our iOS Development', title2: 'Capabilities', items: [
        {title: 'iPhone App Development', desc: 'Custom applications engineered from the ground up to utilize the full capabilities of modern iPhones and iOS features.'},
        {title: 'iPad App Development', desc: 'Tablet-optimized interfaces that take advantage of the larger screen real-estate for productivity and media consumption.'},
        {title: 'Apple Watch Apps', desc: 'Glanceable, highly-efficient watchOS companion applications for fitness, notifications, and rapid interactions.'},
        {title: 'Apple TV (tvOS) Apps', desc: 'Immersive media streaming and gaming applications designed specifically for the living room experience.'},
        {title: 'iOS UI/UX Design', desc: 'Human Interface Guidelines (HIG) compliant designs that feel natural, premium, and inherently Apple.'},
        {title: 'App Store Deployment', desc: 'End-to-end assistance slicing through the red tape of the Apple App Store review process for rapid publishing.'}
    ] },
    hire: { title1: 'Hire', title2: 'iOS App Developer', title3: 'for All your Needs', p1: 'iOS app developers from GoZoom are known for their ability to come up with unique ideas and develop feature-rich yet customer-centric applications using domain-oriented methodologies.', button: 'Hire iOS Developer' },
    why_us: { subtitle: 'Why Us', title1: 'Why Should You', title2: 'Choose Us?', items: [
        {title: 'Customized Experiences', desc: 'Our specialized iOS development process utilizes the latest stable iOS frameworks (SwiftUI) to provide extended functionality tailored for your business.'},
        {title: 'Satisfaction Guarantee', desc: 'For us, customer satisfaction is of the utmost importance. We will provide you with dedicated iOS developers focused entirely on your project.'},
        {title: 'Uncompromising Security', desc: 'We implement the highest standards of data protection, utilizing Keychain and secure enclaves for enterprise-grade security.'},
        {title: 'Fast Development', desc: 'Having developers that possess strong time management skills is our specialty. You can trust us to efficiently deliver results on time and on budget.'},
        {title: 'Premium Code Quality', desc: 'By strictly adhering to SOLID principles and Clean Architecture, we guarantee that your codebase remains stable and scalable for years.'},
        {title: '18/5 Technical Support', desc: 'Our dedicated support team and strong technical assistance helps your business through any issues via email, Slack, or direct calls.'}
    ] }
};

frData.ios_dev_page = {
    hero: { subtitle: 'Développement iOS', title1: 'Obtenez un Expert iOS pour', title2: 'les Entreprises', desc: 'Nos développeurs experts iOS vous aident à créer des applications personnalisées, évolutives et sécurisées qui offrent des expériences utilisateur premium.', buttons: { enquire: 'Se Renseigner', about: 'À Propos' } },
    support: { subtitle: 'Développement iOS', title1: 'Nous Fournissons un Support Complet pour le', title2: 'Développement d'Applications', title3: 'iOS', p1: 'Simplifiez le développement d'applications iOS avec Swift, un langage de programmation polyvalent et intuitif. La syntaxe de Swift simplifie les tâches de codage, de la conception de l'interface utilisateur aux fonctionnalités backend.', p2: 'Chez GoZooms, nous nous efforçons d'élever votre présence numérique avec des services complets de développement d'applications iOS. Notre équipe chevronnée s'appuie sur Swift pour concevoir des solutions mobiles de pointe adaptées à vos objectifs commerciaux.' },
    capabilities: { subtitle: 'Expertise', title1: 'Nos Capacités de Développement', title2: 'iOS', items: [
        {title: 'Développement d'Applications iPhone', desc: 'Des applications personnalisées conçues de A à Z pour utiliser toutes les capacités des iPhones modernes et des fonctionnalités iOS.'},
        {title: 'Développement d'Applications iPad', desc: 'Interfaces optimisées pour tablette qui tirent parti du plus grand espace d'écran pour la productivité et la consommation de médias.'},
        {title: 'Applications Apple Watch', desc: 'Des applications d'accompagnement watchOS hautement efficaces et consultables d'un coup d'œil pour le fitness, les notifications.'},
        {title: 'Applications Apple TV (tvOS)', desc: 'Des applications de streaming multimédia et de jeu immersives conçues spécifiquement pour l'expérience du salon.'},
        {title: 'Conception UI/UX iOS', desc: 'Conceptions conformes aux directives d'interface humaine (HIG) qui semblent naturelles, de qualité supérieure et intrinsèquement Apple.'},
        {title: 'Déploiement sur l'App Store', desc: 'Assistance de bout en bout pour vous aider à franchir les obstacles du processus d'examen de l'App Store d'Apple.'}
    ] },
    hire: { title1: 'Embaucher un', title2: 'Développeur d'Applications iOS', title3: 'pour Tous vos Besoins', p1: 'Les développeurs d'applications iOS de GoZoom sont connus pour leur capacité à trouver des idées uniques et à développer des applications riches en fonctionnalités mais centrées sur le client.', button: 'Embaucher un Développeur iOS' },
    why_us: { subtitle: 'Pourquoi Nous', title1: 'Pourquoi Devriez-vous', title2: 'Nous Choisir ?', items: [
        {title: 'Expériences Personnalisées', desc: 'Notre processus de développement iOS spécialisé utilise les derniers frameworks iOS stables (SwiftUI) pour fournir des fonctionnalités étendues.'},
        {title: 'Garantie de Satisfaction', desc: 'Pour nous, la satisfaction du client est de la plus haute importance. Nous vous fournirons des développeurs iOS dédiés concentrés sur votre projet.'},
        {title: 'Sécurité Intransigeante', desc: 'Nous mettons en œuvre les normes les plus élevées de protection des données, en utilisant Keychain et des enclaves sécurisées.'},
        {title: 'Développement Rapide', desc: 'Avoir des développeurs qui possèdent de solides compétences en gestion du temps est notre spécialité.'},
        {title: 'Qualité de Code Premium', desc: 'En adhérant strictement aux principes SOLID et à Clean Architecture, nous garantissons que votre base de code reste stable.'},
        {title: 'Support Technique 18/5', desc: 'Notre équipe d'assistance dédiée aide votre entreprise à résoudre tout problème par e-mail, Slack ou par des appels directs.'}
    ] }
};

// FLUTTER DEV
enData.flutter_page = {
    hero: { subtitle: 'UI Toolkit by Google', title1: 'Flutter App', title2: 'Development', desc: 'Create natively compiled, visually stunning applications for mobile, web, and desktop from a single codebase. Delivering expressive and flexible UI without compromising on speed.', button: 'Hire Flutter Devs' },
    services: { subtitle: 'Our Services', title1: 'What We Build with Flutter', p1: 'From MVP launches to enterprise-scale systems, we harness Dart and Flutter for maximum impact.', items: [
        {title: 'Cross-Platform Apps', desc: 'Reach billions of Android and iOS users simultaneously using custom, feature-rich apps compiled ahead-of-time.'},
        {title: 'Flutter for Web & Desktop', desc: 'Expand your mobile application immediately into progressive web apps (PWA) and macOS, Windows, or Linux clients.'},
        {title: 'Custom Widget Design', desc: 'Building beautiful, highly intricate custom UI widgets matching your specific brand guidelines perfectly.'},
        {title: 'Backend Integration', desc: 'Hooking up scalable Firebase backgrounds, AWS configurations, or custom REST/GraphQL APIs securely.'},
        {title: 'UI/UX Migration', desc: 'Modernizing legacy application interfaces into the blazing fast Flutter render engine.'},
        {title: 'MVP Development', desc: 'Launch start-up ideas reliably and affordably in record time, proving market fit without building twice.'}
    ] },
    why_us: { subtitle: 'Why Us', title1: 'The Power of Flutter Framework', p1: 'At GoZoom, we have embraced Flutter's revolutionary widget-based architecture to bypass native performance bridges, meaning your app looks and feels 100% native while costing significantly less to develop and maintain.', items: [
        'Hot Reload dramatically reduces coding and testing times in Dart',
        'A single codebase that easily deploys to 6 platforms max',
        '60 & 120 FPS performance out of the box using Skia/Impeller',
        'Extensive catalog of highly customizable materialistic & cupertino widgets'
    ] }
};

frData.flutter_page = {
    hero: { subtitle: 'Boîte à outils UI par Google', title1: 'Développement d'Applications', title2: 'Flutter', desc: 'Créez des applications compilées nativement et visuellement époustouflantes pour mobile, web et ordinateur de bureau à partir d'une seule base de code. Fournissant une interface utilisateur expressive et flexible sans compromettre la vitesse.', button: 'Embaucher des Développeurs Flutter' },
    services: { subtitle: 'Nos Services', title1: 'Ce Que Nous Construisons avec Flutter', p1: 'Des lancements MVP aux systèmes à l'échelle de l'entreprise, nous exploitons Dart et Flutter pour un impact maximal.', items: [
        {title: 'Applications Multiplateformes', desc: 'Touchez des milliards d'utilisateurs Android et iOS simultanément en utilisant des applications personnalisées, riches en fonctionnalités et compilées à l'avance.'},
        {title: 'Flutter pour Web et Desktop', desc: 'Développez votre application mobile immédiatement en applications Web progressives (PWA) et clients macOS, Windows ou Linux.'},
        {title: 'Conception de Widgets Personnalisés', desc: 'Création de widgets d'interface utilisateur personnalisés magnifiques et très complexes correspondant parfaitement aux directives de votre marque.'},
        {title: 'Intégration Backend', desc: 'Connexion sécurisée d'arrière-plans Firebase évolutifs, de configurations AWS ou d'API REST/GraphQL personnalisées.'},
        {title: 'Migration UI/UX', desc: 'Modernisation des interfaces d'applications héritées dans le moteur de rendu ultra-rapide de Flutter.'},
        {title: 'Développement MVP', desc: 'Lancez des idées de start-up de manière fiable et abordable en un temps record, prouvant l'adéquation au marché sans construire deux fois.'}
    ] },
    why_us: { subtitle: 'Pourquoi Nous', title1: 'La Puissance du Framework Flutter', p1: 'Chez GoZoom, nous avons adopté l'architecture révolutionnaire basée sur les widgets de Flutter pour contourner les ponts de performances natifs, ce qui signifie que votre application a l'air 100% native tout en coûtant beaucoup moins cher.', items: [
        'Hot Reload réduit considérablement les temps de codage et de test dans Dart',
        'Une seule base de code qui se déploie facilement sur 6 plates-formes max',
        'Performances de 60 et 120 FPS prêtes à l'emploi en utilisant Skia/Impeller',
        'Vaste catalogue de widgets matérialistes et cupertino hautement personnalisables'
    ] }
};

// SWIFT DEV
enData.swift_page = {
    hero: { subtitle: 'Apple Ecosystem Mastery', title1: 'Swift iOS', title2: 'Development', desc: 'Build powerful, lightning-fast native applications for iOS, macOS, watchOS, and tvOS using Apple's modern Swift programming language and SwiftUI.', button: 'Start Exploring Swift' },
    services: { subtitle: 'Our Services', title1: 'What We Build with Swift', p1: 'From iPhone apps to comprehensive enterprise systems across the Apple ecosystem, we provide end-to-end Swift development.', items: [
        {title: 'Custom iOS Apps', desc: 'Feature-rich, scalable iPhone and iPad applications engineered for maximum performance and stability.'},
        {title: 'UI/UX with SwiftUI', desc: 'Crafting stunning, state-driven interfaces across all Apple platforms faster and more consistently using SwiftUI.'},
        {title: 'watchOS & tvOS', desc: 'Expanding your digital footprint directly to users’ wrists and living rooms through dedicated native Apple experiences.'},
        {title: 'Swift Migration', desc: 'Updating your legacy Objective-C codebases into clean, type-safe, and maintainable Swift architectures.'},
        {title: 'ARKit & CoreML Integration', desc: 'Building next-generation applications utilizing Apple’s native augmented reality and machine learning frameworks.'},
        {title: 'App Store Deployment', desc: 'Navigating the strict Apple App Store review guidelines to guarantee seamless approval and launch.'}
    ] },
    why_us: { subtitle: 'Why Us', title1: 'Why Choose GoZoom for Swift?', p1: 'Modern iOS users demand flawless performance, smooth animations, and adherence to Apple's Human Interface Guidelines. Our native Swift developers ensure your product surpasses these high expectations.', items: [
        'Type-safe language features prevent crashes in production',
        'Maximum hardware performance unmatched by hybrid frameworks',
        'Immediate access to the latest iOS APIs the day they are released',
        'Deep integration with Apple Pay, SiriKit, HealthKit, and passes'
    ] }
};

frData.swift_page = {
    hero: { subtitle: 'Maîtrise de l'Écosystème Apple', title1: 'Développement', title2: 'iOS Swift', desc: 'Créez des applications natives puissantes et ultra-rapides pour iOS, macOS, watchOS et tvOS en utilisant le langage de programmation moderne Swift d'Apple et SwiftUI.', button: 'Commencer à Explorer Swift' },
    services: { subtitle: 'Nos Services', title1: 'Ce Que Nous Construisons avec Swift', p1: 'Des applications iPhone aux systèmes d'entreprise complets à travers l'écosystème Apple, nous fournissons un développement Swift de bout en bout.', items: [
        {title: 'Applications iOS Personnalisées', desc: 'Des applications iPhone et iPad évolutives et riches en fonctionnalités conçues pour des performances et une stabilité maximales.'},
        {title: 'UI/UX avec SwiftUI', desc: 'Création d'interfaces époustouflantes et axées sur l'état sur toutes les plateformes Apple plus rapidement avec SwiftUI.'},
        {title: 'watchOS et tvOS', desc: 'Élargir votre empreinte numérique directement aux poignets et aux salons des utilisateurs grâce à des expériences Apple.'},
        {title: 'Migration vers Swift', desc: 'Mise à jour de vos anciennes bases de code Objective-C vers des architectures Swift propres, sécurisées et maintenables.'},
        {title: 'Intégration ARKit et CoreML', desc: 'Création d'applications de nouvelle génération utilisant les frameworks natifs d'Apple de réalité augmentée et d'apprentissage automatique.'},
        {title: 'Déploiement sur l'App Store', desc: 'Naviguer dans les directives strictes d'examen de l'App Store d'Apple pour garantir une approbation et un lancement transparents.'}
    ] },
    why_us: { subtitle: 'Pourquoi Nous', title1: 'Pourquoi Choisir GoZoom pour Swift ?', p1: 'Les utilisateurs d'iOS modernes exigent des performances impeccables, des animations fluides et le respect des directives. Nos développeurs Swift natifs s'assurent que votre produit dépasse ces attentes.', items: [
        'Les fonctionnalités de langage à typage sécurisé évitent les plantages en production',
        'Performances matérielles maximales inégalées par les frameworks hybrides',
        'Accès immédiat aux dernières API iOS le jour de leur publication',
        'Intégration profonde avec Apple Pay, SiriKit, HealthKit et les laissez-passer'
    ] }
};

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
fs.writeFileSync(frPath, JSON.stringify(frData, null, 2));

console.log('JSON files updated successfully.');
