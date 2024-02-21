// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IconDay } from '../../../assets/icons/day'
import { IconReply } from '../../../assets/icons/reply'
import { Layout } from '../../../global/layout'
import { Navigation } from '../../../global/navigation'

const TimeZoneDetails = () => {
  const [timeZone, setTimeZone] = useState(null)

  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const params = useParams()

  const formattedTimeZoe = params?.timeZone.split('-').join('/')

  useEffect(() => {
    const getTimeZone = async () => {
      const response = await fetch(
        `https://worldtimeapi.org/api/timezone/${formattedTimeZoe}`
      )
      const data = await response.json()

      setTimeZone(data)
    }
    getTimeZone()
  }, [])

  const breadcrumbNavigation = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: formattedTimeZoe, path: `/dashboard/${formattedTimeZoe}` }
  ]

  if (!timeZone) {
    return null
  }

  const intlTimeZone = new Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: formattedTimeZoe
  })

  const convertedDateIntoTimezone = intlTimeZone.format(
    new Date(timeZone.datetime)
  )

  // const hours = new Date(convertedDateIntoTimezone).getHours()

  const hours = new Date(timeZone.datetime).toLocaleString('en-GB', {
    hour12: false,
    hour: 'numeric',
    timeZone: formattedTimeZoe
  })
  const isDayTime = hours > 6 && hours < 20

  return (
    <>
      <Navigation />
      <Layout>
        <div
          className={`relative w-full h-[800px] px-[165px] py-[56px] ${
            isDayTime ? 'bg-day' : 'bg-night'
          }`}
        >
          <div className='flex flex-col gap-[233px]'>
            {!isDetailsOpen && (
              <p className='text-[18px]'>
                “The science of operations, as derived from mathematics more
                especially, is a science of itself, and has its own abstract
                truth and value.”{' '}
                <span className='font-bold'>
                  <br />
                  Ada Lovelace
                </span>
              </p>
            )}
            <div className='w-full flex justify-between'>
              <div className='flex flex-col gap-4'>
                <div className='flex gap-2 items-center'>
                  <IconDay />
                  <p className='text-[20px] tracking-[4px]'>
                    {isDayTime
                      ? 'GOOD MORNING, IT’S CURRENTLY'
                      : 'GOOD EVENING, IT’S CURRENTLY'}
                  </p>
                </div>
                <p className='text-[200px] -tracking-[5px] leading-[200px]'>
                  {convertedDateIntoTimezone}
                </p>
                <p className='text-[24px] tracking-[4.8px] font-bold uppercase'>
                  IN {timeZone.timezone}
                </p>
              </div>
              <div>
                <button
                  className='px-[28px] py-[15px] bg-white tracking-[5px] items-center text-black rounded-xl flex gap-4'
                  onClick={() => setIsDetailsOpen(prev => !prev)}
                >
                  {isDetailsOpen ? 'LESS' : 'MORE'}
                  <IconReply />
                </button>
              </div>
            </div>
          </div>
        </div>
        {isDetailsOpen && (
          <div className='absolute flex gap-[242px] bg-black bottom-[232px] z-10 max-w-[800px]'>
            <div className='h-[400px] w-full flex flex-col gap-[42px]'>
              <div className='flex flex-col gap-[9px]'>
                <p className='uppercase text-[15px] tracking-[3px]'>
                  Current timezone
                </p>
                <h3 className='uppercase text-[56px] leading-[67.77px] font-bold'>
                  {formattedTimeZoe}
                </h3>
              </div>
              <div className='flex flex-col gap-[9px]'>
                <p className='uppercase text-[15px] tracking-[3px]'>
                  Day of the year
                </p>
                <h3 className='uppercase text-[56px] leading-[67.77px] font-bold'>
                  {timeZone.day_of_year}
                </h3>
              </div>
            </div>
            <div className='h-[400px] w-full flex flex-col gap-[42px]'>
              <div className='flex flex-col gap-[9px]'>
                <p className='uppercase text-[15px] tracking-[3px]'>
                  Day of the week
                </p>
                <h3 className='uppercase text-[56px] leading-[67.77px] font-bold'>
                  {timeZone.day_of_week}
                </h3>
              </div>
              <div className='flex flex-col gap-[9px]'>
                <p className='uppercase text-[15px] tracking-[3px]'>
                  Week number
                </p>
                <h3 className='uppercase text-[56px] leading-[67.77px] font-bold'>
                  {timeZone.week_number}
                </h3>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  )
}

export default TimeZoneDetails
