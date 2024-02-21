//@ts-nocheck
import React, { createContext, useState } from 'react'
import { users } from './users'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const authorize = (login, password, callback) => {
    users.forEach(user => {
      if (user.email === login && user.password === password) {
        setUser(user)
        callback()
      }
    })
  }

  const unauthorize = callback => {
    setUser(null)
    callback()
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        authorize,
        unauthorize
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
