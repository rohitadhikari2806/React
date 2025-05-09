// import React, { useState } from 'react';
// import api from '../api';  // API for making requests
// import { useNavigate } from 'react-router-dom';

// function BlogForm({ onBlogCreated }) {
//   const [form, setForm] = useState({
//     title: '',
//     content: '',
//     image: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       // Send POST request with credentials (cookies)
//       const res = await api.post('/blogs', form, { withCredentials: true });

//       alert(res.data.message);
//       setForm({ title: '', content: '', image: '' });

//       if (onBlogCreated) onBlogCreated(); // Refresh blogs list if needed
//       navigate('/dashboard');  // Navigate to dashboard after blog creation
//     } catch (error) {
//       console.error('Blog creation error:', error);
//       alert('Failed to create blog: ' + (error.response?.data?.message || 'Unknown error'));
//     }
//   };

//   return (
//     <div style={{ marginBottom: '30px' }}>
//       <h3>Add Blog</h3>
//       <input
//         type="text"
//         name="title"
//         placeholder="Title"
//         value={form.title}
//         onChange={handleChange}
//         style={{ display: 'block', marginBottom: '10px' }}
//       />
//       <input
//         type="text"
//         name="image"
//         placeholder="Image URL"
//         value={form.image}
//         onChange={handleChange}
//         style={{ display: 'block', marginBottom: '10px' }}
//       />
//       <textarea
//         name="content"
//         placeholder="Content"
//         value={form.content}
//         onChange={handleChange}
//         style={{ display: 'block', marginBottom: '10px', width: '300px', height: '100px' }}
//       />
//       <button onClick={handleSubmit}>Add Blog</button>
//     </div>
//   );
// }

// export default BlogForm;

import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlogForm({ onBlogCreated }) {
  const [form, setForm] = useState({
    title: '',
    content: '',
    image: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await api.post('/blogs', form, { withCredentials: true });

      alert(res.data.message);
      setForm({ title: '', content: '', image: '' });

      if (onBlogCreated) onBlogCreated();
      navigate('/dashboard');
    } catch (error) {
      console.error('Blog creation error:', error);
      alert('Failed to create blog: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  return (
    <div className="container mt-4 mb-5">
      <div className="card shadow-sm p-4">
        <h3 className="mb-4">Add Blog</h3>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Enter blog title"
            value={form.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            name="image"
            className="form-control"
            placeholder="Enter image URL"
            value={form.image}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            name="content"
            className="form-control"
            placeholder="Write your blog content here"
            value={form.content}
            onChange={handleChange}
            rows="5"
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Add Blog
        </button>
      </div>
    </div>
  );
}

export default BlogForm;
