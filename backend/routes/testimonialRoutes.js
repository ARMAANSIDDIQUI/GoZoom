const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const {
    getPublicTestimonials,
    getAllTestimonials,
    createTestimonial,
    deleteTestimonial,
    toggleTestimonialStatus
} = require('../controllers/testimonialController');

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '..', 'uploads', 'testimonials');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for testimonial avatars
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, 'testimonial-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png|webp/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images Only!');
        }
    }
});

// Public routes
router.get('/', getPublicTestimonials);

// Admin routes
router.get('/all', getAllTestimonials);
router.post('/', upload.single('avatar'), createTestimonial);
router.delete('/:id', deleteTestimonial);
router.put('/:id/toggle', toggleTestimonialStatus);

module.exports = router;
