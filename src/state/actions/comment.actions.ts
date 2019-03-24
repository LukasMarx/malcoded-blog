import { action } from 'typesafe-actions'
import {
  COMMENTS_REQUEST,
  COMMENT_UPDATE_REQUEST,
  COMMENT_DELETE_REQUEST,
  COMMENT_DELETE_REPLY_REQUEST,
  COMMENTS_RESPONSE,
  COMMENT_CREATE_REQUEST,
  COMMENTS_CREATE_RESPONSE,
  COMMENT_REPLY_REQUEST,
  COMMENTS_REPLY_RESPONSE,
  COMMENTS_DELETE_RESPONSE,
  COMMENTS_DELETE_REPLY_RESPONSE,
  COMMENTS_UPDATE_RESPONSE,
} from '../constants/comment.constants'
import { Comment as CommentType } from './../../models/Comment'

export const queryComments = (postId: string) =>
  action(COMMENTS_REQUEST, postId)

export const queryCommentsResponse = (
  postId: string,
  comments: CommentType[]
) => action(COMMENTS_RESPONSE, { postId, comments })

export const updateComment = (
  postId: string,
  commentId: string,
  text: string
) => action(COMMENT_UPDATE_REQUEST, { postId, commentId, text })

export const updateCommentResponse = (
  postId: string,
  commentId: string,
  text: string
) => action(COMMENTS_UPDATE_RESPONSE, { postId, commentId, text })

export const createComment = (postId: string, text: string) =>
  action(COMMENT_CREATE_REQUEST, { postId, text })

export const createCommentResponse = (comment: CommentType) =>
  action(COMMENTS_CREATE_RESPONSE, comment)

export const replyToComment = (
  postId: string,
  commentId: string,
  text: string
) => action(COMMENT_REPLY_REQUEST, { postId, commentId, text })

export const replyToCommentResponse = (
  postId: string,
  commentId: string,
  comment: CommentType
) => action(COMMENTS_REPLY_RESPONSE, { postId, commentId, comment })

export const deleteComment = (postId: string, commentId: string) =>
  action(COMMENT_DELETE_REQUEST, { postId, commentId })

export const deleteCommentResponse = (postId: string, commentId: string) =>
  action(COMMENTS_DELETE_RESPONSE, { postId, commentId })

export const deleteReply = (
  postId: string,
  commentId: string,
  replyId: string
) => action(COMMENT_DELETE_REPLY_REQUEST, { postId, commentId, replyId })

export const deleteReplyResponse = (
  postId: string,
  commentId: string,
  replyId: string
) => action(COMMENTS_DELETE_REPLY_RESPONSE, { postId, commentId, replyId })
