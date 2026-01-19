const TechnicalSkill = ({ title, description }) => {
  return (
    <div className="bg-[#B5C6E0]/[0.08] border border-[#B5C6E0]/20 rounded-xl p-6 hover:border-[#B5C6E0]/40 hover:bg-[#B5C6E0]/[0.12] hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-poppins-semi-bold text-[#E8EEF7]">{title}</h3>
        <p className="text-sm font-poppins-regular text-[#D0DDF0]/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TechnicalSkill;
