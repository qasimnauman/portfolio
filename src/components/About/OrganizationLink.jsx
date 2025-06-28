import React from 'react'
import { Link } from 'react-router-dom'

const OrganizationLink = ({
    to,
    icon,
    // text
}) => {
  return (
    <Link
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:scale-105"
    >
      {icon}
    </Link>
  )
}

export default OrganizationLink