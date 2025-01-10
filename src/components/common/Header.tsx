import { Link } from "react-router-dom";
import GithubSvg from "../../utils/assets/svg/GithubSvg";
import HeaderLinks from "../../utils/HeaderLinks";
import { useState, useEffect } from "react";
import OpenMenu from "../../utils/assets/svg/OpenMenu";
import CloseMenu from "../../utils/assets/svg/CloseMenu";
import resume from '../../utils/assets/Mejia_John_Mikko_I_Resume.pdf';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isVisible, setIsVisible] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0); 
  const location = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-bg shadow-lg z-40 transform transition-transform duration-300  ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 lg:px-24 lg:py-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <h1 className="font-fc font-extrabold tracking-wider text-xl lg:text-2xl">
              J A N M I C K O
            </h1>
          </Link>
        </div>

        {/* Center Section for Large Screens */}
        <ul className="hidden lg:flex items-center space-x-6 dark:text-white/70 font-fira font-semibold">
          <HeaderLinks path="/" title="Home" isActive={location} />
          <HeaderLinks path="/projects" title="Projects" isActive={location} />
          <HeaderLinks path="/about" title="About" isActive={location} />
          <HeaderLinks path="/contact" title="Contact" isActive={location} />
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* GitHub Stats */}
          <div className="flex items-center space-x-1">
            <Link to={import.meta.env.VITE_APP_GIT}>
              <GithubSvg />
            </Link>
            <span className="hidden sm:inline">Github</span>
          </div>

          {/* Resume Link */}
          <a
            href={resume}
            download="Resume.pdf"
            className="hidden sm:flex items-center space-x-1 border px-8 py-2 rounded-md bg-[#64ffda]/90 hover:bg-[#64ffda] hover:translate-y-1 hover:translate-x-1 hover:text-black transition-transform duration-300"
          >
            <span className="hidden sm:inline sm:text-black">Resume</span>
          </a>

          {/* Hamburger Menu Button for Medium Screens and Smaller */}
          <button
            className="lg:hidden p-2 rounded-md border border-gray-500 hover:bg-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <OpenMenu isMenuOpen={isMenuOpen}/>
          </button>
        </div>
      </div>

      {/* Slide-in Menu for Medium Screens and Smaller */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 right-0 h-screen w-64 bg-black text-white z-50 transform translate-x-0 transition-transform duration-300">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseMenu />
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col items-start space-y-6 px-6 pt-20 font-fira font-semibold h-full">
            <HeaderLinks path="/" title="Home" isActive={location} />
            <HeaderLinks path="/projects" title="Projects" isActive={location} />
            <HeaderLinks path="/about" title="About" isActive={location} />
            <HeaderLinks path="/contact" title="Contact" isActive={location} />
            {/* GitHub Link */}
            <li className="flex items-center space-x-2">
              <Link to={import.meta.env.VITE_APP_GIT}>
                <GithubSvg />
              </Link>
              <span>Github</span>
            </li>
            {/* Resume Link */}
            <li>
              <a
                href={resume}
                download="Resume.pdf"
                className="flex items-center space-x-2 border px-6 py-2 rounded-md bg-[#64ffda]/90 hover:bg-[#64ffda] text-black hover:text-black transition-transform duration-300"
              >
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
