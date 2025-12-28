import Link from "next/link";

const ProfilesLink = ({ to, icon, text }) => {
  return (
    <Link
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#b5c6e015] text-[#B5C6E0] border border-[#b5c6e020] hover:bg-[#b5c6e025] hover:border-[#b5c6e050] transition-all duration-300 font-poppins-medium"
    >
      {icon}
      <span className="text-sm md:text-base">{text}</span>
    </Link>
  );
};

export default ProfilesLink;
