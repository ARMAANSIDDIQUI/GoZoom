const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    title_fr: { type: String },
    introduction: { type: String, required: true },
    introduction_fr: { type: String },
    heading1: { type: String },
    heading1_fr: { type: String },
    paragraph1: { type: String },
    paragraph1_fr: { type: String },
    heading2: { type: String },
    heading2_fr: { type: String },
    paragraph2: { type: String },
    paragraph2_fr: { type: String },
    heading3: { type: String },
    heading3_fr: { type: String },
    paragraph3: { type: String },
    paragraph3_fr: { type: String },
    heading4: { type: String },
    heading4_fr: { type: String },
    paragraph4: { type: String },
    paragraph4_fr: { type: String },
    heading5: { type: String },
    heading5_fr: { type: String },
    paragraph5: { type: String },
    paragraph5_fr: { type: String },
    conclusion: { type: String, required: true },
    conclusion_fr: { type: String },
    image_filename: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);
