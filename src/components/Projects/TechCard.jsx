import Image from "next/image";

const TechnologyCard = ({ Icon, Name, technologySite }) => {
  return (
    <div className="inline-flex items-center gap-2 pl-1 pr-1 text-[#fff] hover:-translate-y-2 transition-all duration-300 ease-in-out">
      <a href={technologySite || "#"} target="_blank" rel="noopener noreferrer">
        <div className="relative w-6 h-6 md:w-8 md:h-8 p-1">
          <Image src={Icon} alt={Name} fill className="object-contain" />
        </div>
      </a>
      <p className="block md:hidden font-poppins-medium text-lg">{Name}</p>
    </div>
  );
};

export default TechnologyCard;
