// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { BreadCrumb } from '../../global/breadcrumb'
import { Layout } from '../../global/layout'
import { Navigation } from '../../global/navigation'
import { UsersTable } from './components/table'

const Users = () => {
  const [search, setSearch] = useState('')
  const [debouncedValue] = useDebounce(search, 500)

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true)
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${debouncedValue}`
      )
      const data = await response.json()

      setUsers(data.users)
      setLoading(false)
    }
    getUsers()
  }, [debouncedValue])

  const breadcrumbNavigation = [{ label: 'Users', path: '/users' }]

  return (
    <>
      <Navigation />
      <Layout>
        <BreadCrumb links={breadcrumbNavigation} />
        <div className='pb-4 bg-white dark:bg-gray-900'>
          <div>
            <label className='sr-only'>Search</label>
            <input
              type='text'
              id='first_name'
              value={search}
              onChange={e => setSearch(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search users'
              required
            />
          </div>
        </div>
        <UsersTable users={users} loading={loading} />
      </Layout>
    </>
  )
}

export default Users
