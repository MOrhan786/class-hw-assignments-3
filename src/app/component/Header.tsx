import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-950 sticky top-0 z-50 py-5 shadow-md">
      <nav className="flex justify-between items-center px-6">
        <div className="text-2xl text-gray-200">HomePage</div>
        <ul className="flex gap-5 text-white">
          <li>
            <a href="#home" className="hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-300">
              About Us
            </a>
          </li>

          <li>
            <a href="#portfolio" className="hover:text-blue-300">
              My Portfolio
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-300">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
