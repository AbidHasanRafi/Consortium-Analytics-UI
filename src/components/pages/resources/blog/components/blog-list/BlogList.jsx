import React, { useState } from "react";
import BlogPost from "./BlogPost";
import auth01 from "../../../../../../assets/blogs/authors/author01.jpg";
import img1 from "../../../../../../assets/blogs/header/1.png";
import img2 from "../../../../../../assets/blogs/header/2.png";
import img3 from "../../../../../../assets/blogs/header/3.png";
import img4 from "../../../../../../assets/blogs/header/4.png";
import img5 from "../../../../../../assets/blogs/header/5.png";
import img6 from "../../../../../../assets/blogs/header/6.png";

// Sample Data Analytics Blog Data with Categories and the provided image link
const blogData = [
  {
    id: 1,
    title: "Bar Charts: An Effective Data Visualization Tool",
    headerImage: img1,
    content:
      "Data visualization is an essential step in data analysis, transforming raw data into insights that are both actionable and easy to understand. Among the wide variety of visualization techniques available, one of the most versatile and widely used tools is the bar chart.",
    category: "Visualization",
    author: {
      name: "Md. Shohidullah Samrat",
      image: auth01,
    },
    date: "01 Dec, 2024",
    link: "/bar-charts",
  },
  {
    id: 2,
    title:
      "The Power of Dashboards in Business Analytics: Unlocking Actionable Insights",
    headerImage: img2,
    content:
      "In today’s data-driven world, businesses are faced with a wealth of information at their fingertips. However, the challenge lies not in collecting this data but in making sense of it and using it effectively to drive business decisions. This is where dashboards come in.",
    category: "Insights",
    author: {
      name: "Md. Shohidullah Samrat",
      image: auth01,
    },
    date: "05 Dec, 2024",
    link: "/dashboard-for-business-analytics",
  },
  {
    id: 3,
    title:
      "Data Storytelling: Unlocking the Full Potential of Your Business Data",
    headerImage: img3,
    content:
      "In today’s data-driven world, businesses collect more information than ever before. Whether it’s sales trends, customer preferences, or operational metrics, data has the power to guide decisions and spark innovation.",
    category: "Business Data",
    author: {
      name: "Md. Shohidullah Samrat",
      image: auth01,
    },
    date: "10 Dec, 2024",
    link: "/data-storytelling",
  },
  {
    id: 4,
    title:
      "Unlocking Insights with Data Visualization Tools: Power BI, Tableau, and Google Looker Studio",
    headerImage: img4,
    content:
      "In today’s data-driven world, effective decision-making relies on transforming raw data into clear, actionable insights. This is where data visualization tools like Power BI, Tableau, and Google Looker Studio play a pivotal role. ",
    category: "Tools",
    author: {
      name: "Md. Shohidullah Samrat",
      image: auth01,
    },
    date: "12 Dec, 2024",
    link: "/data-visualisation-tool",
  },
  {
    id: 5,
    title:
      "Empowering Businesses with Data-Driven Insights and Innovative Solutions",
    headerImage: img5,
    content:
      "At Consortium Analytics, we don’t just work with data; we turn it into powerful insights that drive business growth, efficiency, and innovation. As a leading provider of Business Intelligence, Data Analytics, AI/ML solutions, and Data Engineering, we empower organizations across industries to unlock the full potential of their data.",
    category: "Solutions",
    author: {
      name: "Md. Shohidullah Samrat",
      image: auth01,
    },
    date: "15 Dec, 2024",
    link: "/empowering-business",
  },
  {
    id: 6,
    title:
      "Harnessing the Power of AI and Machine Learning in Business Analytics",
    headerImage: img6,
    content:
      "In today’s fast-paced, data-driven landscape, businesses are continuously searching for ways to stay ahead of the competition. Artificial Intelligence (AI) and Machine Learning (ML) have emerged as transformative tools in this quest, enabling companies to derive actionable insights from complex datasets and automate decision-making processes.",
    category: "Predictive Analytics",
    author: {
      name: "Md. Shohidullah Samrat",
      image: auth01,
    },
    date: "20 Dec, 2024",
    link: "/power-of-ai-and-ml",
  },
  {
    id: 7,
    title:
      "Unlocking the Power of Power BI: A Comprehensive Guide for Businesses",
    headerImage: img6,
    content:
      "In today's data-driven world, the ability to analyze and visualize data effectively is critical for business success. Organizations are inundated with vast amounts of data from various sources, and making sense of it is no easy task.",
    category: "Predictive Analytics",
    author: {
      name: "Md. Shohidullah Samrat",
      image: auth01,
    },
    date: "25 Dec, 2024",
    link: "/power-bi-guide",
  },
  {
    id: 8,
    title:
      "Unlocking the Potential of Tableau: The Ultimate Guide for Businesses",
    headerImage: img6,
    content:
      "Data is the lifeblood of modern businesses, and the ability to analyze and interpret it effectively is crucial for success. Tableau, a leading data visualization tool, empowers businesses to transform raw data into actionable insights.",
    category: "Predictive Analytics",
    author: {
      name: "Md. Shohidullah Samrat",
      image: auth01,
    },
    date: "28 Dec, 2024",
    link: "/tableau-guide",
  },
  {
    id: 9,
    title:
      "Unlocking Business Insights with Looker Studio: A Comprehensive Guide",
    headerImage: img6,
    content:
      "In today’s fast-paced, data-driven landscape, businesses are continuously searching for ways to stay ahead of the competition. Artificial Intelligence (AI) and Machine Learning (ML) have emerged as transformative tools in this quest, enabling companies to derive actionable insights from complex datasets and automate decision-making processes.",
    category: "Predictive Analytics",
    author: {
      name: "Md. Shohidullah Samrat",
      image: auth01,
    },
    date: "28 Dec, 2024",
    link: "/looker-studio-guide",
  },
  {
    id: 10,
    title: "Power BI vs. Looker Studio vs. Tableau: A Comprehensive Comparison",
    headerImage: img6,
    content:
      "In today's data-driven era, choosing the right data visualization and business intelligence (BI) tool can make or break a company’s ability to turn raw data into actionable insights. Among the most popular tools are Power BI, Looker Studio (formerly Google Data Studio), and Tableau.",
    category: "Predictive Analytics",
    author: {
      name: "Md. Shohidullah Samrat",
      image: auth01,
    },
    date: "28 Dec, 2024",
    link: "/power-bi-looker-studio-tableau",
  },
];
const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-14 py-6">
      {/* Blog Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentBlogs.map((post) => (
          <BlogPost
            key={post.id}
            title={post.title}
            headerImage={post.headerImage}
            content={post.content}
            category={post.category}
            author={post.author}
            date={post.date}
            link={post.link}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:bg-gray-200 transition duration-300"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-lg transition duration-300 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:bg-gray-200 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
