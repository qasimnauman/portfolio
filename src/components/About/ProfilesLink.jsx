import Link from "next/link";

const ProfilesLink = ({ to, icon, text }) => {
  return (
    <Link
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-transparent text-[#D0DDF0] border border-[#B5C6E0]/30 hover:bg-[#B5C6E0]/[0.12] hover:border-[#B5C6E0]/50 hover:text-[#E8EEF7] transition-all duration-300 font-poppins-medium focus:outline-none focus:ring-2 focus:ring-[#B5C6E0] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
    >
      {icon}
      <span className="text-sm md:text-base">{text}</span>
    </Link>
  );
};

export default ProfilesLink;
