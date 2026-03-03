const express = require('express');
const router = express.Router();
const { createBlog, getBlogs, getBlogById, deleteBlog } = require('../controllers/blogController');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'gozoom_blogs',
        allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
    }
});

const upload = multer({ storage });

router.route('/')
    .get(getBlogs)
    .post(upload.single('blog_image'), createBlog);

router.route('/:id')
    .get(getBlogById)
    .delete(deleteBlog);

module.exports = router;
