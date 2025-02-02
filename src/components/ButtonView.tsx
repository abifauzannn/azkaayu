import React from "react";
import { IconType } from "react-icons";

type ButtonProps = {
  portfolioText: string;
//   onPortfolioClick: () => void;
  hireMeText?: string;
//   onHireMeClick: () => void;
  TriangleIcon: IconType;
};

const PortfolioButtons: React.FC<ButtonProps> = ({
  portfolioText,

  hireMeText,

  TriangleIcon,
}) => {
  return (
    <div className="flex flex-row space-x-4">
      {/* Portfolio Button */}
      <div
        className="bg-[#FCCD2A] p-1 gap-1  rounded-full flex flex-row justify-between cursor-pointer"
     
      >
        <div className="bg-[#1F4529]  py-1 px-7 font-bold rounded-full text-center text-white flex justify-center items-center">
          {portfolioText}
        </div>

        <div className="bg-white  py-1 rounded-full flex justify-center items-center">
          <TriangleIcon size={35} />
        </div>
      </div>

      {/* Hire Me Button */}
      {hireMeText && (
        <div
          className="bg-white border-2 font-sans font-semibold border-black px-6 py-1 w-auto rounded-full flex flex-row justify-center items-center cursor-pointer"
        
        >
          {hireMeText}
        </div>
      )}
    </div>
  );
};

export default PortfolioButtons;
