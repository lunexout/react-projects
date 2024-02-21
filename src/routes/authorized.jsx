import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import TimeZoneDetails from '../pages/dashboard/details'
import Products from '../pages/products'
import ProductDetails from '../pages/products/details'
import Users from '../pages/users'
import UserDetails from '../pages/users/details'

export const AuthorizedRoutes = () => {
  return (
    <Routes>
      {/* Authorized */}
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/:timeZone' element={<TimeZoneDetails />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:userId' element={<UserDetails />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:productId' element={<ProductDetails />} />
      {/* Not found page */}
      <Route path='*' element={<Navigate to='/dashboard' />} />
    </Routes>
  )
}
