import React from "react";
import img1 from "../../../../../assets/team/1.jpg";
import img2 from "../../../../../assets/team/2.jpg";
import img3 from "../../../../../assets/team/3.png";
import img4 from "../../../../../assets/team/4.png";
import img5 from "../../../../../assets/team/5.png";
import img6 from "../../../../../assets/team/6.png";

const teamMembers = [
  {
    name: "Md Shohidullah Samrat",
    designation: "Head of Data Intelligence",
    image: img1,
  },
  {
    name: "Md Arman Ali",
    designation: "Head of Development & SQA Engineer",
    image: img2,
  },
  {
    name: "Md Ashek Rahman Anik",
    designation: "Data Analyst",
    image: img3,
  },
  {
    name: "An Nazmus Sakib",
    designation: "Junior Software Engineer",
    image: img4,
  },
  {
    name: "Anik Karmakar",
    designation: "Junior Software Engineer",
    image: img5,
  },
  {
    name: "Md. Abid Hasan Rafi",
    designation: "Intern",
    image: img6,
  },
];

const OurTeam = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center px-8 py-12">
      {/* Header Section */}
      <div className="w-full text-center mb-10 lg:mb-20">
        <h2 className="text-4xl font-semibold text-white">Our Team</h2>
      </div>

      {/* Team Member Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-72 h-72 rounded-xl mb-6"
            />
            <h3 className="text-xl font-normal text-white">{member.name}</h3>
            <p className="text-md text-gray-300">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
