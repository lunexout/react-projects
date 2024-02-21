import { v4 as uuidv4 } from 'uuid'

export const useNode = () => {
  const insertNode = (tree, commentId, value) => {
    if (tree.id === commentId) {
      tree.replies.push({
        createdAt: new Date(),
        id: uuidv4(),
        value: value,
        replies: []
      })

      return tree
    }

    let latestNode = []
    latestNode = tree.replies.map(ob => {
      return insertNode(ob, commentId, value)
    })

    return { ...tree, replies: latestNode }
  }

  const deleteNode = (tree, id) => {
    for (let i = 0; i < tree.replies.length; i++) {
      const currentItem = tree.replies[i]
      if (currentItem.id === id) {
        tree.replies.splice(i, 1)
        return tree
      } else {
        deleteNode(currentItem, id)
      }
    }
    return tree
  }

  // const editNode = (tree, commentId, value) => {
  //   if (tree.id === commentId) {
  //     tree.name = value
  //     return tree
  //   }

  //   tree.items.map(ob => {
  //     return editNode(ob, commentId, value)
  //   })

  //   return { ...tree }
  // }

  return { insertNode, deleteNode }
}
