'use client'; 
import { useState } from 'react';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [tags, setTags] = useState('');
    const [status, setStatus] = useState('draft');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Sending a POST request to the backend to create a new blog
        const response = await fetch('http://localhost:3001/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Telling the backend to expect JSON
            },
            body: JSON.stringify({
                title,
                content,
                meta_title: metaTitle,
                meta_description: metaDescription,
                tags,
                status,
            }),
        });

        // Checking the response from the backend
        if (response.ok) {
            alert('Blog post created successfully!');
        } else {
            alert('Failed to create blog post');
        }
    };

    return (
        <div>
            <h1>Create New Blog Post</h1>
            {/* Blog post creation form */}
            <form onSubmit={handleSubmit}>
                {/* Title input */}
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                {/* Content input */}
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                {/* Meta Title input */}
                <input
                    type="text"
                    placeholder="Meta Title"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                />
                {/* Meta Description input */}
                <input
                    type="text"
                    placeholder="Meta Description"
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                />
                {/* Tags input */}
                <input
                    type="text"
                    placeholder="Tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
                {/* Status dropdown */}
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                </select>
                {/* Submit button */}
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}
