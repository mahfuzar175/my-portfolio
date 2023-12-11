import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import owner from '../assets/owner.png'
const Banner = () => {
    const handleDownload = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = "https://drive.google.com/uc?export=download&id=1NU9ANYmVAWg4nUHSHeYhMXRUrHXT4rQs";
        downloadLink.target = "_blank";
        downloadLink.download = "Assignment-02.pdf";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };

  return (
    <div className="lg:mt-8">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={owner}
              className="max-w-lg lg:max-w-7xl"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">
              MD MAHFUZAR RAHMAN <span className="text-pink-500">TAREK</span>
            </h1>
            <h1 className="py-2 text-2xl font-bold">
              Junior Front-End Web Developer
            </h1>
            <p className="py-4">
              I am a dedicated fourth-year computer science student at Varendra
              University, with a profound passion for software and web
              development. My focus lies in pursuing an internship opportunity
              as a web developer, where I can apply and elevate my skills to new
              heights.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-secondary px-6">
                Hire me
                <IoIosArrowForward className="text-xl font-extrabold" />
              </button>
              <button onClick={handleDownload} className="btn btn-secondary px-3">
              
                Get Resume
                <MdOutlineFileDownload className="text-xl font-extrabold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
