const db = require('../config/db');  // This is for connecting to your SQLite database

// Function to create a blog post
const createBlogPost = (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    const query = `INSERT INTO blogs (title, content) VALUES (?, ?)`;
    db.run(query, [title, content], function (err) {
        if (err) {
            return res.status(500).json({ error: "Failed to create blog post", details: err.message });
        }
        res.status(201).json({
            message: "Blog post created successfully",
            blog: { id: this.lastID, title, content },
        });
    });
};


// Function to get all blog posts
const getAllBlogs = (req, res) => {
    const query = 'SELECT * FROM blogs';
    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: "Failed to fetch blogs", details: err.message });
        }
        res.json({ blogs: rows });
    });
};

// Function to get a single blog post by ID
const getBlogById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM blogs WHERE id = ?';
    db.get(query, [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: "Failed to fetch blog post", details: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: "Blog post not found" });
        }
        res.json({ blog: row });
    });
};


// Function to update a blog post
const updateBlogPost = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    const query = 'UPDATE blogs SET title = ?, content = ? WHERE id = ?';
    db.run(query, [title, content, id], function (err) {
        if (err) {
            return res.status(500).json({ error: "Failed to update blog post", details: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: "Blog post not found" });
        }
        res.json({ message: "Blog post updated successfully" });
    });
};


// Function to delete a blog post
const deleteBlogPost = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM blogs WHERE id = ?';
    db.run(query, [id], function (err) {
        if (err) {
            return res.status(500).json({ error: "Failed to delete blog post", details: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: "Blog post not found" });
        }
        res.json({ message: "Blog post deleted successfully" });
    });
};


module.exports = {
    createBlogPost,
    getAllBlogs,
    getBlogById,
    updateBlogPost,
    deleteBlogPost
};
