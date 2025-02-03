import { useState } from "react";
import { GiAchievement } from "react-icons/gi";
import Gambar1 from "../assets/images/achievements/4.png";
import Gambar2 from "../assets/images/achievements/5.png";
import Gambar3 from "../assets/images/achievements/6.png";
import Gambar4 from "../assets/images/achievements/7.png";


const cities = [
  {
    name: "Microblog",
    image: Gambar1,
    description:
      "3rd Winner of Microblog Challenge for national level competition  on SIGMA 2022",
  },
  {
    name: "Digital Poster",
    image: Gambar2,
    description:
      "1st winner of I-Interest Digital Poster for major event on IBRAVERY 2022",
  },
  {
    name: "Crew Of The Month Marketing",
    image: Gambar3,
    description: "Crew Of The Month Marketing Crew July 2022",
  },
  {
    name: "Best Intern",
    image: Gambar4,
    description: "Best Intern In June 2023 of Werkudara Institute",
  },
];

export default function CityHover() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <div className="flex flex-row justify-center gap-4 p-4">
      {/* List Nama Kota */}
      <div className="w-full border-gray-200 border rounded-2xl p-7">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#FCCD2A] rounded-full flex items-center justify-center">
            <GiAchievement size={30} />
          </div>
          <h2 className="text-xl font-bold">Achievements</h2>
        </div>

        <div className="w-full border-1 my-5 text-gray-200"></div>

        <div>
          {cities.map((city) => (
            <div
              key={city.name}
              onMouseEnter={() => setHoveredCity(city.image)}
              onMouseLeave={() => setHoveredCity(null)}
              className="cursor-pointer py-2 group"
            >
              <div className="border-l-4 border-gray-300 pl-4 group-hover:border-[#123524] transition-all duration-300">
                <p className="font-semibold">{city.name}</p>
                <p className="text-gray-600">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tampilan Gambar */}
      <div className="w-full flex flex-row justify-end items-center rounded-lg">
        {hoveredCity ? (
          <img src={hoveredCity} alt="City" className=" max-w-[400px]" />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
