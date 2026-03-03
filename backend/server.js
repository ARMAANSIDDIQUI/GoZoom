require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const enquiryRoutes = require('./routes/enquiryRoutes');
const blogRoutes = require('./routes/blogRoutes');

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static compiled images for blogs
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/blogs', blogRoutes);

// PORT 5001 as specified by memory
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
