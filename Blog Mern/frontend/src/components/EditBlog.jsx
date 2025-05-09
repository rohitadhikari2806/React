// import React, { useEffect, useState } from 'react';
// import api from '../api';
// import { useNavigate, useParams } from 'react-router-dom';

// function EditBlog() {
//   const [form, setForm] = useState({
//     title: '',
//     content: '',
//     image: ''
//   });
//   const { id } = useParams();  // Get the blog ID from URL
//   const navigate = useNavigate();

//   // Fetch the blog data
//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const res = await api.get(`/blogs/${id}`);
//         setForm(res.data);
//       } catch (error) {
//         console.error('Error fetching blog for edit:', error);
//         alert('Failed to fetch blog for editing');
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.put(`/blogs/${id}`, form);
//       alert('Blog updated successfully');
//       navigate('/dashboard');  // Navigate back to the dashboard after update
//     } catch (error) {
//       console.error('Error updating blog:', error);
//       alert('Failed to update blog');
//     }
//   };

//   return (
//     <div style={{ margin: '50px' }}>
//       <h2>Edit Blog</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           value={form.title}
//           onChange={handleChange}
//           placeholder="Title"
//           style={{ marginBottom: '10px' }}
//         />
//         <input
//           type="text"
//           name="image"
//           value={form.image}
//           onChange={handleChange}
//           placeholder="Image URL"
//           style={{ marginBottom: '10px' }}
//         />
//         <textarea
//           name="content"
//           value={form.content}
//           onChange={handleChange}
//           placeholder="Content"
//           style={{ marginBottom: '10px', width: '300px', height: '100px' }}
//         />
//         <button type="submit">Update Blog</button>
//       </form>
//     </div>
//   );
// }

// export default EditBlog;

import React, { useEffect, useState } from 'react';
import api from '../api';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditBlog() {
  const [form, setForm] = useState({
    title: '',
    content: '',
    image: ''
  });
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get(`/blogs/${id}`);
        setForm(res.data);
      } catch (error) {
        console.error('Error fetching blog for edit:', error);
        setError('Failed to fetch blog for editing');
      } finally {
        setLoading(false);  // Set loading to false once the fetch is done
      }
    };

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/blogs/${id}`, form);
      alert('Blog updated successfully');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating blog:', error);
      alert('Failed to update blog');
    }
  };

  // If loading, display a loading spinner or message
  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading blog...</p>
      </div>
    );
  }

  // If there's an error fetching the blog
  if (error) {
    return (
      <div className="container my-5 text-center">
        <div className="alert alert-danger">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <h2 className="mb-4">Edit Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter blog title"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              name="image"
              className="form-control"
              value={form.image}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea
              name="content"
              className="form-control"
              value={form.content}
              onChange={handleChange}
              placeholder="Write your blog content"
              rows="6"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!form.title || !form.content}  // Disable if title or content is missing
          >
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditBlog;
