

const Navbar = () => {
  return (
    <header className="py-1 px-1 bg-[#1F4529] shadow-md rounded-full z-100 mx-20 container">
      <nav className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center space-x-3    ">
          {/* <div className="relative w-12 h-12  bg-yellow-500 rounded-full flex items-center justify-center">
            <div className="w-7 h-9  bg-black rounded-full flex items-center justify-center">
              <div className="w-3 h-8 bg-yellow-500 rounded-full"></div>
            </div>
          </div> */}

          <p className="text-white text-2xl ml-4 font-semibold">
            Azka Ayu Maharani
            <span className="text-[#FCCD2A] font-semibold">.</span>
          </p>
        </div>

        <div className="space-x-8 font-semibold">
          <a href="#features" className="hover:text-[#FCCD2A] text-white">
            Home
          </a>
          <a href="#about" className="hover:text-[#FCCD2A] text-white">
            Services
          </a>
          <a href="#contact" className="hover:text-[#FCCD2A] text-white">
            Project
          </a>
          <a href="#contact" className="hover:text-[#FCCD2A] text-white">
            Experience
          </a>
        </div>

        <div className="text-sm font-bold px-5 py-3 w-40 rounded-full bg-white text-black text-center">
          Contact Me
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
