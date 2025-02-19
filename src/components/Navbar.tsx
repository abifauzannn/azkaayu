import { useState, useEffect } from "react";
import { TbCircleDashedLetterA } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"; // Import Framer Motion

const Navbar = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(prevScrollY > currentScrollY || currentScrollY < 10);
      setPrevScrollY(currentScrollY);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [prevScrollY]);

  return (
    <>
      {/* Navbar utama */}
      <header
        className={`py-2 px-2 bg-[#1F4529] shadow-md rounded-full fixed top-3 left-1/2 transform transition-transform duration-300 z-50 mx-auto w-[95%] md:container`}
        style={{
          transform: isVisible ? "translate(-50%, 0)" : "translate(-50%, -100%)",
        }}
      >
        <nav className="flex flex-row justify-between items-center px-1">
          <div className="flex flex-row items-center space-x-3">
            <div className="text-white text-2xl font-semibold">
              <div className="w-12 h-12 bg-[#FCCD2A] rounded-full flex items-center justify-center text-[#1F4529]">
                <TbCircleDashedLetterA size={35} />
              </div>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex space-x-8 font-semibold">
            <a href="#about" className="hover:text-[#FCCD2A] text-white">Home</a>
            <a href="#services" className="hover:text-[#FCCD2A] text-white">Services</a>
            <a href="#tools" className="hover:text-[#FCCD2A] text-white">Tools</a>
            <a href="#background" className="hover:text-[#FCCD2A] text-white">Background</a>
            <a href="#portfolio" className="hover:text-[#FCCD2A] text-white">Portfolio</a>
            <a href="#blogs" className="hover:text-[#FCCD2A] text-white">Blogs</a>
            <a href="#achievement" className="hover:text-[#FCCD2A] text-white">Achievements</a>
          </div>

          {/* Tombol Contact */}
          <div className="hidden lg:block text-sm font-bold px-5 py-3 w-40 rounded-full bg-white text-black text-center">
            Contact Me
          </div>

          {/* Tombol Hamburger dengan Animasi */}
          <motion.div
            className="lg:hidden text-sm font-bold pr-3 text-[#FCCD2A] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          
          >
            <GiHamburgerMenu size={48} />
          </motion.div>
        </nav>
      </header>

      {/* Overlay Menu Slide-in dari Kiri */}
      <motion.div
        className="fixed inset-y-0 left-0 bg-[#1F4529] text-white flex flex-col items-start justify-center text-xl space-y-6 w-full h-full shadow-lg px-10 z-100"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute top-6 right-6 text-white cursor-pointer"
          onClick={() => setIsOpen(false)}
          whileHover={{ scale: 1.2 }}
        >
          <IoClose size={48} />
        </motion.div>

        <a href="#about" className="hover:text-[#FCCD2A]" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#services" className="hover:text-[#FCCD2A]" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#tools" className="hover:text-[#FCCD2A]" onClick={() => setIsOpen(false)}>Tools</a>
        <a href="#background" className="hover:text-[#FCCD2A]" onClick={() => setIsOpen(false)}>Background</a>
        <a href="#portfolio" className="hover:text-[#FCCD2A]" onClick={() => setIsOpen(false)}>Portfolio</a>
        <a href="#blogs" className="hover:text-[#FCCD2A]" onClick={() => setIsOpen(false)}>Blogs</a>
        <a href="#achievement" className="hover:text-[#FCCD2A]" onClick={() => setIsOpen(false)}>Achievements</a>
        <a href="#contact" className="bg-white text-black px-5 py-3 rounded-full font-bold hover:bg-[#FCCD2A]" onClick={() => setIsOpen(false)}>Contact Me</a>
      </motion.div>
    </>
  );
};

export default Navbar;
