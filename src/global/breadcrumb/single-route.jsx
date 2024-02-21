import React from 'react'
import { Link } from 'react-router-dom'
import { IconArrowRight } from '../../assets/icons/arrow-right'

export const SingleBreadcrumbRoute = ({ label, path }) => {
  return (
    <li>
      <div className='flex items-center'>
        <IconArrowRight />
        <Link
          to={path}
          className='ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white'
        >
          {label}
        </Link>
      </div>
    </li>
  )
}
