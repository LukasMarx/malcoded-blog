import { ThemeState, theme } from './reducers/theme.reducer'
import { auth, AuthState } from './reducers/auth.reducer'
import { comment, CommentState } from './reducers/comment.reducer'

export interface AppState {
  theme: ThemeState
  auth: AuthState
  comment: CommentState
}

export const reducer = {
  theme,
  auth,
  comment,
}
