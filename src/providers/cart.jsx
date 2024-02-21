//@ts-nocheck
import React, { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [cart, setCart] = useState([])

  const onDrawerToggle = open => {
    if (open === undefined) {
      setIsDrawerOpen(prev => !prev)
      return
    }
    setIsDrawerOpen(open)
  }

  const onCartAdd = cartItem => {
    setCart(prev => [...prev, cartItem])
  }

  const onCartRemove = cartItem => {
    if (cart.length === 1) {
      onDrawerToggle()
    }
    setCart(cart.filter(item => item.id !== cartItem.id))
  }

  const updateQuantity = (cartItem, quantity) => {
    setCart(
      cart.map(item => {
        if (item.id === cartItem.id) {
          return {
            ...item,
            quantity
          }
        }
        return item
      })
    )
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        onCartAdd,
        onCartRemove,
        updateQuantity,
        isDrawerOpen,
        onDrawerToggle
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
