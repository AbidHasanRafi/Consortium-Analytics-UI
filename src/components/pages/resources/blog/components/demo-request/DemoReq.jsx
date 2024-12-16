import React from "react";

const DemoReq = () => {
  return (
    <div className="bg-red-600 text-white h-72 py-12 px-10 rounded-lg flex items-center justify-between">
      <h1 className="text-3xl md:text-4xl font-semibold text-left max-w-xl leading-8">
        Ready to optimize your territories with Location Intelligence?
      </h1>
      <button className="bg-white text-black rounded-lg px-6 py-3 text-lg font-semibold hover:bg-red-600 hover:border-2 hover:text-white transition duration-300">
        Request a Demo
      </button>
    </div>
  );
};

export default DemoReq;
