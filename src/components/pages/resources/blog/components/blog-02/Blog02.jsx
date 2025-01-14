import React, { useState } from "react";
import img1 from "../../../../../../assets/blogs/header/2.png";
import auth01 from "../../../../../../assets/blogs/authors/author01.jpg";
import MarkdownViewer from "../../../../../markdown-viewer/MarkdownViewer";
import Modal from "react-modal";
import ContactForm from "../../../../../contact-form/ContactForm";

const Blog02 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen mt-16 px-6 sm:px-16 flex flex-col items-center">
      <div className="w-full max-w-4xl p-8">
        <div className="w-full overflow-hidden mb-4">
          <img
            src={img1}
            alt="Featured Post"
            className="w-full h-auto transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="text-gray-500 my-5 mb-2 text-base flex items-center">
          <img
            className="w-6 h-6 rounded-full mr-2"
            src={auth01}
            alt="Md. Shohidullah Samrat"
          />
          <p>
            <span className="text-blue-600 font-medium">
              Md. Shohidullah Samrat
            </span>
            <span className="mx-2">&#183;</span>
            <span>Nov 21, 2024</span>
          </p>
        </div>
        <h2 className="text-black text-4xl font-medium mb-2">
          The Power of Dashboards in Business Analytics: Unlocking Actionable
          Insights
        </h2>
        <p className="mb-4">
          <MarkdownViewer url="https://raw.githubusercontent.com/consortium-analytics/Consortium-Analytics-Assets/main/blogs-asset/markdown-files/blog-02/blog-02.md" />
        </p>
      </div>

      {/* Request a Demo Section */}
      <div className="bg-indigo-700 text-white w-full py-10 px-6 sm:px-8 rounded-lg flex items-center justify-between mt-10 max-w-4xl">
        <h1 className="text-xl sm:text-2xl font-medium text-left max-w-xl leading-7">
          Ready to optimize your territories with Location Intelligence?
        </h1>
        <button
          onClick={() => setModalIsOpen(true)}
          className="bg-white text-black rounded-md px-4 py-2 text-sm font-medium hover:bg-indigo-700 hover:border-2 hover:text-white transition duration-300"
        >
          Request a Demo
        </button>
      </div>

      {/* About the Author Section */}
      <div className="bg-gray-100 text-gray-900 w-full py-10 px-8 my-10 rounded-lg flex flex-col lg:flex-row lg:gap-8 items-center lg:items-start mt-10 max-w-4xl">
        <img
          src={auth01}
          alt="Md. Shohidullah Samrat"
          className="w-28 h-28 rounded-full border-2 border-gray-300 mb-4 lg:mb-0"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-xl md:text-2xl font-medium mb-2">
            About the Author
          </h1>
          <p className="text-sm md:text-base text-justify leading-6">
            Md. Shohidullah Samrat is a passionate data visualization expert
            with extensive experience in creating effective and impactful
            visualizations. His work focuses on simplifying complex data and
            making insights accessible to everyone. Samrat is also the Head of
            Analytics at Consortium Analytics, where he leads a team in
            delivering data-driven insights to clients across various sectors.
          </p>
        </div>
      </div>

      {/* Modal for Request a Demo */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="relative rounded-lg p-6 max-w-6xl w-full max-h-[90vh] overflow-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="mt-4">
          <ContactForm />
        </div>
      </Modal>

      {/* Close button positioned slightly outside the modal */}
      {modalIsOpen && (
        <button
          onClick={() => setModalIsOpen(false)}
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-indigo-700 text-3xl z-50"
          aria-label="Close modal"
        >
          &#10005;
        </button>
      )}
    </div>
  );
};

export default Blog02;
