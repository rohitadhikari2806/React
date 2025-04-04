import React from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const blogs = [
    { id: 1, title: "About pets", description: "Hey welcome to my page , here you can get info about pets" },
    { id: 2, title: "About Cars", description: "Hey welcome to Car landing Page" },
  ];

  return (
    <div className="page">
      <h1>Blog Posts</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}><h2>{blog.title}</h2></Link>
            <p>{blog.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
