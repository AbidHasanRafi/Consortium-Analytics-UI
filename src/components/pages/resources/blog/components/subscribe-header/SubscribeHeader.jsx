import React from "react";
import img from "../../../../../../assets/blogs/intelligence.png";

const SubscribeHeader = () => {
  return (
    <div
      className="h-96 rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="hero-overlay p-5 bg-black bg-opacity-60 h-full">
        {/* Content container */}
        <div className="text-left text-white w-full h-full flex flex-col justify-center space-y-6 px-4 sm:px-8">
          <h1 className="text-3xl md:text-4xl font-medium leading-snug w-full md:w-1/2">
            Intelligence Resources Straight to Your Inbox
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            Subscribe to our latest news, product features, and events.
          </p>

          {/* Input and button */}
          <div className="flex flex-col w-full md:w-1/3 space-y-2">
            {/* Input field */}
            <input
              type="email"
              placeholder="Business email address"
              className="p-2 rounded-sm bg-white text-black focus:outline-none w-full"
            />
            {/* Subscribe button */}
            <button className="bg-cyan-500 text-white uppercase rounded-sm py-2 px-4 text-xs font-semibold hover:bg-slate-700 transition self-start md:self-end">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeHeader;
