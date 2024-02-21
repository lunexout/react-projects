// @ts-nocheck
import React from 'react'
import { Layout } from '../../global/layout'
import { Navigation } from '../../global/navigation'
import { useUser } from '../../hooks/use-user'
import { TimeZones } from './components/time-zones'

const Dashboard = () => {
  const user = useUser()

  return (
    <>
      <Navigation />
      <Layout>
        <div className='flex flex-col gap-4'>
          <h1>
            Dashboard {user.firstName} {user.lastName}
          </h1>
          <TimeZones />
        </div>
      </Layout>
    </>
  )
}

export default Dashboard
