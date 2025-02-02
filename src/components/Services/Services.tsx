import React from "react";
import { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa";
import { GrMultimedia } from "react-icons/gr";
import { MdBrandingWatermark } from "react-icons/md";
import { FaTachographDigital } from "react-icons/fa6";

// Type untuk data
type CardData = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
};

// Komponen Card
const Card: React.FC<{
  title: string;
  description: string;
  icon: IconType;
}> = ({
  title,
  description,
  icon: Icon, // Destructure the icon here
}) => {
  return (
    <div className="w-auto h-auto bg-white rounded-2xl p-9 border-slate-200 border">
      <div className="w-15 h-15 bg-[#FCCD2A] rounded-full flex items-center justify-center">
        <div className="w-8 h-8 rounded-full flex items-center justify-center">
          {/* Render the icon here */}
          <Icon size={30} color="#123524" />
        </div>
      </div>
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="mt-2 text-sm text-gray-400 text-justify">{description}</p>
      <div className="flex flex-row gap-2 mt-2 items-center cursor-pointer">
        <p className="font-bold text-[#123524] text-sm">Learn More</p>
        <span className="text-[#FCCD2A]">
          <FaArrowRight size={16} />
        </span>
      </div>
    </div>
  );
};

// Komponen CardList
const CardList: React.FC = () => {
  const cardData: CardData[] = [
    {
      id: 1,
      title: "Social Media Management",
      description:
        "Boost your brand’s online engagement across various social media platforms with expert management and strategy.",
      icon: GrMultimedia,
    },
    {
      id: 2,
      title: "Branding",
      description:
        "Create a strong and unique brand identity that resonates with your audience and differentiates you from competitors.",
      icon: MdBrandingWatermark,
    },
    {
      id: 3,
      title: "Content Creation",
      description:
        "Produce high-quality, engaging content that aligns with your brand’s voice, driving audience interaction and engagement.",
      icon: FaTachographDigital,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

export default CardList;
