const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    introduction: { type: String, required: true },
    heading1: { type: String },
    paragraph1: { type: String },
    heading2: { type: String },
    paragraph2: { type: String },
    heading3: { type: String },
    paragraph3: { type: String },
    heading4: { type: String },
    paragraph4: { type: String },
    heading5: { type: String },
    paragraph5: { type: String },
    conclusion: { type: String, required: true },
    image_filename: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);
