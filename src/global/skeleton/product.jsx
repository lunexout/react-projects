import React from 'react'

export const ProductSkeleton = () => {
  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div
        role='status'
        className='bg-gray-300 p-8 rounded-t-lg h-[400px] animate-pulse dark:bg-gray-700'
      />
      <div className='px-5 pb-5'>
        <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 animate-pulse mt-4' />
        <div className='flex items-center mt-2.5 mb-5'>
          <div className='flex items-center space-x-1 rtl:space-x-reverse'>
            <div className='px-5 py-6 bg-gray-200 dark:bg-gray-700 w-48 mb-4 rounded-md animate-pulse' />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4 animate-pulse' />
          <div className='px-5 py-6 bg-gray-200 rounded-md dark:bg-gray-700 w-32 mb-4 animate-pulse' />
        </div>
      </div>
    </div>
  )
}
