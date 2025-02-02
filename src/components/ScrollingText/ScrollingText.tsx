import { FaStarOfLife } from "react-icons/fa";
import "./index.css";

const AutoScrollingText = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-text">
        {/* Konten scroll yang digandakan */}
        <div className="scroll-content flex items-center font-bold">
          <FaStarOfLife /> SEO SPECIALIST <FaStarOfLife /> CONTENT WRITING
          <FaStarOfLife /> SOCIAL MEDIA MARKETING <FaStarOfLife /> CAMPAIGN MANAGEMENT
          <FaStarOfLife /> EVENT MANAGEMENT <FaStarOfLife /> MARKET RESEARCH <FaStarOfLife /> PUBLIC SPEAKING <FaStarOfLife /> DIGITAL TOOLS
        </div>
        {/* Gandakan konten agar terlihat seperti loop */}
        <div className="scroll-content flex items-center font-bold">
          <FaStarOfLife /> SEO SPECIALIST <FaStarOfLife /> CONTENT WRITING
          <FaStarOfLife /> SOCIAL MEDIA MARKETING <FaStarOfLife /> CAMPAIGN MANAGEMENT
          <FaStarOfLife /> EVENT MANAGEMENT <FaStarOfLife /> MARKET RESEARCH <FaStarOfLife /> PUBLIC SPEAKING <FaStarOfLife /> DIGITAL TOOLS
        </div>
      </div>
    </div>
  );
};

export default AutoScrollingText;
