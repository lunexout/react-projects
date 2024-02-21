import React from 'react'
import { useUser } from '../hooks/use-user'
import { CartProvider } from '../providers/cart'
import { AuthorizedRoutes } from './authorized'
import { UnauthorizedRoutes } from './unauthorized'

export const useProjectRoutes = () => {
  const user = useUser()

  if (user !== null) {
    return (
      <CartProvider>
        <AuthorizedRoutes />
      </CartProvider>
    )
  }

  return <UnauthorizedRoutes />
}
