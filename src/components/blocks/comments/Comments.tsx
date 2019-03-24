import React from 'react'
import Comment from './Comment'
import GoogleSingInButton from '../../elements/sing-in-button/GoogleSingInButton'
import Paper from '../../elements/paper/Paper'
import { Link } from 'gatsby'
import { Token, User } from '../../../models/Token'
import { connect } from 'react-redux'
import { AppState } from '../../../state/reducer'
import { setUser, setToken } from '../../../state/actions/auth.actions'
import styles from './Comments.module.css'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { darkText, lightText } from '../../../theme/text'
import Button from '../../elements/button/Button'
import {
  createComment,
  queryComments,
} from '../../../state/actions/comment.actions'
import { getComments } from '../../../state/selectors/comment.selectors'
import { Comment as CommentType } from './../../../models/Comment'

export interface CommentsProps {
  postId: string
  user?: User
  comments?: CommentType[]
  setUser?(user: User)
  setToken?(token: string)
  createComment?(postId: string, text: string)
  queryComments?(postId: string)
  theme?: ThemeState
}

export interface CommentsState {
  comment: string
}

const mapStateToProps = (state: AppState, props: CommentsProps) => {
  return {
    user: state.auth.user,
    theme: state.theme,
    comments: getComments(state, props),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user: User) => dispatch(setUser(user)),
    setToken: (token: string) => dispatch(setToken(token)),
    createComment: (postId: string, text: string) =>
      dispatch(createComment(postId, text)),
    queryComments: (postId: string) => dispatch(queryComments(postId)),
  }
}

class Comments extends React.Component<CommentsProps, CommentsState> {
  constructor(props: CommentsProps) {
    super(props)
    this.state = { comment: '' }
    this.onSignedIn = this.onSignedIn.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.submitComment = this.submitComment.bind(this)
  }

  async componentDidMount() {
    this.props.queryComments(this.props.postId)
  }

  submitComment() {
    this.props.createComment(this.props.postId, this.state.comment)
  }

  onSignedIn(token: Token) {
    this.props.setToken(token.access_token)
    this.props.setUser(token.user)
    localStorage.setItem('token', JSON.stringify(token))
  }

  handleChange(e) {
    this.setState({ comment: e.target.value })
  }

  renderHeader() {
    if (this.props.user) {
      return (
        <Paper style={{ padding: 64, marginBottom: 32 }}>
          <div style={{ marginBottom: 32 }}>
            <span style={{ fontSize: 24, fontWeight: 700 }}>
              Leave a comment
            </span>
          </div>
          <textarea
            style={{
              color: this.props.theme!.darkMode
                ? darkText.primary
                : lightText.primary,
            }}
            className={styles.textarea}
            onChange={this.handleChange}
          />
          <div className={styles.actions}>
            <Button onClick={this.submitComment}>Submit</Button>
          </div>
        </Paper>
      )
    } else {
      return (
        <Paper style={{ padding: 64, marginBottom: 32 }}>
          <div style={{ marginBottom: 32 }}>
            <span style={{ fontSize: 24, fontWeight: 700 }}>
              Leave a comment
            </span>
          </div>
          <GoogleSingInButton onSignedIn={this.onSignedIn} />
          <p style={{ fontSize: 12 }}>
            We save your email address, your name and your profile picture on
            our servers when you sing in. Read more in our{' '}
            <Link to="privacy">Privacy Policy</Link>.
          </p>
        </Paper>
      )
    }
  }
  renderComments() {
    if (this.props.comments) {
      return (
        <div>
          {this.props.comments.map(comment => {
            if (!comment.deleted || comment.answers.edges.length > 0)
              return (
                <Comment
                  postId={this.props.postId}
                  key={comment.id}
                  comment={comment}
                />
              )
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderComments()}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)
