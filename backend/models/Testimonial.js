const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true,
    },
    authorRole: {
        type: String,
        required: false, // "CEO at Acme Corp"
    },
    content: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false, // Optional image path
    },
    rating: {
        type: Number,
        required: false,
        min: 1,
        max: 5,
        default: 5
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
