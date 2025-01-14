import React, { useState } from "react";
import Modal from "react-modal";
import ContactForm from "../../../../../contact-form/ContactForm";

const DemoReq = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-gradient-to-b from-gray-900 via-[#002430] to-gray-900 text-white h-72 py-12 px-6 sm:px-10 rounded-lg flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-left max-w-full sm:max-w-xl leading-8 text-center sm:text-left">
          Ready to optimize your territories with Location Intelligence?
        </h1>
        <button
          onClick={() => setModalIsOpen(true)}
          className="bg-white text-black rounded-lg px-6 py-3 text-lg font-semibold hover:bg-[#002430] hover:border-2 hover:text-white transition duration-300 w-full sm:w-auto"
        >
          Request a Demo
        </button>
      </div>

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
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-red-600 text-3xl z-50"
          aria-label="Close modal"
        >
          &#10005;
        </button>
      )}
    </div>
  );
};

export default DemoReq;
