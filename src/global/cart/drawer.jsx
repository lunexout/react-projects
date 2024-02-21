// @ts-nocheck
import React, { useContext } from 'react'
import { CartContext } from '../../providers/cart'
import { ProductCartItem } from './product-cart-item'

export const Drawer = () => {
  const { cart, isDrawerOpen, onDrawerToggle } = useContext(CartContext)

  return (
    <>
      <button
        className='relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        onClick={() => onDrawerToggle()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='file: h-6 w-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
          />
        </svg>
        <span className='sr-only'>Cart items</span>
        <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900'>
          {cart.length}
        </div>
      </button>
      <div
        className={`fixed top-0 -left-[32px] z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-[400px] dark:bg-gray-800 ${
          isDrawerOpen ? '' : '-translate-x-full'
        }`}
        aria-labelledby='drawer-label'
      >
        <h5
          id='drawer-label'
          className='inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400'
        >
          <svg
            className='w-4 h-4 me-2.5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
          </svg>
          Cart
        </h5>
        <button
          type='button'
          data-drawer-hide='drawer-example'
          aria-controls='drawer-example'
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white'
          onClick={() => onDrawerToggle()}
        >
          <svg
            className='w-3 h-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
            />
          </svg>
          <span className='sr-only'>Close menu</span>
        </button>

        {cart.length === 0 && <h3 className='text-2xl'>This cart is empty</h3>}
        <div className='flex flex-col gap-y-6'>
          {cart.length > 0 && (
            <>
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                Total: ${' '}
                {cart.reduce((accumulator, currentProduct) => {
                  return (
                    accumulator +
                    currentProduct.price * (currentProduct.quantity ?? 1)
                  )
                }, 0)}
              </span>
              {cart.map(product => {
                return <ProductCartItem key={product.id} product={product} />
              })}
            </>
          )}
        </div>
      </div>
    </>
  )
}
