import * as actions from './../actions/comment.actions'
import { ActionType } from 'typesafe-actions'
import { combineReducers } from 'redux'
import {
  COMMENTS_RESPONSE,
  COMMENTS_REQUEST,
  COMMENTS_CREATE_RESPONSE,
  COMMENTS_UPDATE_RESPONSE,
  COMMENTS_DELETE_RESPONSE,
  COMMENTS_DELETE_REPLY_RESPONSE,
  COMMENTS_REPLY_RESPONSE,
} from '../constants/comment.constants'
import { Comment as CommentType } from './../../models/Comment'

export type CommentState = {
  commentsByPost: { [key: string]: CommentType[] }
  loadingByPost: { [key: string]: boolean }
}

export type CommentAction = ActionType<typeof actions>

export const comment = combineReducers<CommentState, CommentAction>({
  commentsByPost: (state = null, action) => {
    switch (action.type) {
      case COMMENTS_RESPONSE: {
        const newState = JSON.parse(JSON.stringify(state))
        newState[action.payload.postId] = action.payload.comments
        return newState
      }
      case COMMENTS_CREATE_RESPONSE: {
        const newState = JSON.parse(JSON.stringify(state))
        newState[action.payload.post] = [
          action.payload,
          ...newState[action.payload.post],
        ]

        return newState
      }
      case COMMENTS_REPLY_RESPONSE: {
        const newState = JSON.parse(JSON.stringify(state))
        const comments = newState[action.payload.postId]

        const comment = comments.filter(c => c.id === action.payload.commentId)
        comment[0].answers.edges = [
          { node: action.payload.comment },
          ...comment[0].answers.edges,
        ]

        return newState
      }
      case COMMENTS_UPDATE_RESPONSE: {
        const newState = JSON.parse(JSON.stringify(state))
        const comments = newState[action.payload.postId]

        for (const comment of comments) {
          if (comment.id == action.payload.commentId) {
            comment.content = action.payload.text
            break
          }
          if (comment.answers) {
            for (const { node: reply } of comment.answers.edges) {
              if (reply.id === action.payload.commentId) {
                reply.content = action.payload.text
              }
              break
            }
          }
        }

        return newState
      }
      case COMMENTS_DELETE_RESPONSE: {
        const newState = JSON.parse(JSON.stringify(state))
        const comments = newState[action.payload.postId]

        for (const comment of comments) {
          if (comment.id == action.payload.commentId) {
            comment.deleted = true
            break
          }
          if (comment.answers) {
            for (const { node: reply } of comment.answers.edges) {
              if (reply.id === action.payload.commentId) {
                reply.deleted = true
              }
              break
            }
          }
        }

        return newState
      }
      case COMMENTS_DELETE_REPLY_RESPONSE: {
        const newState = JSON.parse(JSON.stringify(state))
        const comments = newState[action.payload.postId]

        for (const comment of comments) {
          if (comment.id == action.payload.commentId) {
            if (comment.answers) {
              for (const { node: reply } of comment.answers.edges) {
                if (reply.id === action.payload.replyId) {
                  reply.deleted = true
                  break
                }
              }
            }
          }
        }

        return newState
      }
      default:
        return state
    }
  },
  loadingByPost: (state = null, action) => {
    switch (action.type) {
      case COMMENTS_REQUEST: {
        return Object.assign(state, {
          [action.payload]: true,
        })
      }
      case COMMENTS_RESPONSE: {
        return Object.assign(state, {
          [action.payload.postId]: false,
        })
      }
      default:
        return state
    }
  },
})
