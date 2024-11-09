const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('/', blogController.createBlogPost);
router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);
router.put('/:id', blogController.updateBlogPost);
router.delete('/:id', blogController.deleteBlogPost);

module.exports = router;
