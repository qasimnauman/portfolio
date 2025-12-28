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
      className="flex items-center justify-center gap-2 p-2 rounded-lg bg-[#b5c6e015] border border-[#b5c6e020] hover:bg-[#b5c6e025] hover:border-[#b5c6e050] transition-all duration-300"
    >
      {icon}
    </Link>
  )
}

export default OrganizationLink