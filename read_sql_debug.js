const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'backend', 'gozoomte_form.sql');
try {
    const buffer = fs.readFileSync(filePath);
    console.log('File size:', buffer.length);
    console.log('First 500 characters:', buffer.toString('utf8', 0, 500));
} catch (err) {
    console.error('Error reading file:', err);
}
