const Testimonial = require('../models/Testimonial');

// Get all recent/active testimonials (for public site)
const getPublicTestimonials = async (req, res) => {
    try {
        const query = { isActive: true };
        const limitParam = parseInt(req.query.limit, 10);

        // Find, sort by newest
        let queryBuilder = Testimonial.find(query).sort({ createdAt: -1 });
        if (limitParam && limitParam > 0) {
            queryBuilder = queryBuilder.limit(limitParam);
        }

        const testimonials = await queryBuilder;
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching testimonials', error: error.message });
    }
}

// Get all testimonials regardless of status (for Admin Dashboard)
const getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching testimonials', error: error.message });
    }
}

// Upload/Create new testimonial
const createTestimonial = async (req, res) => {
    try {
        const { authorName, authorRole, content, rating, isActive } = req.body;
        let avatar = req.file ? `/uploads/testimonials/${req.file.filename}` : undefined;

        const newTestimonial = new Testimonial({
            authorName,
            authorRole,
            content,
            rating,
            avatar,
            isActive: isActive !== undefined ? isActive : true
        });

        const savedTestimonial = await newTestimonial.save();
        res.status(201).json(savedTestimonial);
    } catch (error) {
        res.status(500).json({ message: 'Error creating testimonial', error: error.message });
    }
}

// Delete testimonial
const deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

        if (!deletedTestimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }
        res.status(200).json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting testimonial', error: error.message });
    }
}

// Toggle isActive status
const toggleTestimonialStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const testimonial = await Testimonial.findById(id);

        if (!testimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }

        testimonial.isActive = !testimonial.isActive;
        await testimonial.save();
        res.status(200).json(testimonial);
    } catch (error) {
        res.status(500).json({ message: 'Error toggling testimonial status', error: error.message });
    }
}


module.exports = {
    getPublicTestimonials,
    getAllTestimonials,
    createTestimonial,
    deleteTestimonial,
    toggleTestimonialStatus
}
