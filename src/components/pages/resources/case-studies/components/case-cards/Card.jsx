import React from "react";

const Card = ({ image, title, description, category, link }) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full object-cover" />
      <div className="p-4 space-y-3">
        <p className="text-sm text-gray-500 uppercase">{category}</p>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <a
          href={link}
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
