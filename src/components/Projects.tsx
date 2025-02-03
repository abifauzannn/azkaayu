import React from "react";
import VideoContent from "../assets/images/projects/video content.png";
import CWDG1 from "../assets/images/projects/cw&dg31.png";
import CWDG2 from "../assets/images/projects/cw&dg2.png";
import CWDG3 from "../assets/images/projects/cw&dg3.png";
import SeoContent from "../assets/images/projects/SEO Content.png";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

interface Experience {
  title: string;
  tools: string[];
  image: string;
}

// Data pengalaman
const experienceData: Experience[] = [
  {
    title: "Video Content",
    tools: ["VN", "Capcut"],
    image: VideoContent,
  },
  {
    title: "Content Writing & Design Graphic",
    tools: ["Canva"],
    image: CWDG1,
  },
  {
    title: "SEO Content",
    tools: ["Wordpress", "Canva", "Semrush", "Google Trends"],
    image: SeoContent,
  },
  {
    title: "Content Writing & Design Graphic",
    tools: ["Canva"],
    image: CWDG2,
  },
  {
    title: "Content Writing & Design Graphic",
    tools: ["Canva"],
    image: CWDG3,
  },
];

// Komponen Kartu Pengalaman
const ExperienceCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {experienceData.map((experience, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-2xl p-6 bg-white"
        >
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full object-cover rounded-md"
          />
          <div className="flex flex-wrap gap-2 mt-5">
            {experience.tools.map((tool, idx) => (
              <button
                key={idx}
                className="px-3 py-1 text-sm bg-[#FCCD2A] text-[#1F4529] rounded-full font-bold"
              >
                {tool}
              </button>
            ))}
          </div>
          <div className="flex flex-row justify-between items-center mt-2">
            <h3 className="font-semibold text-lg mt-3">{experience.title}</h3>
            <div className="w-10 h-10 bg-[#1F4529] text-[#FCCD2A] rounded-full flex items-center justify-center">
              <TbArrowBigRightLinesFilled size={24} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
