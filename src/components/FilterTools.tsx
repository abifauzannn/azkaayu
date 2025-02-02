import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTiktok, FaInstagram, FaLinkedin, FaWordpress } from "react-icons/fa";
import { SiCanva, SiSemrush, SiGooglesearchconsole, SiGoogleanalytics, SiGooglesheets } from "react-icons/si";

const tools = [
  { name: "TikTok", category: "Social Media & Content Creation", icon: <FaTiktok className="text-2xl text-black" /> },
  { name: "CapCut", category: "Social Media & Content Creation", icon: "🎬" },
  { name: "VN", category: "Social Media & Content Creation", icon: "🎥" },
  { name: "Instagram", category: "Social Media & Content Creation", icon: <FaInstagram className="text-2xl text-pink-600" /> },
  { name: "LinkedIn", category: "Social Media & Content Creation", icon: <FaLinkedin className="text-2xl text-blue-600" /> },
  { name: "Canva", category: "Social Media & Content Creation", icon: <SiCanva className="text-2xl text-blue-400" /> },
  { name: "WordPress", category: "SEO & Writing", icon: <FaWordpress className="text-2xl text-blue-800" /> },
  { name: "SEMRush", category: "SEO & Writing", icon: <SiSemrush className="text-2xl text-orange-500" /> },
  { name: "Google Search Console", category: "Research & Analytics", icon: <SiGooglesearchconsole className="text-2xl text-red-600" /> },
  { name: "Google Trends", category: "Research & Analytics", icon: <SiGooglesearchconsole className="text-2xl text-red-600" /> },
  { name: "Google Analytics", category: "Research & Analytics", icon: <SiGoogleanalytics className="text-2xl text-orange-400" /> },
  { name: "Google Sheets", category: "Project Management", icon: <SiGooglesheets className="text-2xl text-green-500" /> },
];

const categories = [
  "All",
  "Social Media & Content Creation",
  "SEO & Writing",
  "Research & Analytics",
  "Project Management",
];

export default function Tools() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTools =
    selectedCategory === "All"
      ? tools
      : tools.filter((tool) => tool.category === selectedCategory);

  return (
    <section className="text-black rounded-lg w-full">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md border-gray-400 border  ${
              selectedCategory === category
                ? "bg-[#FCCD2A] text-[#123524] font-bold"
                : "bg-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tools List */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <AnimatePresence mode="wait">
          {filteredTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="py-5 bg-white text-black rounded-2xl shadow-md border-gray-200 text-center flex flex-col items-center gap-2 px-3"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                {/* Render the icon */}
                {tool.icon}
              </div>
              <h3 className="font-bold">{tool.name}</h3>
              <p className="text-sm text-gray-500">{tool.category}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
