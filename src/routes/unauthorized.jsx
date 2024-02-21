import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Auth from '../pages/auth'

export const UnauthorizedRoutes = () => {
  return (
    <Routes>
      {/* Unauthorized */}
      <Route path='/' element={<Auth />} />
      {/* Not found page */}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
