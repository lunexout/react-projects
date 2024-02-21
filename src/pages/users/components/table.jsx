import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '../../../global/spinner'

export const UsersTable = ({ users, loading }) => {
  const navigate = useNavigate()

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg p-1'>
      {loading ? (
        <Spinner />
      ) : (
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                User name
              </th>
              <th scope='col' className='px-6 py-3'>
                Email
              </th>
              <th scope='col' className='px-6 py-3'>
                Username
              </th>
              <th scope='col' className='px-6 py-3'>
                City
              </th>
              <th scope='col' className='px-6 py-3'>
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return (
                <tr
                  key={user.id}
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                  onClick={() => navigate(`/users/${user.id}`)}
                >
                  <th scope='row' className='px-6 py-4 font-medium'>
                    <div className='flex flex-row space-x-4 items-center'>
                      <img
                        src={user.image}
                        alt='profile-image'
                        className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer'
                      />
                      <p className='font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        {user.firstName} {user.lastName}
                      </p>
                    </div>
                  </th>
                  <td className='px-6 py-4'>{user.email}</td>
                  <td className='px-6 py-4'>{user.username}</td>
                  <td className='px-6 py-4'>{user.address.city}</td>
                  <td className='px-6 py-4'>{user.phone}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}
