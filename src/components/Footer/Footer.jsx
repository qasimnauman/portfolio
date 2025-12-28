import Link from "next/link";
import { FaLinkedinIn, FaSquareXTwitter, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative justify-center">
      <div className="md:w-[60%] mb-4 px-4 py-4 mb:px-16 mx-auto flex flex-row justify-between items-center text-[#B5C6E0]">
        <div className="text-sm md:text-md font-poppins-medium">
          © 2025 Qasim Nauman
        </div>
        <div className="flex flex-row gap-2 md:gap-4 justify-center items-center">
          <Link
            href="http://linkedin.com/in/mqasimnauman"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out hover:scale-110"
          >
            <FaLinkedinIn className="md:h-6 md:w-6 h-4 w-4" />
          </Link>
          <Link
            href="https://x.com/qasim_nauman_"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out hover:scale-110"
          >
            <FaSquareXTwitter className="md:h-6 md:w-6 h-4 w-4" />
          </Link>
          <Link
            href="https://github.com/qasimnauman"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out hover:scale-110"
          >
            <FaGithub className="md:h-6 md:w-6 h-4 w-4" />
          </Link>
          <a
            href="mailto:info@qasimnauman.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out hover:scale-110"
          >
            <MdEmail className="md:h-6 md:w-6 h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
