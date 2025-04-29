import React, { useState, useEffect } from "react";
import ProfileImage from "../assets/images/image.png";

const texts = ["Full Stack Developer", "DevOps Engineer"];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;

    const timeout = setTimeout(
      () => {
        setText(
          deleting
            ? texts[index].substring(0, subIndex - 1)
            : texts[index].substring(0, subIndex + 1)
        );
        setSubIndex(deleting ? subIndex - 1 : subIndex + 1);

        if (!deleting && subIndex === texts[index].length) {
          setTimeout(() => setDeleting(true), 1000);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center px-8 py-16 gap-12">
      <div className="flex flex-col gap-4 items-start">
        <p className="text-white text-lg md:text-xl font-poppins-regular">
          Hello, I’m Qasim,
        </p>

        <div className="text-[#B5C6E0] text-5xl md:text-7xl font-poppins-black leading-tight">
          {text}
          <span className="animate-blink">|</span>
        </div>

        <a
          href="mailto:m.qasimnauman@gmail.com"
          className="mt-4 text-white underline underline-offset-4 font-poppins-regular"
        >
          Contact Me
        </a>
      </div>

      <div>
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-72 md:w-96 rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
