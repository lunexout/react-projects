import React, { useEffect, useState } from 'react'

export const ProductImagesCarousel = ({ images, activeSlideIndex }) => {
  const [activeIndex, setActiveIndex] = useState(activeSlideIndex)

  const onNext = () => {
    setActiveIndex(prev => prev + 1)
  }
  const onPrev = () => {
    if (activeSlideIndex !== 0) {
      setActiveIndex(prev => prev - 1)
    }
  }

  useEffect(() => {
    setActiveIndex(activeSlideIndex)
  }, [activeSlideIndex])

  return (
    <div
      id='default-carousel'
      className='relative w-full'
      data-carousel='slide'
    >
      <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
        {images.map((image, index) => {
          return (
            <div
              key={image}
              className={`${
                activeIndex === index ? '' : 'hidden'
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              <img
                src={image}
                className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                alt='Carousel image'
              />
            </div>
          )
        })}
      </div>
      <button
        type='button'
        className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        data-carousel-prev
        onClick={onPrev}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 1 1 5l4 4'
            />
          </svg>
          <span className='sr-only'>Previous</span>
        </span>
      </button>
      <button
        type='button'
        className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        data-carousel-next
        onClick={onNext}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 9 4-4-4-4'
            />
          </svg>
          <span className='sr-only'>Next</span>
        </span>
      </button>
    </div>
  )
}
