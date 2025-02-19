import Navbar from "../components/Navbar";
import { GoTriangleRight } from "react-icons/go";
import ProfilePicture from "../assets/images/profile.png";
import ScrollingText from "../components/ScrollingText/ScrollingText";
import PortfolioButtons from "../components/ButtonView";
import CardList from "../components/Services/Services";
import Tools from "../components/FilterTools";
import WorkExperience from "../components/Education-Work/WorkExperience";
import EducationBackground from "../components/Education-Work/Education";
import ExperienceCard from "../components/Projects";
import BlogList from "../components/Blogs";
import CityHover from "../components/Achievement";
import { TbCircleDashedLetterA } from "react-icons/tb";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Home = () => {
  return (
    <div className=" pt-17 flex flex-col overflow-y-auto">
      <Navbar />
      <section id="about" className="container flex flex-col-reverse md:flex-row items-center justify-between md:h-[calc(100vh-5rem)] pt-8 md:pt-0 px-4 md:px-10">
        {/* Flex item yang lebih besar */}
        <div className="flex flex-col space-y-1 w-full md:w-[60%] text-center md:text-left">
          <p className="relative hidden md:block text-black text-left text-1xl w-[130px] font-thin border-2 border-black p-3 mb-5 ml-2">
            Hello There!
            <span className="absolute top-[-10px] left-[-10px] w-4 h-4 bg-[#FCCD2A] border-2 border-black"></span>
            <span className="absolute top-[-10px] right-[-10px] w-4 h-4 bg-[#FCCD2A] border-2 border-black"></span>
            <span className="absolute bottom-[-10px] left-[-10px] w-4 h-4 bg-[#FCCD2A] border-2 border-black"></span>
            <span className="absolute bottom-[-10px] right-[-10px] w-4 h-4 bg-[#FCCD2A] border-2 border-black"></span>
          </p>

          <h1 className="text-[#123524] text-3xl  md:text-5xl font-bold">
            I'm <span className="text-[#FCCD2A]">Azka Ayu</span>
          </h1>
          <h2 className="text-[#123524] text-3xl md:text-5xl font-bold">
            Marketing Communication
          </h2>
          <h1 className="text-[#123524] text-3xl md:text-5xl font-bold">
            Based in Bandung.
          </h1>

          <p className="text-gray-400 text-md py-4 md:text-justify">
            Marketing Communication graduate with expertise in social media,
            branding, PR, and digital marketing. Skilled in content creation,
            SEO, and campaign management. Collaborative and eager to grow.
          </p>

          <PortfolioButtons
            portfolioText="View My Portfolio"
            hireMeText="Hire Me"
            TriangleIcon={GoTriangleRight}
          />
        </div>

        {/* Flex item yang lebih kecil */}
        <div className="relative flex flex-col items-center w-[40%]  md:ml-7">
          {/* Background Kuning */}
          <div className="absolute -z-10 w-80 md:w-100 h-60 md:h-90 bg-[#FCCD2A] rounded-se-[200px] rounded-es-[200px] rounded-tr-[700px] rounded-tl-[250px] rounded-bl-[1400px] rounded-br-[1500px] top-25"></div>
          <div className="absolute hidden md:flex -z-10 w-30 h-30 border-4 border-white bg-[#1F4529] rounded-full top-30 left-85 flex items-center justify-center">
            <div className="relative slow-spin">
              <svg
                className="mx-auto"
                width="200"
                height="120"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Path lingkaran untuk teks */}
                  <path
                    id="curvedPath"
                    d="M60,60 m-40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  />
                </defs>
                <text
                  fontSize="14"
                  fill="white"
                  fontWeight="bold"
                  textAnchor="middle"
                  letterSpacing="5" // Mengatur jarak antar huruf langsung di elemen text
                >
                  {/* Teks dengan ikon pembatas */}
                  <textPath
                    href="#curvedPath"
                    startOffset="50%"
                    className="uppercase tracking-widest"
                  >
                    Hire me ★ Hire me ★ Hire me ★
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="absolute z-10 auto h-10 font-semibold bg-[#FCCD2A] text-[#123524] px-3 hidden md:flex items-center rounded-full text-center bottom-30 -left-10 ">
            Social Media Management
          </div>

          <div className="absolute z-10 auto h-10 font-semibold  bg-[#1F4529] text-white px-3 hidden  md:flex items-center rounded-full text-center top-90 -right-0">
            Digital Marketing
          </div>

          {/* Gambar Profile */}
          <img
            src={ProfilePicture}
            alt="Profile"
            className="max-w-[250px] md:max-w-[300px] relative mb-15"
          />
        </div>
      </section>

      <ScrollingText />


      <section id="services" className="flex flex-col md:h-50% md:p-20 px-4 py-20 container"
      >
        <h2 className="relative text-[#123524] text-2xl font-bold flex pb-3">
          <span className="absolute left-0 top-4 transform -translate-y-1/2 w-1 h-3 bg-[#FCCD2A]"></span>
          <span className="ml-4 text-2xl">Services</span>
        </h2>

        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
          <h2 className="relative text-[#123524] text-2xl font-bold flex items-center space-x-3">
            <span className="ml-4 text-[28px] md:text-4xl font-thin italic text-[#FCCD2A]">
              Services
            </span>
            <span className="w-1 md:w-2 h-7 mt-1 bg-black"></span>
            <span className="text-[28px] md:text-4xl font-bold text-black">
              Provide
            </span>
          </h2>

          <PortfolioButtons
            portfolioText="View All Services"
            hireMeText=""
            TriangleIcon={GoTriangleRight}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-5 mt-12">
          <CardList />
        </div>
      </section>


      <section id="tools" className="flex flex-col md:h-screen pb-20 pt-0 md:pt-15 px-4  md:px-20 container">
        <h2 className="relative text-[#123524] text-2xl font-bold flex pb-3">
          <span className="absolute left-0 top-4 transform -translate-y-1/2 w-1 h-3 bg-[#FCCD2A]"></span>
          <span className="ml-4 text-2xl">My Favorite Tools</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-between">
          <h2 className="relative text-[#123524] text-2xl font-bold flex items-center space-x-3">
            <span className="ml-4 text-[28px] md:text-4xl font-thin italic text-[#FCCD2A]">
              Exploring the Tools
            </span>
            <span className="hidden md:block w-1 md:w-2 h-7 mt-1 bg-black"></span>
            <span className="hidden md:block text-[28px] md:text-4xl font-bold text-black">
              Behind My Project
            </span>
          </h2>
        </div>

        <div className="flex flex-row justify-center items-center gap-5 mt-12 w-full">
          <Tools />
        </div>
      </section>

      <section id="background" className="flex flex-col pb-20 pt-0 md:pt-15 px-4 md:px-20 container">
        <h2 className="relative text-[#123524] text-2xl font-bold flex pb-3 justify-center">
          <span className="hidden md:block absolute left-95 top-4 transform -translate-y-1/2 w-1 h-5 bg-[#FCCD2A] mr-4"></span>
          <span className="text-2xl text-center">My Education & Work</span>
        </h2>

        <div className="flex flex-row justify-center items-center w-full">
          <h2 className="relative text-[#123524] text-2xl font-bold flex items-center space-x-3 text-center">
            <span className="ml-4 text-[28px] md:text-4xl font-thin text-[#FCCD2A]">
              <span className="font-bold text-black">My</span>{" "}
              <span className="italic">Academic and Professional</span>{" "}
              <span className="font-bold text-black">Journey</span>
            </span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-12 w-full">
          <EducationBackground />
          <WorkExperience />
        </div>
      </section>

      <section id="portfolio" className="flex flex-col pb-20 md:pt-15 md:px-20 px-4 container"
      >
        <h2 className="relative text-[#123524] text-2xl font-bold flex pb-3">
          <span className="absolute left-0 top-4 transform -translate-y-1/2 w-1 h-3 bg-[#FCCD2A]"></span>
          <span className="ml-4 text-2xl">My Portfolio</span>
        </h2>

        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
          <h2 className="relative text-[#123524] text-2xl font-bold flex items-center space-x-3">
            <span className="ml-4 text-[28px] md:text-4xl font-bold text-black">
              My Latest
            </span>
            <span className="text-[28px] md:text-4xl font-thin italic text-[#FCCD2A]">
              Project
            </span>
          </h2>
          <PortfolioButtons
            portfolioText="View All Projects"
            hireMeText=""
            TriangleIcon={GoTriangleRight}
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-5 mt-12 w-full">
          <ExperienceCard />
        </div>
      </section>

      <section id="blogs" className="flex flex-col pt-0 md:pt-15 pb-20 px-4 md:px-20 container"
      >
        <h2 className="relative text-[#123524] text-2xl font-bold flex pb-3">
          <span className="absolute left-0 top-4 transform -translate-y-1/2 w-1 h-3 bg-[#FCCD2A]"></span>
          <span className="ml-4 text-2xl">News & Blogs</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-0">
          <h2 className="relative text-[#123524] text-2xl font-bold flex items-center space-x-3">
            <div className="flex flex-col  gap-2">
              <span className="ml-4 text-[28px] md:text-4xl font-bold text-black">
                Our Latest
              </span>
              <span className="ml-4 text-[28px] md:text-4xl font-thin italic text-[#FCCD2A]">
                News & Blogs
              </span>
            </div>
          </h2>

          <PortfolioButtons
            portfolioText="View All Blogs"
            hireMeText=""
            TriangleIcon={GoTriangleRight}
          />
        </div>

        <div className="flex flex-row justify-between gap-5 mt-12">
          <BlogList />
        </div>
      </section>

      <section id="achievement" className="flex flex-col md:pt-15 md:pb-20 px-4 md:px-20 container">
        <h2 className="relative text-[#123524] text-2xl font-bold flex pb-3">
          <span className="absolute left-0 top-4 transform -translate-y-1/2 w-1 h-3 bg-[#FCCD2A]"></span>
          <span className="ml-4 text-2xl">Achievements</span>
        </h2>

        <div className="flex flex-row justify-between items-center">
          <h2 className="relative text-[#123524] text-2xl font-bold flex items-center space-x-3">
            <div className="flex flex-col gap-2">
              <span className="ml-4 text-[28px] md:text-4xl font-bold text-black">
                Our Proud
              </span>
              <span className="ml-4 text-[28px] md:text-4xl font-thin italic text-[#FCCD2A]">
                Achievements
              </span>
            </div>
          </h2>
        </div>

        <div className="mt-8 md:mt-12">
          <CityHover />
        </div>
      </section>

      <ScrollingText />

      <section id="" className="flex flex-col pt-15 pb-10 md:pb-20 px-4 md:px-20 container">
        <div className="flex gap-4 md:gap-0  flex-col md:flex-row justify-between md:items-center">
          <h2 className="relative text-[#123524] text-2xl font-bold flex items-center space-x-3">
            <div className="flex flex-col gap-2">
              <span className="text-[28px] md:text-4xl font-bold text-black gap-1">
                Let's
                <span className="italic font-thin text-[#FCCD2A] px-3 mr-1">
                  Connect
                </span>
                There
              </span>
            </div>
          </h2>

          <PortfolioButtons
            portfolioText="View All Blogs"
            hireMeText=""
            TriangleIcon={GoTriangleRight}
          />
        </div>

        <div className="w-full border-1 my-5 text-gray-200"></div>

        <div className="flex flex-row justify-evenly gap-9 mt-12 w-full">

          <div className="flex flex-col max-w-[200px] md:max-w-[350px] w-full">
            <div className="flex flex-row items-center gap-2">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-[#FCCD2A] rounded-full flex items-center justify-center text-[#1F4529]">
                <TbCircleDashedLetterA size={35} />
              </div>
              <h2 className="font-bold text-[15px] md:text-2xl">Azka Ayu Maharani</h2>
            </div>
            <p className="text-sm text-justify text-gray-600 py-8">
              Communication Science student passionate about marketing and
              communication, with experience in copywriting, content planning,
              and digital marketing.
            </p>
            <div className="flex flex-row space-x-2 md:space-x-4">
              <div className="w-12 h-12 bg-[#FCCD2A] rounded-full flex items-center justify-center text-[#123524]">
                <FaInstagram size={20} />
              </div>
              <div className="w-12 h-12 bg-[#FCCD2A] rounded-full flex items-center justify-center text-[#123524]">
                <FaLinkedin size={20} />
              </div>
              <div className="w-12 h-12 bg-[#FCCD2A] rounded-full flex items-center justify-center text-[#123524]">
                <FaWhatsapp size={20} />
              </div>
              <div className="w-12 h-12 bg-[#FCCD2A] rounded-full flex items-center justify-center text-[#123524]">
                <SiGmail size={20} />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-around max-w-[300px] md:max-w-[400px] w-full gap-6">
            <div className="flex flex-col space-y-3 text-gray-600 text-sm">
              <h2 className="mb-4 font-bold text-[#FCCD2A]">Navigation</h2>
              <a href="#about" className="text-gray-600">
                Home
              </a>
              <a href="#services" className="text-gray-600">
                Services
              </a>
              <a href="#tools" className="text-gray-600">
                Tools
              </a>
              <a href="#background" className="text-gray-600">
                Education & Work
              </a>
              <a href="#portfolio" className="text-gray-600">
                Portfolio
              </a>
              <a href="#blogs" className="text-gray-600">
                News & Blogs
              </a>
              <a href="#achievement" className="text-gray-600">
                Achievements
              </a>
            </div>


            <div className="hidden md:flex flex-col space-y-3 text-gray-600">
              <h2 className="mb-4 font-bold text-[#FCCD2A]">Contact</h2>
              <p className="text-gray-600">azkaayumhrn@gmail.com</p>
              <p className="text-gray-600">0895701899600</p>
              <p className="text-gray-600">linkedin.com/in/azka-ayu-maharani</p>
              <p className="text-gray-600">Bandung, Indonesia</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
