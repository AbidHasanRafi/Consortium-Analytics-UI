import React from "react";
import { Link } from "react-router-dom";

// Common BlogPost component
const BlogPost = ({
  title,
  headerImage,
  content,
  author,
  date,
  category,
  link,
}) => {
  return (
    <div className="mb-8">
      {/* Container for header image without rounded borders */}
      <div className="w-full overflow-hidden mb-6">
        <img
          src={headerImage}
          alt="Header"
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Author and Date */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <img
          src={author.image}
          alt={author.name}
          className="w-6 h-6 rounded-full"
        />
        <div>
          <span className="font-medium text-blue-600">{author.name}</span>
          <span className="text-gray-500"> · {date}</span>
        </div>
      </div>

      {/* Title */}
      <Link to={link}>
        {" "}
        {/* Wrap title in Link for routing */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
          {title}
        </h2>
      </Link>

      {/* Content */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6">{content}</p>

      {/* Category */}
      <p className="text-sm font-semibold text-blue-600 mt-4">{category}</p>
    </div>
  );
};

export default BlogPost;
