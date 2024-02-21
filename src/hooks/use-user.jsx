// @ts-nocheck
import { useContext } from 'react'
import { AuthContext } from '../providers/auth'

export const useUser = () => {
  const { user } = useContext(AuthContext)

  if (user === null) {
    return null
  }

  return user
}
