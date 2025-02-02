import React from "react";
import { FaGraduationCap } from "react-icons/fa";

interface Education {
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
  activities: string[];
}

const educationData: Education = {
  institution: "Telkom University",
  degree: "Bachelor Degree in Communication Science",
  duration: "2020 - 2024",
  gpa: "3.91",
  activities: [
    "Marketing Crew Telkom University (2023)",
    "Ready Radio Club (2023)",
    "SIGMA BEM FKB TEL-U (2022)",
    "Ideafest (2022)",
    "Urban Village Telkom University GERATU (2022)",
  ],
};

const EducationBackground: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 w-[50%] h-[500px]">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-[#FCCD2A] p-4 rounded-full">
          <FaGraduationCap  size={24} />
        </div>
        <h2 className="text-xl font-semibold">Educational Background</h2>
      </div>
      <div className="w-full border-1 my-5 text-gray-200"></div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{educationData.institution}</h3>
        <p className="text-gray-500">
          <span className="font-semibold">{educationData.degree}</span> |{" "}
          <span className="italic">GPA: {educationData.gpa}</span>
        </p>
        <p className="text-gray-600 text-sm -mt-4">{educationData.duration}</p>
        <p className="font-semibold">Activities</p>
        <ul className="list-disc pl-5 text-gray-500">
          {educationData.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationBackground;
