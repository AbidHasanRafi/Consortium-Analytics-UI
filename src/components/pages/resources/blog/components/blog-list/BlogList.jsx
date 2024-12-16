import React from "react";
import BlogPost from "./BlogPost"; // Assuming BlogPost component is in the same folder

// Sample Data Analytics Blog Data with Categories and the provided image link
const blogData = [
  {
    id: 1,
    title: "Introduction to Data Analytics",
    headerImage:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-stylish-blog-header-design-template-7ebfd693291cf41ea26ffc18f67768a6_screen.jpg",
    content:
      "Data analytics is the process of examining datasets to draw conclusions about the information they contain. In this blog, we cover the basics of data analytics and its significance in decision-making.",
    category: "Fundamentals",
    author: {
      name: "John Doe",
      image:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg",
    },
    date: "01 Dec, 2024",
  },
  {
    id: 2,
    title: "The Power of Data Visualization",
    headerImage:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-stylish-blog-header-design-template-7ebfd693291cf41ea26ffc18f67768a6_screen.jpg",
    content:
      "Learn how data visualization helps in simplifying complex data, allowing insights to be communicated effectively and efficiently.",
    category: "Visualization",
    author: {
      name: "Jane Smith",
      image:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg",
    },
    date: "05 Dec, 2024",
  },
  {
    id: 3,
    title: "Data Cleaning Techniques for Better Analysis",
    headerImage:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-stylish-blog-header-design-template-7ebfd693291cf41ea26ffc18f67768a6_screen.jpg",
    content:
      "Data cleaning is an essential part of data analysis. In this blog, we discuss various techniques for cleaning your dataset to ensure accurate and reliable insights.",
    category: "Data Preparation",
    author: {
      name: "Michael Brown",
      image:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg",
    },
    date: "10 Dec, 2024",
  },
  {
    id: 4,
    title: "Understanding Machine Learning Algorithms",
    headerImage:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-stylish-blog-header-design-template-7ebfd693291cf41ea26ffc18f67768a6_screen.jpg",
    content:
      "In data analytics, machine learning plays a key role. This blog introduces various types of machine learning algorithms and their applications in analytics.",
    category: "Machine Learning",
    author: {
      name: "Emily White",
      image:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg",
    },
    date: "12 Dec, 2024",
  },
  {
    id: 5,
    title: "Big Data and Its Impact on Business Decisions",
    headerImage:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-stylish-blog-header-design-template-7ebfd693291cf41ea26ffc18f67768a6_screen.jpg",
    content:
      "Big Data is transforming businesses by providing deep insights into consumer behavior and market trends. This blog explores the importance of big data in driving business decisions.",
    category: "Big Data",
    author: {
      name: "David Green",
      image:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg",
    },
    date: "15 Dec, 2024",
  },
  {
    id: 6,
    title: "Data Analytics for Predictive Modeling",
    headerImage:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-stylish-blog-header-design-template-7ebfd693291cf41ea26ffc18f67768a6_screen.jpg",
    content:
      "Predictive modeling is a statistical technique used in data analytics to predict future outcomes based on historical data. This blog explains how to build effective predictive models.",
    category: "Predictive Analytics",
    author: {
      name: "Sophia Taylor",
      image:
        "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg",
    },
    date: "20 Dec, 2024",
  },
];

const BlogList = () => {
  return (
    <div className="mx-auto px-14 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogData.map((post) => (
          <BlogPost
            key={post.id}
            title={post.title}
            headerImage={post.headerImage}
            content={post.content}
            category={post.category}
            author={post.author}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
