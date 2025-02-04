import { useState, useEffect } from "react";
import { TbCircleDashedLetterA } from "react-icons/tb";

const Navbar = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(prevScrollY > currentScrollY || currentScrollY < 10);
      setPrevScrollY(currentScrollY);
    };

    const handleMouseEnter = () => {
      setIsVisible(true); // Navbar muncul ketika dihover bagian atas
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [prevScrollY]);

  return (
    <header
    className={`py-2 px-2 bg-[#1F4529] shadow-md rounded-full fixed top-3 left-1/2 transform transition-transform duration-300 z-50 mx-auto container`}
    style={{ transform: isVisible ? "translate(-50%, 0)" : "translate(-50%, -100%)" }}
    >
      <nav className="flex flex-row justify-between items-center px-1">
        <div className="flex flex-row items-center space-x-3">
          <div className="text-white text-2xl font-semibold">
            <div className="w-12 h-12 bg-[#FCCD2A] rounded-full flex items-center justify-center text-[#1F4529]">
              <TbCircleDashedLetterA size={35} />
            </div>
          </div>
        </div>

        <div className="space-x-8 font-semibold">
          <a href="#about" className="hover:text-[#FCCD2A] text-white">Home</a>
          <a href="#services" className="hover:text-[#FCCD2A] text-white">Services</a>
          <a href="#tools" className="hover:text-[#FCCD2A] text-white">Tools</a>
          <a href="#background" className="hover:text-[#FCCD2A] text-white">Background</a>
          <a href="#portfolio" className="hover:text-[#FCCD2A] text-white">Portfolio</a>
          <a href="#blogs" className="hover:text-[#FCCD2A] text-white">Blogs</a>
          <a href="#achievement" className="hover:text-[#FCCD2A] text-white">Achievements</a>
        </div>

        <div className="text-sm font-bold px-5 py-3 w-40 rounded-full bg-white text-black text-center">
          Contact Me
        </div>
      </nav>
    </header>
  );
};

export default Navbar;