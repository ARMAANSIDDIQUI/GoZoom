const fs = require('fs');

const enFilePath = 'frontend/src/locales/en/translation.json';
const frFilePath = 'frontend/src/locales/fr/translation.json';

const enTranslations = JSON.parse(fs.readFileSync(enFilePath, 'utf-8'));
const frTranslations = JSON.parse(fs.readFileSync(frFilePath, 'utf-8'));

function findMissingKeys(obj1, obj2, prefix = '') {
  let missingKeys = [];

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      const newPrefix = prefix ? `${prefix}.${key}` : key;
      if (typeof obj1[key] === 'object' && obj1[key] !== null && !Array.isArray(obj1[key])) {
        if (obj2.hasOwnProperty(key) && typeof obj2[key] === 'object' && obj2[key] !== null) {
          missingKeys = missingKeys.concat(findMissingKeys(obj1[key], obj2[key], newPrefix));
        } else {
          missingKeys.push(newPrefix);
        }
      } else {
        if (!obj2.hasOwnProperty(key)) {
          missingKeys.push(newPrefix);
        }
      }
    }
  }

  return missingKeys;
}

const missingInFr = findMissingKeys(enTranslations, frTranslations);

console.log('Missing keys in French translation:');
console.log(missingInFr.filter(key => !key.startsWith('admin')).join('\n'));
