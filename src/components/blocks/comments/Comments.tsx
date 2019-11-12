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
import satellite from './../../../assets/malcoded-satellite.svg'
import { lightBackground, darkBackground } from '../../../theme/background'
import { defaultPrimaryColor } from '../../../theme/colors'

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
  private domRef: React.RefObject<HTMLDivElement>

  constructor(props: CommentsProps) {
    super(props)
    this.state = { comment: '' }
    this.onSignedIn = this.onSignedIn.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.submitComment = this.submitComment.bind(this)
    this.domRef = React.createRef()
  }

  async componentDidMount() {
    this.props.queryComments(this.props.postId)
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          this.props.queryComments(this.props.postId)
          observer.unobserve(this.domRef.current)
        }
      },
      {
        rootMargin: '1000px 0px 0px 0px',
      }
    )
    observer.observe(this.domRef.current)
  }

  submitComment() {
    if (this.state.comment !== '') {
      this.props.createComment(this.props.postId, this.state.comment)
      this.setState({ comment: '' })
    }
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
        <Paper style={{ padding: 0, marginBottom: 32 }}>
          <div
            className={styles.leaveAComment}
            style={{
              background: `url(${satellite})`,
            }}
          >
            <div style={{ marginBottom: 32 }}>
              <span style={{ fontSize: 24, fontWeight: 700 }}>
                Leave a comment
              </span>
            </div>
            <div className={styles.textareaWrapper}>
              <textarea
                style={{
                  color: this.props.theme!.darkMode
                    ? darkText.primary
                    : lightText.primary,
                }}
                className={styles.textarea}
                onChange={this.handleChange}
                value={this.state.comment}
              />
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: 200,
                  backgroundColor: this.props.theme.darkMode
                    ? darkBackground.paper
                    : lightBackground.paper,
                  opacity: 0.9,
                  borderRadius: 5,
                }}
              />
            </div>
            <div className={styles.actions}>
              <Button
                style={{
                  backgroundColor: 'white',
                  color: defaultPrimaryColor.main,
                }}
                onClick={this.submitComment}
              >
                Submit
              </Button>
            </div>
          </div>
        </Paper>
      )
    } else {
      return (
        <Paper
          style={{
            padding: 0,
            marginBottom: 32,
          }}
        >
          <div
            className={styles.leaveAComment}
            style={{
              background: `url(${satellite})`,
            }}
          >
            <div style={{ marginBottom: 32 }}>
              <span style={{ fontSize: 24, fontWeight: 700 }}>
                Leave a comment
              </span>
            </div>
            <GoogleSingInButton onSignedIn={this.onSignedIn} />
            <p style={{ fontSize: 12, width: '50%' }}>
              We save your email address, your name and your profile picture on
              our servers when you sing in. Read more in our{' '}
              <Link to="privacy">Privacy Policy</Link>.
            </p>
          </div>
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
      <div ref={this.domRef}>
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
