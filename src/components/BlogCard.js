import React from 'react';
import "../styles/BlogCard.css";

const BlogCard = ({ image, title, author, date, tags }) => {
  return (
    <div  className="blog-card mx-xxl-5">
      <img src={image} alt={title} className="blog-card-image" />
      <div className="blog-card-content">
        <h3>{title}</h3>
        <p>By {author} • {date}</p>
        <div className="blog-card-tags">
          {tags.map(tag => (
            <span key={tag} className="blog-card-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
