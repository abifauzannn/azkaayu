import Navbar from "../components/Navbar";
import { GoTriangleRight } from "react-icons/go";
import ProfilePicture from "../assets/images/profile.png";
import ScrollingText from "../components/ScrollingText/ScrollingText";

const Home = () => {
  return (
    <div className="h-screen pt-2 flex flex-col">
      <Navbar />
      <section className="flex flex-row items-center justify-between h-[calc(100vh-5rem)] px-20">
        {/* Flex item yang lebih besar */}
        <div className="flex flex-col space-y-1 w-[50%]">
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
            Marketing
          </h1>
          <h1 className="text-[#123524] text-left text-5xl font-bold">
            Based in Bandung.
          </h1>

          <p className="text-gray-400 text-md py-4 text-justify">
            Marketing Communication graduate with expertise in social media,
            branding, PR, and digital marketing. Skilled in content creation,
            SEO, and campaign management. Collaborative and eager to grow.
          </p>

          <div className="flex flex-row space-x-4">
            <div className="bg-[#FCCD2A] p-1 w-[50%] rounded-full flex flex-row justify-between">
              <div className="bg-[#1F4529] w-[70%] py-1 font-bold rounded-full text-center text-white flex justify-center items-center">
                View My Portfolio
              </div>

              <div className="bg-white w-[25%] py-1 rounded-full flex justify-center items-center">
                <GoTriangleRight size={35} />
              </div>
            </div>

            <div className="bg-white border-2 font-sans font-semibold border-black px-6 py-1 w-auto rounded-full flex flex-row justify-center items-center">
              hire me
            </div>
          </div>
        </div>

        {/* Flex item yang lebih kecil */}
        <div className="relative flex flex-col items-center w-[40%] ">
          {/* Background Kuning */}
          <div className="absolute -z-10 w-100 h-90 bg-[#FCCD2A] rounded-se-[200px] rounded-es-[200px] rounded-tr-[400px] rounded-tl-[250px] rounded-bl-[500px] rounded-br-[700px]   top-30"></div>
          <div className="absolute -z-10 w-40 h-40 border-4 border-white bg-[#1F4529] rounded-full top-30 left-90 flex items-center justify-center">
            <div className="relative slow-spin">
              <svg
                className="mx-auto"
                width="200"
                height="160"
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
            className="w-[65%] relative mb-15"
          />
        </div>
      </section>
      <ScrollingText />
    </div>
  );
};

export default Home;
