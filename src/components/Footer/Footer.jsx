import React from "react";
import { FaLinkedinIn, FaSquareXTwitter , FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="w-[90%] max-w-screen-xl mb-4 mx-auto flex flex-col sm:flex-row justify-between items-center text-[#B5C6E0]">
        <div className="text-md font-poppins-medium">
          © 2025 Muhammad Qasim Nauman
        </div>
        <div className="flex flex-row gap-4 mt-2 sm:mt-0">
          <Link
            to="http://linkedin.com/in/mqasimnauman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110"
          >
            <FaLinkedinIn className="h-8 w-8" />
          </Link>
          <Link
            to="https://x.com/qasim_nauman_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110"
          >
            <FaSquareXTwitter  className="h-8 w-8" />
          </Link>
          <Link
            to="https://github.com/qasimnauman"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110"
          >
            <FaGithub className="h-8 w-8" />
          </Link>
          <a
            href="mailto:info@qasimnauman.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110"
          >
            <MdEmail className="h-8 w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
