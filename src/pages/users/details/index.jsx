// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BreadCrumb } from '../../../global/breadcrumb'
import { Layout } from '../../../global/layout'
import { Navigation } from '../../../global/navigation'
import { Spinner } from '../../../global/spinner'

const UserDetails = () => {
  const params = useParams()

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      setLoading(true)
      const response = await fetch(
        `https://dummyjson.com/users/${params.userId}`
      )
      const user = await response.json()

      setUser(user)
      setLoading(false)
    }
    getUser()
  }, [])

  const breadcrumbNavigation = [
    { label: 'Users', path: '/users' },
    {
      label: `${user?.firstName ?? ''} ${user?.lastName ?? ''}`,
      path: `/users/${params.userId}`
    }
  ]

  return (
    <>
      <Navigation />
      <Layout>
        <BreadCrumb links={breadcrumbNavigation} />
        {loading || user == null ? (
          <Spinner />
        ) : (
          <div>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
          </div>
        )}
      </Layout>
    </>
  )
}

export default UserDetails
