import Image from "next/image";

const Skills = ({ title, experience, icon }) => {
  return (
    <div className="text-white flex gap-3 justify-center items-center">
      <div className="relative w-8 h-8">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{experience}</p>
      </div>
    </div>
  );
};

export default Skills;
