// backend/models/Blog.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Blog = sequelize.define('Blog', {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  image_url: DataTypes.STRING,
  video_url: DataTypes.STRING,
  meta_title: DataTypes.STRING,
  meta_description: DataTypes.STRING,
  tags: DataTypes.STRING,
  status: { type: DataTypes.ENUM('draft', 'published'), defaultValue: 'draft' },
});

module.exports = Blog;
