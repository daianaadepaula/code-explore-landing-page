import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import logo from "./../assets/images/logo.png";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              className="text-2xl font-semibold flex items-center space-x-3"
              href="#home"
            >
              <img
                className="w-10 inline-block items-center"
                src={logo}
                alt="logo"
              />
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    className="block cursor-pointer text-neutral-700 hover:text-primary text-xl"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-x-12 hidden md:flex items-center">
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Login
            </button>
          </div>

          {/* mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-lg focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <X size={24} className="text-primary" />
              ) : (
                <Menu size={24} className="text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile items */}
      <ul
        className={`space-y-4 px-5 pt-24 pb-5 bg-secondary ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map((item, index) => (
          <li key={index} className="py-4">
            <Link
              to={item.href}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
							onClick={toggleMenu}
              className="block cursor-pointer text-neutral-700 hover:text-white text-2xl"
            >
              {item.label}
            </Link>
          </li>
        ))}

        <div className="space-x-12 flex items-center">
          <button className="bg-indigo-600 text-2xl text-white py-2 px-4 transition-all duration-300 rounded hover:text-primary hover:bg-white">
            Login
          </button>
        </div>
      </ul>
    </header>
  );
};

export default Header;
