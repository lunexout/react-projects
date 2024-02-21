// @ts-nocheck
import { useSnackbar } from 'notistack'
import React, { useContext } from 'react'
import { CartContext } from '../../../providers/cart'

export const ProductCartItem = ({ product }) => {
  const { enqueueSnackbar } = useSnackbar()

  const { onCartRemove, updateQuantity } = useContext(CartContext)

  return (
    <div key={product.id}>
      <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
        <img
          className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
          src={product.thumbnail}
          alt=''
        />
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {product.title}
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            ${product.price}
          </p>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {product.description}
          </p>
          <form className='max-w-xs mb-4'>
            <label
              for='counter-input'
              className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Choose quantity:
            </label>
            <div className='relative flex items-center'>
              <button
                type='button'
                id='decrement-button'
                data-input-counter-decrement='counter-input'
                className='flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                onClick={() => {
                  if (product?.quantity > 1) {
                    updateQuantity(product, product.quantity - 1)
                  }
                }}
              >
                <svg
                  className='w-2.5 h-2.5 text-gray-900 dark:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 2'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 1h16'
                  />
                </svg>
              </button>
              <p className='flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center mx-4'>
                {product.quantity ?? 1}
              </p>
              <button
                type='button'
                id='increment-button'
                data-input-counter-increment='counter-input'
                className='flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                onClick={() => {
                  updateQuantity(product, (product.quantity ?? 1) + 1)
                }}
              >
                <svg
                  className='w-2.5 h-2.5 text-gray-900 dark:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </button>
            </div>
          </form>
          <a
            onClick={() => {
              onCartRemove(product)
              enqueueSnackbar(`${product.title} removed successfully`, {
                variant: 'error'
              })
            }}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Remove from cart
          </a>
        </div>
      </div>
    </div>
  )
}
