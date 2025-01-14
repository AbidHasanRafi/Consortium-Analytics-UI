import { div, section } from "framer-motion/client";
import React from "react";
import { FaCheck } from "react-icons/fa";

const PartnerComparison = () => {
  return (
    <div className="max-w-full bg-white mx-2 md:mx-10 rounded-lg">
      <section className="px-4 sm:px-8 lg:px-16">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold pt-5 lg:pt-10 mb-6 sm:mb-8 text-center text-black">
          Program Comparison Table
        </h1>
        <div className="overflow-x-auto bg-white p-4 sm:p-6">
          <table className="w-full border-collapse text-xs sm:text-sm md:text-base">
            {/* Table Head */}
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="border border-gray-600 px-2 sm:px-4 py-3 text-left">
                  Benefits
                </th>
                <th className="border border-gray-600 px-2 sm:px-4 py-3 text-center">
                  Innovation Partner
                </th>
                <th className="border border-gray-600 px-2 sm:px-4 py-3 text-center">
                  Strategic Partner
                </th>
                <th className="border border-gray-600 px-2 sm:px-4 py-3 text-center">
                  Data Partner
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Table Rows */}
              {[
                {
                  benefit: "Featured in the Partner Directory",
                  innovation: true,
                  strategic: true,
                  data: true,
                },
                {
                  benefit: "Tiered Commission Structure",
                  innovation: true,
                  strategic: true,
                  data: false,
                },
                {
                  benefit: "Access to Partner Development Resources",
                  innovation: true,
                  strategic: false,
                  data: true,
                },
                {
                  benefit: "Software, Mobile App, and Web Dev Support",
                  innovation: true,
                  strategic: false,
                  data: true,
                },
                {
                  benefit: "Sales & Technical Training",
                  innovation: true,
                  strategic: false,
                  data: false,
                },
                {
                  benefit: "Dedicated Account Management",
                  innovation: true,
                  strategic: false,
                  data: false,
                },
                {
                  benefit: "Co-Marketing Opportunities",
                  innovation: false,
                  strategic: false,
                  data: true,
                },
                {
                  benefit: "Data Integration & Resell Opportunities",
                  innovation: false,
                  strategic: false,
                  data: true,
                },
              ].map((row, index) => (
                <tr key={index} className="text-gray-900">
                  <td className="border border-gray-600 px-2 sm:px-4 py-3">
                    {row.benefit}
                  </td>
                  <td className="border border-gray-600 px-2 sm:px-4 py-3 text-center">
                    {row.innovation && (
                      <FaCheck className="text-green-500 mx-auto" />
                    )}
                  </td>
                  <td className="border border-gray-600 px-2 sm:px-4 py-3 text-center">
                    {row.strategic && (
                      <FaCheck className="text-green-500 mx-auto" />
                    )}
                  </td>
                  <td className="border border-gray-600 px-2 sm:px-4 py-3 text-center">
                    {row.data && <FaCheck className="text-green-500 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PartnerComparison;
