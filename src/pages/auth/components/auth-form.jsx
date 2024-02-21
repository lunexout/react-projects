// @ts-nocheck
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../providers/auth'

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

export const AuthForm = () => {
  const navigate = useNavigate()

  const { authorize } = useContext(AuthContext)

  const {
    formState: { errors },
    handleSubmit,
    register
  } = useForm({
    defaultValues: {
      email: 'example@gmail.com',
      password: 'Password1'
    }
  })

  const onSubmit = form => {
    authorize(form.email, form.password, () => navigate('/dashboard'))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 md:space-y-6'>
      <div>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Your email
        </label>
        <input
          type='text'
          {...register('email', {
            required: {
              value: true,
              message: 'This field is required'
            },
            pattern: {
              value: emailRegex,
              message: 'This email is not correct'
            }
          })}
          className={`bg-gray-50 border-2 ${
            errors?.email ? 'border-red-600' : 'border-gray-300'
          } text-gray-900 sm:text-sm rounded-lg block w-full p-2.5`}
          placeholder='name@company.com'
        />
        {errors?.email ? (
          <p className='text-sm text-red-500'>{errors?.email?.message}</p>
        ) : null}
      </div>
      <div>
        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Password
        </label>
        <input
          type='password'
          {...register('password', {
            required: {
              value: true,
              message: 'This field is required'
            },
            minLength: {
              value: 8,
              message: 'Password should include at least 8 characters'
            }
          })}
          placeholder='••••••••'
          className={`bg-gray-50 border-2 ${
            errors?.password ? 'border-red-600' : 'border-gray-300'
          } text-gray-900 sm:text-sm rounded-lg block w-full p-2.5`}
        />
        {errors?.password ? (
          <p className='text-sm text-red-500'>{errors?.password?.message}</p>
        ) : null}
      </div>
      <div className='flex items-center justify-between'>
        <a
          href='#'
          className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'
        >
          Forgot password?
        </a>
      </div>
      <button
        type='submit'
        className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
      >
        Sign in
      </button>
      <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
        Don’t have an account yet?{' '}
        <a
          href='#'
          className='font-medium text-primary-600 hover:underline dark:text-primary-500'
        >
          Sign up
        </a>
      </p>
    </form>
  )
}
