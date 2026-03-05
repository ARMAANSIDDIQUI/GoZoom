const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const outputFile = path.join(__dirname, 'frontend_data.json');
const result = {};

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const relativePath = path.relative(srcDir, fullPath);
            const componentName = path.basename(file, '.jsx');
            const category = path.dirname(relativePath); // pages or components

            if (!result[category]) {
                result[category] = {};
            }
            if (!result[category][componentName]) {
                result[category][componentName] = {};
            }

            // Extract text between JSX tags
            // E.g., > Some text <
            const textRegex = />([^<{}]+)</g;
            let matches;
            let counter = 1;

            while ((matches = textRegex.exec(content)) !== null) {
                const text = matches[1].trim();
                // Filter out empty strings, pure numbers, or common small symbols
                if (text && text.length > 1 && !/^[0-9\W]+$/.test(text)) {
                    // Create a reasonable key from the text (first 3-4 words)
                    let key = text.split(/[\s\W]+/)
                        .filter(w => w.length > 0)
                        .slice(0, 4)
                        .join('_')
                        .toLowerCase();

                    if (!key) {
                        key = `text_${counter}`;
                    }

                    // Deduplicate keys
                    let finalKey = key;
                    let dupCounter = 1;
                    while (result[category][componentName][finalKey]) {
                        if (result[category][componentName][finalKey] === text) {
                            // Same text already exists, skip
                            break;
                        }
                        finalKey = `${key}_${dupCounter}`;
                        dupCounter++;
                    }

                    if (result[category][componentName][finalKey] !== text) {
                        result[category][componentName][finalKey] = text;
                        counter++;
                    }
                }
            }
        }
    }
}

processDir(srcDir);
fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));
console.log(`Successfully extracted data to ${outputFile}`);
