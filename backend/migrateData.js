require('dotenv').config();
const mongoose = require('mongoose');
const mysql = require('mysql2/promise');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const Blog = require('./models/Blog');
const Enquiry = require('./models/Enquiry'); // Assuming Enquiry model exists

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const migrateData = async () => {
    let mysqlConnection;
    try {
        // 1. Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/gozoom', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Connected to MongoDB');

        // 2. Connect to MySQL (Change credentials as per your local setup)
        mysqlConnection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'gozoomte_form'
        });
        console.log('✅ Connected to MySQL');

        // --- MIIRGATE BLOGS & UPLOAD IMAGES TO CLOUDINARY ---
        console.log('⏳ Migrating Blogs...');
        const [blogs] = await mysqlConnection.execute('SELECT * FROM blogs'); // Adjust table name if needed

        for (const blog of blogs) {
            console.log(`Processing blog: ${blog.title}`);

            let cloudinaryUrl = '';

            // Upload image to Cloudinary if it exists locally
            // Ensure the old images are accessible in a specific path (e.g., old_project/uploads/)
            const oldImagePath = path.join(__dirname, '..', '..', 'old_project_uploads', blog.image_filename); // Update this path!

            if (blog.image_filename && fs.existsSync(oldImagePath)) {
                try {
                    const result = await cloudinary.uploader.upload(oldImagePath, {
                        folder: 'gozoom_blogs',
                    });
                    cloudinaryUrl = result.secure_url;
                    console.log(`  Uploaded image to Cloudinary: ${cloudinaryUrl}`);
                } catch (uploadErr) {
                    console.error(`  ❌ Failed to upload image for blog ${blog.id}:`, uploadErr);
                }
            } else {
                console.warn(`  ⚠️ Image file not found locally for blog ${blog.id}: ${blog.image_filename}`);
            }

            // Check if URL is redundant
            const existingBlog = await Blog.findOne({ title: blog.title });
            if (!existingBlog && blog.title && blog.introduction) { // basic validation
                const newBlog = new Blog({
                    title: blog.title,
                    introduction: blog.introduction,
                    heading1: blog.heading1,
                    paragraph1: blog.paragraph1,
                    heading2: blog.heading2,
                    paragraph2: blog.paragraph2,
                    heading3: blog.heading3,
                    paragraph3: blog.paragraph3,
                    heading4: blog.heading4,
                    paragraph4: blog.paragraph4,
                    heading5: blog.heading5,
                    paragraph5: blog.paragraph5,
                    conclusion: blog.conclusion,
                    image_filename: cloudinaryUrl || blog.image_filename, // Use Cloudinary URL if available
                    date: blog.date || new Date()
                });
                await newBlog.save();
                console.log(`  ✅ Migrated Blog: ${blog.title}`);
            } else {
                console.log(`  ⏭️ Skipped redundant/invalid Blog: ${blog.title}`);
            }
        }

        // --- MIGRATE ENQUIRIES ---
        console.log('\n⏳ Migrating Enquiries...');
        const [enquiries] = await mysqlConnection.execute('SELECT * FROM inquiryform'); // Adjust table name if needed

        for (const req of enquiries) {
            const existingEnquiry = await Enquiry.findOne({ email: req.email, message: req.message });
            if (!existingEnquiry && req.name && req.email) {
                const newEnquiry = new Enquiry({
                    name: req.name,
                    email: req.email,
                    contactNumber: req.phone || req.contact_number, // Adjust based on SQL column
                    solution: req.interested_in || req.solution,
                    message: req.message,
                    createdAt: req.created_at || new Date()
                });
                await newEnquiry.save();
                console.log(`  ✅ Migrated Enquiry from: ${req.email}`);
            } else {
                console.log(`  ⏭️ Skipped redundant/invalid Enquiry from: ${req.email}`);
            }
        }

        console.log('\n🎉 Data Migration Completed Successfully!');

    } catch (error) {
        console.error('❌ Migration Error:', error);
    } finally {
        if (mysqlConnection) await mysqlConnection.end();
        mongoose.connection.close();
        process.exit();
    }
};

migrateData();
