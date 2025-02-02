import Navbar from "../components/Navbar";
import { GoTriangleRight } from "react-icons/go";
import ProfilePicture from "../assets/images/profile.png";
import ScrollingText from "../components/ScrollingText/ScrollingText";
import PortfolioButtons from "../components/ButtonView";
import CardList from "../components/Services/Services"

const Home = () => {
  return (
    <div>
      <div className="pt-2 flex flex-col">
        <Navbar />
        <section
          id="about"
          className="flex flex-row items-center justify-between h-[calc(100vh-5rem)] px-20"
        >
          {/* Flex item yang lebih besar */}
          <div className="flex flex-col space-y-1 w-[55%]">
            <p className="relative text-black text-left text-1xl w-[120px] font-thin border-2 border-black p-3 mb-5 ml-2">
              Hello There!
              <span className="absolute top-[-10px] left-[-10px] w-4 h-4 bg-[#FCCD2A] border-2 border-black"></span>
              <span className="absolute top-[-10px] right-[-10px] w-4 h-4 bg-[#FCCD2A] border-2 border-black"></span>
              <span className="absolute bottom-[-10px] left-[-10px] w-4 h-4 bg-[#FCCD2A] border-2 border-black"></span>
              <span className="absolute bottom-[-10px] right-[-10px] w-4 h-4 bg-[#FCCD2A] border-2 border-black"></span>
            </p>

            <p className="text-[#123524] text-left text-5xl font-bold">
              I'm <span className="text-[#FCCD2A]">Azka Ayu</span>
            </p>
            <h1 className="text-[#123524] text-left text-5xl font-bold">
              Marketing Communication
            </h1>
            <h1 className="text-[#123524] text-left text-5xl font-bold">
              Based in Bandung.
            </h1>

            <p className="text-gray-400 text-md py-4 text-justify">
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
          <div className="relative flex flex-col items-center w-[40%] ">
            {/* Background Kuning */}
            <div className="absolute -z-10 w-100 h-90 bg-[#FCCD2A] rounded-se-[200px] rounded-es-[200px] rounded-tr-[700px] rounded-tl-[250px] rounded-bl-[1400px] rounded-br-[1500px] top-25"></div>
            <div className="absolute -z-10 w-30 h-30 border-4 border-white bg-[#1F4529] rounded-full top-30 left-90 flex items-center justify-center">
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
                      className="uppercase tracking-wider"
                    >
                      Hire me ★ Hire me ★ Hire me ★
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            <div className="absolute z-10 auto h-10 font-semibold bg-[#FCCD2A] text-[#123524] px-3 flex items-center rounded-full text-center bottom-30 -left-10">
              Social Media Management
            </div>

            <div className="absolute z-10 auto h-10 font-semibold  bg-[#1F4529] text-white px-3 flex items-center rounded-full text-center top-90 -right-0">
              Digital Marketing
            </div>

            {/* Gambar Profile */}
            <img
              src={ProfilePicture}
              alt="Profile"
              className="w-[80%] relative mb-15"
            />
          </div>
        </section>
        <ScrollingText />

        <section id="about" className="flex flex-col h-50% p-20 ">
          <h2 className="relative text-[#123524] text-2xl font-bold flex pb-3">
            <span className="absolute left-0 top-4 transform -translate-y-1/2 w-1 h-3 bg-[#FCCD2A]"></span>
            <span className="ml-4 text-4xl">Services</span>
          </h2>

          <div className="flex flex-row justify-between">
            <h2 className="relative text-[#123524] text-2xl font-bold flex items-center space-x-3">
              <span className="ml-4 text-4xl font-thin italic text-[#FCCD2A]">
                Services
              </span>
              <span className="w-2 h-7 mt-1 bg-black"></span>
              <span className=" text-4xl font-bold text-black">Provide</span>
            </h2>

            <PortfolioButtons
              portfolioText="View All Services"
              hireMeText=""
              TriangleIcon={GoTriangleRight}
            />
          </div>

          <div className="flex flex-row justify-between gap-5 mt-12">
            <CardList/>
          </div>
        </section>

        <section id="about" className="flex flex-col h-screen p-20 ">
          <h2 className="relative text-[#123524] text-2xl font-bold flex pb-3">
            <span className="absolute left-0 top-4 transform -translate-y-1/2 w-1 h-3 bg-[#FCCD2A]"></span>
            <span className="ml-4 text-4xl">Services</span>
          </h2>

          <div className="flex flex-row justify-between">
            <h2 className="relative text-[#123524] text-2xl font-bold flex items-center space-x-3">
              <span className="ml-4 text-4xl font-thin italic text-[#FCCD2A]">
                Services
              </span>
              <span className="w-2 h-7 mt-1 bg-black"></span>
              <span className=" text-4xl font-bold text-black">Provide</span>
            </h2>

            <PortfolioButtons
              portfolioText="View All Services"
              hireMeText=""
              TriangleIcon={GoTriangleRight}
            />
          </div>

          <div className="flex flex-row justify-between gap-5 mt-12">
            <CardList/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
