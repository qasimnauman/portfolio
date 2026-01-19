import Link from 'next/link'

const OrganizationLink = ({
    to,
    icon,
    // text
}) => {
  return (
    <Link
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 p-2 rounded-lg bg-transparent border border-[#B5C6E0]/30 hover:bg-[#B5C6E0]/[0.12] hover:border-[#B5C6E0]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B5C6E0]"
    >
      {icon}
    </Link>
  )
}

export default OrganizationLink