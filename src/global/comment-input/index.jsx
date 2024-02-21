// @ts-nocheck
import React, { useContext } from 'react'
import { AuthContext } from '../../providers/auth'

export const CommentInput = ({ commentValue, onCommentChange, onSubmit }) => {
  const { user } = useContext(AuthContext)

  return (
    <div className='flex gap-4 p-[28px] bg-white rounded-lg'>
      <img
        className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer'
        src={user?.avatar}
        alt='Bordered avatar'
      />
      <textarea
        id='message'
        rows='4'
        class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='Add comments...'
        value={commentValue}
        onChange={e => onCommentChange(e.target.value)}
      />
      <button
        onClick={onSubmit}
        className='border-none bg-[#5357B6] h-[48px] w-[104px] px-[30px] py-[12px] text-base rounded-lg'
      >
        SEND
      </button>
    </div>
  )
}
