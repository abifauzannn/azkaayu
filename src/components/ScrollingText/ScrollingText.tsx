import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./index.css";
import { FaStarOfLife } from "react-icons/fa";

const AutoScrollingText = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        direction: "horizontal",
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} className="scroll-container" data-scroll-container>
      <div
        className="scroll-text flex flex-row items-center"
        data-scroll
        data-scroll-speed="1"
      >
        {/* Konten scroll yang digandakan */}
        <div className="flex flex-row items-center gap-10 text-3xl text-[#123524] font-semibold">
          <FaStarOfLife /> SEO SPECIALIST <FaStarOfLife /> CONTENT WRITING
          <FaStarOfLife /> SOCIAL MEDIA MARKETING <FaStarOfLife /> CAMPAIGN MANAGEMENT
          <FaStarOfLife /> EVENT MANAGEMENT <FaStarOfLife /> MARKET RESEARCH <FaStarOfLife /> PUBLIC SPEAKING <FaStarOfLife /> DIGITAL TOOLS
        </div>
        {/* Konten yang sama digandakan untuk infinite scrolling */}
        <div className="flex flex-row items-center gap-10 text-3xl text-[#123524] font-semibold">
          <FaStarOfLife className="ml-10" /> SEO SPECIALIST <FaStarOfLife /> CONTENT WRITING
          <FaStarOfLife /> SOCIAL MEDIA MARKETING <FaStarOfLife /> CAMPAIGN MANAGEMENT
          <FaStarOfLife /> EVENT MANAGEMENT <FaStarOfLife /> MARKET RESEARCH <FaStarOfLife /> PUBLIC SPEAKING <FaStarOfLife /> DIGITAL TOOLS
        </div>
      </div>
    </div>
  );
};

export default AutoScrollingText;
