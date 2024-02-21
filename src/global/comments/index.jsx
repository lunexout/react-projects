// @ts-nocheck
import React, { useState } from 'react'
import { useNode } from '../../hooks/use-node'
import { CommentItem } from './comment-item'

const commentsList = {
  id: 'COMMENT_SECTION_START',
  replies: []
}

export const Comments = () => {
  const [comments, setComments] = useState(commentsList)

  const { insertNode, deleteNode } = useNode()

  const onAddComment = (commentId, value) => {
    const finalStructure = insertNode(comments, commentId, value)
    setComments(finalStructure)
  }

  const onDeleteComment = commentId => {
    const finalStructure = deleteNode(comments, commentId)
    setComments({ ...finalStructure })
  }

  return (
    <div className='flex flex-col gap-5'>
      <input type='file' multiple />
      <CommentItem
        onAddComment={onAddComment}
        onDeleteComment={onDeleteComment}
        comment={comments}
      />
    </div>
  )
}
