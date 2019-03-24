import { createSelector } from 'reselect'
import { AppState } from '../reducer'
import { CommentsProps } from '../../components/blocks/comments/Comments'

const getCommentsForPost = (state: AppState, props: CommentsProps) =>
  state.comment.commentsByPost[props.postId]

export const getComments = createSelector(
  [getCommentsForPost],
  comments => {
    return comments
  }
)
