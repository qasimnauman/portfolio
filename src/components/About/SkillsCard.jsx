"use client";

import { useRef } from "react";
import useIsVisible from "../../hooks/isVisible";
import Skills from "./Skills";

// const useIsVisible = (ref) => {
//   const [isIntersecting, setIntersecting] = useState(false);

//   useEffect(() => {
//     const currentElement = ref.current;
//     if (!currentElement) return;

//     const observer = new IntersectionObserver(([entry]) => {
//       setIntersecting(entry.isIntersecting);
//     });

//     observer.observe(currentElement);

//     return () => {
//       observer.unobserve(currentElement);
//       observer.disconnect();
//     };
//   }, [ref]);

//   return isIntersecting;
// };

const SkillsCard = ({ skills }) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  if (!skills) return null;

  const skillList = skills.skills || [];

  // Split the skills into chunks of 3
  const chunks = [];
  for (let i = 0; i < skillList.length; i += 3) {
    chunks.push(skillList.slice(i, i + 3));
  }

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-4 justify-center items-center pr-10 pl-10 pt-4 pb-4 
        bg-white/10 backdrop-blur-md border border-primary-text/40 mt-8
        rounded-2xl  hover:shadow-lg/30 hover:shadow-gray-400 hover:ring-1 ring-primary-text hover:-translate-y-2   
        transition-all duration-700 ease-in-out 
        transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <h2 className="font-poppins-semi-bold text-primary-text text-2xl mb-4">
        {skills.name || "Skill Name"}
      </h2>

      <div
        className={`flex flex-row gap-10 justify-between items-start w-full transition-all duration-900 ease-in-out 
        transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {chunks.map((chunk, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4 items-start">
            {chunk.map((skill, skillIndex) => (
              <Skills
                key={`${colIndex}-${skillIndex}`}
                title={skill.name}
                experience={skill.level}
                icon={skill.icon}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
