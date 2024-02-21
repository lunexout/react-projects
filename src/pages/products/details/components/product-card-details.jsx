// @ts-nocheck
import { useSnackbar } from 'notistack'
import React, { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { CartContext } from '../../../../providers/cart'
import { ProductImagesCarousel } from './product-images-carousel'

export const ProductCardDetails = ({ product, commentsNode }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const { enqueueSnackbar } = useSnackbar()

  const { cart, onCartAdd, onCartRemove, onDrawerToggle } =
    useContext(CartContext)

  const onSelectImage = index => {
    setActiveSlideIndex(index)
  }

  const portalNode = document.querySelector('#portal-product-name')

  return (
    <div className='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex gap-8 p-8 h-[335px] mb-12'>
        <img
          className='rounded-lg border h-[335px]'
          src={product.thumbnail}
          alt='product image'
        />
        <div className='flex flex-col justify-between px-5 w-full h-[335px]'>
          <div>
            <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
              {product.title}
            </h5>
            {portalNode !== null &&
              createPortal(
                <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                  {product.title}
                </h5>,
                portalNode
              )}
            <p className='text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>
              {product.description}
            </p>
          </div>
          <div className='h-full flex flex-col justify-between'>
            <div className='flex items-center mt-2.5 mb-5'>
              <div className='flex items-center space-x-1 rtl:space-x-reverse'>
                <svg
                  className='w-4 h-4 text-yellow-300'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <svg
                  className='w-4 h-4 text-yellow-300'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <svg
                  className='w-4 h-4 text-yellow-300'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <svg
                  className='w-4 h-4 text-yellow-300'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <svg
                  className='w-4 h-4 text-gray-200 dark:text-gray-600'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
              </div>
              <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3'>
                5.0
              </span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-3xl font-bold text-gray-900 dark:text-white'>
                ${product.price}
              </span>
              {cart.find(productItem => productItem.id === product.id) ? (
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
              ) : (
                <a
                  onClick={() => {
                    onCartAdd(product)
                    onDrawerToggle(true)
                    enqueueSnackbar(`${product.title} added successfully`, {
                      variant: 'success'
                    })
                  }}
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Add to cart
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='p-8 flex flex-col gap-4'>
        <ProductImagesCarousel
          images={product.images}
          activeSlideIndex={activeSlideIndex}
        />
        <div className='flex gap-4 items-center w-full overflow-x-scroll'>
          {product.images.map((image, index) => {
            return (
              <img
                key={image}
                className='rounded-lg w-[300px] h-[300px] object-cover'
                src={image}
                alt='product image'
                onClick={() => onSelectImage(index)}
              />
            )
          })}
        </div>
        {commentsNode}
      </div>
    </div>
  )
}
