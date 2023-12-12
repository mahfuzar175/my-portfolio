import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
const Footer = () => {
    return (
      <div>
        <footer className="footer items-center p-8 bg-black text-gray-100">
          <aside className="items-center grid-flow-col">
          <h1 className="text-3xl">𝕿𝕬𝕽𝕰𝕶</h1>
            <p className="lg:ml-4">Copyright © 2023 - All right reserved</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div className="flex mt-4 ustify-center items-center lg:justify-start">
              <a
                href="https://www.facebook.com/mahfuzar.rahman.tarek/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700  mr-4 hover:text-blue-900"
              >
                <div className="w-8 h-full flex items-center justify-center">
                  <BsFacebook size={24} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/md-mahfuzar-rahman-tarek/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700  mr-4 hover:text-blue-900"
              >
                <div className="w-8 h-full flex items-center justify-center">
                  <BsLinkedin size={24} />
                </div>
              </a>
              <a
                href="https://www.instagram.com/mahfuzarrahmantarek/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600  mr-4 hover:text-orange-900"
              >
                <div className="w-8 h-full flex items-center justify-center">
                  <GrInstagram size={24} />
                </div>
              </a>
              <a
                href="https://github.com/mahfuzar175"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 mr-4 hover:text-green-900"
              >
                <div className="w-8 h-full flex items-center justify-center">
                  <BsGithub size={24} />
                </div>
              </a>
              <a
                href="https://www.hackerrank.com/profile/mahfuzar175"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700  mr-4 hover:text-red-800"
              >
                <div className="w-8 h-full flex items-center justify-center">
                  <SiHackerrank size={24} />
                </div>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  