// @ts-nocheck
import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/auth'
import { Drawer } from '../cart/drawer'

const navigationItems = [
  {
    path: '/dashboard',
    label: 'Dashboard'
  },
  {
    path: '/users',
    label: 'Users'
  },
  {
    path: '/products',
    label: 'Products'
  }
]

export const Navigation = () => {
  const navigate = useNavigate()

  const location = useLocation()

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

  const { unauthorize, user } = useContext(AuthContext)

  return (
    <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a
          href='https://flowbite.com/'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='h-8'
            alt='Flowbite Logo'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Flowbite
          </span>
        </a>
        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <div className='flex space-x-8 relative'>
            <div id='portal-product-name' />
            <Drawer />
            <img
              className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer'
              src={user?.avatar}
              alt='Bordered avatar'
              data-dropdown-toggle='dropdown'
              onClick={() => setDropdownIsOpen(prev => !prev)}
            />
            {dropdownIsOpen && (
              <div
                id='dropdown'
                className='z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-[40px]'
              >
                <ul
                  className='py-2 text-sm text-gray-700 dark:text-gray-200'
                  aria-labelledby='dropdownDefaultButton'
                >
                  <li>
                    <button
                      onClick={() => {
                        unauthorize(() => navigate('/'))
                      }}
                      className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left'
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            {navigationItems.map(navigation => {
              return (
                <li key={navigation.path}>
                  <Link
                    to={navigation.path}
                    className={`block py-2 px-3 ${
                      location.pathname.includes(navigation.path)
                        ? 'text-blue-500'
                        : 'text-white'
                    } bg-blue-700 rounded md:bg-transparent md:p-0`}
                  >
                    {navigation.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
