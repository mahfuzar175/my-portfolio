import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
    const navItems = (
      <>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <Link to='/skill'>Skill</Link>
        </li>
        <li>
          <Link to='/projects'>Project</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </>
    );
    return (
      <div
      className={`navbar p-4 dark:bg-gray-800 dark:text-gray-100 ${
        isScrolled ? "fixed top-0 w-full bg-white shadow z-10" : ""
      }`}
    >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {
                  navItems
              }
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <h1 className="text-2xl md:text-3xl">𝕿𝕬𝕽𝕰𝕶</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold font-mono text-base">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/contact'><button className="btn btn-outline btn-secondary normal-case">Hire me</button></Link>
        
        </div>
      </div>
    );
  };
export default Navbar;