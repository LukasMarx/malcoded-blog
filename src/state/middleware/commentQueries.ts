export const commentsQuery = `
query getCommentsForPost($postId: ID!) {
  getCommentsForPost(postId: $postId) {
    edges {
      node {
        id
        author {
          id
          displayName
          image
        }
        content
        creationDate
        updateDate
        post
        deleted
        answers {
          edges {
            node {
              id
              author {
                id
                displayName
                image
              }
              content
              creationDate
              updateDate
              deleted
            }
          }
        }
      }
    }
  }
}`

export const submitCommentMutation = `
mutation createCommentForPost($postId: ID!, $createCommentInput: CreateCommentInput!) {
  createCommentForPost(postId: $postId, createCommentInput: $createCommentInput) {
    id
    author {
      id
      displayName
      image
    }
    content
    creationDate
    updateDate
    post
    deleted
    answers {
      edges {
        node {
          id
          author {
            id
            displayName
            image
          }
          content
          creationDate
          updateDate
          deleted
        }
      }
    }
  }
}
`

export const deleteCommentMutation = `
mutation deleteComment($commentId: ID!) {
  deleteComment(commentId: $commentId)
}
`

export const deleteReplyMutation = `
mutation deleteAnswer($commentId: ID!, $answerId: ID!) {
  deleteAnswer(commentId: $commentId, answerId: $answerId) {
    id
  }
}
`

export const replyCommentMutation = `
mutation answerComment($commentId: ID!, $createCommentInput: CreateCommentInput!) {
  answerComment(commentId: $commentId, createCommentInput: $createCommentInput) {
    id
    author {
      id
      displayName
      image
    }
    content
    creationDate
    updateDate
    post
    deleted
    answers {
      edges {
        node {
          id
          author {
            id
            displayName
            image
          }
          content
          creationDate
          updateDate
        }
      }
    }
  }
}
`
export const updateCommentMutation = `
mutation updateComment($commentId: ID!, $updateCommentInput: UpdateCommentInput!) {
  updateComment(commentId: $commentId, updateCommentInput: $updateCommentInput) {
    id
    content
    post
    deleted
  }
}
`
