// @ts-nocheck
import { formatDistance } from 'date-fns'
import React, { useContext, useState } from 'react'
import { IconDelete } from '../../assets/icons/delete'
import { IconReply } from '../../assets/icons/reply'
import { AuthContext } from '../../providers/auth'
import { CommentInput } from '../comment-input'
import { DeleteCommentDialog } from './dialogs/delete-comment'
export const CommentItem = ({ onAddComment, onDeleteComment, comment }) => {
  const { user } = useContext(AuthContext)

  const [input, setInput] = useState('')

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const [isOpenReply, setIsOpenReply] = useState(false)

  const onAdd = () => {
    onAddComment(comment.id, input)
    setIsOpenReply(false)
    setInput('')
  }

  const onDelete = () => {
    onDeleteComment(comment.id)
  }

  return (
    <>
      <div>
        {comment.id !== 'COMMENT_SECTION_START' && (
          <div>
            <div className='flex gap-4 items-center'>
              <img
                className='w-10 h-10 p-1 rounded-full'
                src={user?.avatar}
                alt='Comment picture'
              />
              <p className='text-base text-black'>Comment author</p>
              <p className='text-base text-[#67727E]'>
                {formatDistance(comment.createdAt, new Date(), {
                  addSuffix: true
                })}
              </p>
            </div>
            <p className='text-[#67727E]'>{comment.value}</p>
            <div style={{ display: 'flex', marginTop: '5px' }}>
              <>
                <div className='flex gap-4 items-center'>
                  <div className='flex gap-2 items-center'>
                    <IconDelete />
                    <p
                      onClick={() => setIsDeleteDialogOpen(true)}
                      className='text-[#ED6368] cursor-pointer'
                    >
                      Delete
                    </p>
                  </div>
                  {isOpenReply ? (
                    <div>
                      <p
                        onClick={() => setIsOpenReply(false)}
                        className='text-[#5357B6] cursor-pointer'
                      >
                        Close reply
                      </p>
                    </div>
                  ) : (
                    <div className='flex gap-2 items-center'>
                      <IconReply />
                      <p
                        onClick={() => setIsOpenReply(true)}
                        className='text-[#5357B6] cursor-pointer'
                      >
                        Reply
                      </p>
                    </div>
                  )}
                </div>
              </>
            </div>
          </div>
        )}
        <div>
          {comment?.replies?.map(commentBox => {
            return (
              <div className='px-4'>
                <CommentItem
                  key={commentBox.id}
                  onAddComment={onAddComment}
                  onDeleteComment={onDeleteComment}
                  comment={commentBox}
                />
              </div>
            )
          })}
        </div>
        {isOpenReply && (
          <CommentInput
            commentValue={input}
            onCommentChange={setInput}
            onSubmit={onAdd}
          />
        )}
      </div>
      {comment.id === 'COMMENT_SECTION_START' && (
        <CommentInput
          commentValue={input}
          onCommentChange={setInput}
          onSubmit={onAdd}
        />
      )}
      {isDeleteDialogOpen && (
        <DeleteCommentDialog
          content='Delete comment ?'
          onCancel={() => setIsDeleteDialogOpen(false)}
          onConfirm={() => {
            onDelete()
            setIsDeleteDialogOpen(false)
          }}
        />
      )}
    </>
  )
}
