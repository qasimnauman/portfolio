const TechnicalSkill = ({ title, description }) => {
  return (
    <div className="bg-[#b5c6e015] border border-[#b5c6e020] rounded-xl p-6 hover:border-[#b5c6e050] hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-poppins-semi-bold text-[#B5C6E0]">{title}</h3>
        <p className="text-sm font-poppins-regular text-[#B5C6E0]/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TechnicalSkill;
