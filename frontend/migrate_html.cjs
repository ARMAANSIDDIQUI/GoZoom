const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const htmlFilesToReactComponents = [
    { src: '../webpages/mobile-application-development.html', dest: 'src/pages/MobileAppDev.jsx', name: 'MobileAppDev' },
    { src: '../webpages/android-development.html', dest: 'src/pages/AndroidDev.jsx', name: 'AndroidDev' },
    { src: '../webpages/ios-development.html', dest: 'src/pages/IosDev.jsx', name: 'IosDev' },
    { src: '../webpages/chatbot.html', dest: 'src/pages/Chatbot.jsx', name: 'Chatbot' },
    { src: '../webpages/expert-seo-services.html', dest: 'src/pages/SeoServices.jsx', name: 'SeoServices' },
    { src: '../kiosks.html', dest: 'src/pages/Kiosks.jsx', name: 'Kiosks' },
    { src: '../webpages/hire-angular-developer.html', dest: 'src/pages/Angular.jsx', name: 'Angular' },
    { src: '../webpages/hire-react-developer.html', dest: 'src/pages/ReactJs.jsx', name: 'ReactJs' },
    { src: '../webpages/laravel-development-company.html', dest: 'src/pages/Laravel.jsx', name: 'Laravel' },
    { src: '../success.html', dest: 'src/pages/Success.jsx', name: 'Success' },
    { src: '../integration.html', dest: 'src/pages/Integration.jsx', name: 'Integration' },
    { src: '../retail.html', dest: 'src/pages/Retail.jsx', name: 'Retail' },
    { src: '../web-development-services.html', dest: 'src/pages/WebDevelopment.jsx', name: 'WebDevelopment' },
    { src: '../about.html', dest: 'src/pages/About.jsx', name: 'About' },
    { src: '../contact.html', dest: 'src/pages/Contact.jsx', name: 'Contact' }
];

function styleStringToObject(styleString) {
    if (!styleString) return '{}';
    const obj = {};
    styleString.split(';').forEach(rule => {
        if (!rule.trim()) return;
        let [key, val] = rule.split(':');
        if (!key || !val) return;
        key = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        obj[key] = val.trim();
    });
    return JSON.stringify(obj);
}

for (const fileMap of htmlFilesToReactComponents) {
    const srcPath = path.resolve(__dirname, fileMap.src);
    const destPath = path.resolve(__dirname, fileMap.dest);

    if (!fs.existsSync(srcPath)) {
        console.log(`Source not found: ${srcPath}`);
        continue;
    }

    const htmlContent = fs.readFileSync(srcPath, 'utf-8');
    const $ = cheerio.load(htmlContent);

    // Remove header and footer from DOM
    $('header').remove();
    $('footer').remove();
    $('#contact').remove();
    $('noscript').remove();
    $('script').remove();

    // Fix style attributes to React style objects
    $('*[style]').each((i, el) => {
        const styleStr = $(el).attr('style');
        $(el).attr('style', `__STYLE_REPLACE_START__${styleStringToObject(styleStr)}__STYLE_REPLACE_END__`);
    });

    let mainContent = $('body').html();

    // Convert to JSX safely
    mainContent = mainContent.replace(/class=/g, 'className=');
    mainContent = mainContent.replace(/for=/g, 'htmlFor=');
    mainContent = mainContent.replace(/<!-[\s\S]*?-->/g, ''); // Remove HTML comments

    // Convert styles back to objects and FIX HTML ENTITY QUOTES
    mainContent = mainContent.replace(/"__STYLE_REPLACE_START__({.*?})__STYLE_REPLACE_END__"/g, (match, p1) => {
        // Cheerio escapes inner quotes to &quot;, so we must unescape them for the JS object
        const unescapedObj = p1.replace(/&quot;/g, '"');
        return `{${unescapedObj}}`;
    });

    // Make standalone tags self-closing (img, hr, br, input)
    mainContent = mainContent.replace(/<(img|hr|br|input|link|meta)\b([^>]*)>/gi, (match, tag, attrString) => {
        if (attrString.endsWith('/')) return match;
        return `<${tag} ${attrString} />`;
    });

    const jsxComponent = `import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const ${fileMap.name} = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div className="pt-[80px]">
            {/* EXACT MIGRATED CONTENT BEGIN */}
            ${mainContent}
            {/* EXACT MIGRATED CONTENT END */}
        </div>
    );
};

export default ${fileMap.name};
`;

    fs.writeFileSync(destPath, jsxComponent, 'utf-8');
    console.log(`Successfully migrated ${fileMap.src} to ${fileMap.dest}`);
}
