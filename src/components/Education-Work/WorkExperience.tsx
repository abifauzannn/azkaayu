import React from "react";
import { FaBriefcase } from "react-icons/fa";

interface Experience {
  company: string;
  position: string;
  duration: string;
}

const workExperience: Experience[] = [
  {
    company: "Telkom Indonesia",
    position: "Digital Marketing Specialist",
    duration: "Jan 2024 - Mar 2024",
  },
  {
    company: "Digistar Internship DDB Telkom",
    position: "Marketing Intern",
    duration: "Aug 2023 - Dec 2024",
  },
  {
    company: "Werkudara Institute",
    position: "Social Media Specialist",
    duration: "May 2023 - Sept 2023",
  },
  {
    company: "Oversea Academy",
    position: "Content Creator",
    duration: "2021 - 2022",
  },
];

const WorkExperience: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 w-full md:w-[50%] md:h-[500px]">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-[#FCCD2A] p-4 rounded-full">
          <FaBriefcase className="text-black" size={24} />
        </div>
        <h2 className="text-xl font-semibold">Work Experience</h2>
      </div>
      <div className="w-full border-1 my-5 text-gray-200"></div>
      <div className="space-y-4">
        {workExperience.map((exp, index) => (
          <div key={index} className="border-l-4 border-gray-300 pl-4">
            <p className="text-gray-600 text-sm">{exp.duration}</p>
            <h3 className="text-lg font-semibold">{exp.company}</h3>
            <p className="text-gray-500">{exp.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
