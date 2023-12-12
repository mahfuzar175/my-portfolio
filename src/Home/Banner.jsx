import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import owner from "../assets/Tarek.png";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { Link} from "react-router-dom";
import Typewriter from "typewriter-effect";

const Banner = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href =
      "https://drive.google.com/uc?export=download&id=1NU9ANYmVAWg4nUHSHeYhMXRUrHXT4rQs";
    downloadLink.target = "_blank";
    downloadLink.download = "Assignment-02.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2 flex justify-center items-center">
            <img src={owner} className="max-w-full rounded-full shadow-xl" />
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl md:text-5xl font-bold">
              MD MAHFUZAR RAHMAN <span className="text-pink-500">TAREK</span>
            </h1>
            <h1 className="py-2 text-xl md:text-3xl font-bold">
            <Typewriter
                options={{
                  strings: ["Junior Front-End Web Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </h1>
            <p className="py-4">
              I am a dedicated fourth-year computer science student at Varendra
              University, with a profound passion for software and web
              development. My focus lies in pursuing an internship opportunity
              as a web developer, where I can apply and elevate my skills to new
              heights.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link to='/contact'>
              <button className="btn btn-secondary px-3">
                Hire me
                <IoIosArrowForward className="text-xl font-extrabold" />
              </button>
              </Link>
              <button
                onClick={handleDownload}
                className="btn btn-secondary px-3"
              >
                Get Resume
                <MdOutlineFileDownload className="text-xl font-extrabold" />
              </button>
            </div>
            <div className="flex mt-4 justify-center items-center lg:justify-start">
              <a
                href="https://www.facebook.com/mahfuzar.rahman.tarek/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700  mr-4 hover:text-blue-900"
              >
                <div className="w-6 md:w-9 h-full flex items-center justify-center">
                  <BsFacebook size={24} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/md-mahfuzar-rahman-tarek/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700  mr-4 hover:text-blue-900"
              >
                <div className="w-6 md:w-9 h-full flex items-center justify-center">
                  <BsLinkedin size={24} />
                </div>
              </a>
              <a
                href="https://www.instagram.com/mahfuzarrahmantarek/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600  mr-4 hover:text-orange-900"
              >
                <div className="w-6 md:w-9 h-full flex items-center justify-center">
                  <GrInstagram size={24} />
                </div>
              </a>
              <a
                href="https://github.com/mahfuzar175"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 mr-4 hover:text-green-900"
              >
                <div className="w-6 md:w-9 h-full flex items-center justify-center">
                  <BsGithub size={24} />
                </div>
              </a>
              <a
                href="https://www.hackerrank.com/profile/mahfuzar175"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700  mr-4 hover:text-black"
              >
                <div className="w-6 md:w-9 h-full flex items-center justify-center">
                  <SiHackerrank size={24} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
