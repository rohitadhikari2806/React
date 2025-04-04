import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div className="page">
      <h1>Blog Post {postId}</h1>
      <p>Detailed content for blog post {postId}...</p>
    </div>
  );
};

export default BlogPost;
