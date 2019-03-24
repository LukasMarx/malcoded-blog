import { Middleware, MiddlewareAPI, Dispatch } from 'redux'
import * as actions from './../actions/comment.actions'
import { ActionType } from 'typesafe-actions'
import {
  commentsQuery,
  submitCommentMutation,
  deleteCommentMutation,
  replyCommentMutation,
  deleteReplyMutation,
  updateCommentMutation,
} from './commentQueries'
import {
  COMMENTS_REQUEST,
  COMMENT_CREATE_REQUEST,
  COMMENT_UPDATE_REQUEST,
  COMMENT_DELETE_REQUEST,
  COMMENT_REPLY_REQUEST,
  COMMENT_DELETE_REPLY_REQUEST,
} from '../constants/comment.constants'

import { Comment } from './../../models/Comment'
import { AppState } from '../reducer'

export type CommentAction = ActionType<typeof actions>

export const CommentMiddleware: Middleware = ({
  getState,
  dispatch,
}: MiddlewareAPI) => (next: Dispatch) => (action: CommentAction) => {
  const state: AppState = getState()
  const token = state.auth.token
  setTimeout(async () => {
    switch (action.type) {
      case COMMENTS_REQUEST: {
        const comments = await getAllCommentsForPost(action.payload)
        dispatch(actions.queryCommentsResponse(action.payload, comments))
        break
      }
      case COMMENT_CREATE_REQUEST: {
        const comment = await createCommentForPost(
          action.payload.postId,
          action.payload.text,
          token
        )
        dispatch(actions.createCommentResponse(comment))
        break
      }
      case COMMENT_UPDATE_REQUEST: {
        await updateComment(
          action.payload.commentId,
          action.payload.text,
          token
        )
        dispatch(
          actions.updateCommentResponse(
            action.payload.postId,
            action.payload.commentId,
            action.payload.text
          )
        )
        break
      }
      case COMMENT_DELETE_REQUEST: {
        await deleteComment(action.payload.commentId, token)
        dispatch(
          actions.deleteCommentResponse(
            action.payload.postId,
            action.payload.commentId
          )
        )
        break
      }
      case COMMENT_REPLY_REQUEST: {
        const comment = await replyToComment(
          action.payload.commentId,
          action.payload.text,
          token
        )
        dispatch(
          actions.replyToCommentResponse(
            action.payload.postId,
            action.payload.commentId,
            comment
          )
        )
        break
      }
      case COMMENT_DELETE_REPLY_REQUEST: {
        await deleteReply(
          action.payload.commentId,
          action.payload.replyId,
          token
        )
        dispatch(
          actions.deleteReplyResponse(
            action.payload.postId,
            action.payload.commentId,
            action.payload.replyId
          )
        )
        break
      }
    }
  }, 0)

  const returnValue = next(action)
  return returnValue
}

async function getAllCommentsForPost(postId: string): Promise<Comment[]> {
  const result = await fetch(`${process.env.GATSBY_BASE_URL}/v1/api/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: commentsQuery,
      variables: { postId: postId },
    }),
  })
  const json = await result.json()

  return json.data.getCommentsForPost.edges.map(({ node }) => node)
}

async function createCommentForPost(
  postId: string,
  text: string,
  token: string
): Promise<Comment> {
  console.log(process.env.GATSBY_BASE_URL)
  const result = await fetch(`${process.env.GATSBY_BASE_URL}/v1/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: submitCommentMutation,
      variables: {
        postId: postId,
        createCommentInput: { content: text },
      },
    }),
  })
  const json = await result.json()

  return json.data.createCommentForPost
}

async function deleteComment(commentId: string, token: string): Promise<void> {
  const result = await fetch(`${process.env.GATSBY_BASE_URL}/v1/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: deleteCommentMutation,
      variables: {
        commentId: commentId,
      },
    }),
  })
  const json = await result.json()
}

async function updateComment(
  commentId: string,
  text: string,
  token: string
): Promise<void> {
  const result = await fetch(`${process.env.GATSBY_BASE_URL}/v1/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: updateCommentMutation,
      variables: {
        commentId: commentId,
        updateCommentInput: { content: text },
      },
    }),
  })
  const json = await result.json()
}

async function replyToComment(
  commentId: string,
  text: string,
  token: string
): Promise<Comment> {
  const result = await fetch(`${process.env.GATSBY_BASE_URL}/v1/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: replyCommentMutation,
      variables: {
        commentId: commentId,
        createCommentInput: { content: text },
      },
    }),
  })
  const json = await result.json()

  return json.data.answerComment
}

async function deleteReply(
  commentId: string,
  replyId: string,
  token: string
): Promise<void> {
  const result = await fetch(`${process.env.GATSBY_BASE_URL}/v1/api/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: deleteReplyMutation,
      variables: {
        commentId: commentId,
        answerId: replyId,
      },
    }),
  })
  const json = await result.json()
}
