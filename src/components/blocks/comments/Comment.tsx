import React from 'react'
import styles from './Comment.module.css'
import Paper from '../../elements/paper/Paper'
import { Comment as CommentType } from './../../../models/Comment'
import snarkdown from 'snarkdown'
import insane from 'insane'
import IconButton from '../../elements/icon-button/IconButton'
import EditIcon from '../../elements/icons/EditIcon'
import DeleteIcon from '../../elements/icons/DeleteIcon'
import ReplyIcon from '../../elements/icons/ReplyIcon'
import { connect } from 'react-redux'
import { AppState } from '../../../state/reducer'
import { User } from '../../../models/Token'
import Button from '../../elements/button/Button'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { darkText, lightText } from '../../../theme/text'
import {
  replyToComment,
  updateComment,
  deleteComment,
  deleteReply,
} from '../../../state/actions/comment.actions'

export interface CommentProps {
  postId: string
  comment: CommentType
  level?: number
  parent?: CommentType
  user?: User
  theme?: ThemeState
  replyToComment?(postId: string, commentId: string, text: string)
  updateComment?(postId: string, id: string, text: string)
  deleteComment?(postId: string, commentId: string)
  deleteReply?(postId: string, commentId: string, replyId: string)
}

export interface CommentState {
  edit: boolean
  comment: string
  replyText: string
  reply: boolean
}

const mapStateToProps = (state: AppState) => {
  return {
    user: state.auth.user,
    theme: state.theme,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    replyToComment: (postId: string, id: string, text: string) =>
      dispatch(replyToComment(postId, id, text)),
    updateComment: (postId: string, commentId: string, text: string) =>
      dispatch(updateComment(postId, commentId, text)),
    deleteComment: (postId: string, commentId: string) =>
      dispatch(deleteComment(postId, commentId)),
    deleteReply: (postId: string, commentId: string, replyId: string) =>
      dispatch(deleteReply(postId, commentId, replyId)),
  }
}

class Comment extends React.Component<CommentProps, CommentState> {
  constructor(props: CommentProps) {
    super(props)
    this.state = {
      edit: false,
      comment: this.props.comment ? this.props.comment.content : '',
      reply: false,
      replyText: '',
    }
    this.toggleMode = this.toggleMode.bind(this)
    this.replyToComment = this.replyToComment.bind(this)
    this.updateComment = this.updateComment.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
    this.deleteReply = this.deleteReply.bind(this)
    this.timeSince = this.timeSince.bind(this)
    this.renderActions = this.renderActions.bind(this)
    this.handleChangeReply = this.handleChangeReply.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  timeSince() {
    const date = new Date(this.props.comment.creationDate)
    var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)

    var interval = Math.floor(seconds / 31536000)

    if (interval > 1) {
      return interval + ' years'
    }
    interval = Math.floor(seconds / 2592000)
    if (interval > 1) {
      return interval + ' months'
    }
    interval = Math.floor(seconds / 86400)
    if (interval > 1) {
      return interval + ' days'
    }
    interval = Math.floor(seconds / 3600)
    if (interval > 1) {
      return interval + ' hours'
    }
    interval = Math.floor(seconds / 60)
    if (interval > 1) {
      return interval + ' minutes'
    }
    return Math.floor(seconds) + ' seconds'
  }

  sanitize(str: string) {
    return insane(str, {
      allowedTags: [
        'div',
        'h1',
        'h2',
        'h3',
        'h4',
        'pre',
        'p',
        'span',
        'br',
        'b',
        'strong',
        'em',
        'del',
        'ol',
        'ul',
        'li',
        'hr',
      ],
      allowedAttributes: { span: ['class'], pre: ['class'] },
    })
  }

  handleChangeReply(e) {
    this.setState({ replyText: e.target.value })
  }

  handleChange(e) {
    this.setState({ comment: e.target.value })
  }

  toggleMode() {
    this.setState({
      edit: !this.state.edit,
      comment: this.props.comment.content,
    })
  }

  async replyToComment() {
    if (this.state.comment == '') return
    this.props.replyToComment(
      this.props.postId,
      this.props.comment.id,
      this.state.replyText
    )
    this.setState({ reply: false })
  }

  async updateComment() {
    if (this.state.comment == '') return
    this.props.updateComment(
      this.props.postId,
      this.props.comment.id,
      this.state.comment
    )
    this.setState({ edit: false })
  }

  async deleteComment() {
    if (this.props.level > 0 && this.props.parent) {
      this.deleteReply()
    } else {
      this.props.deleteComment(this.props.postId, this.props.comment.id)
    }
  }

  async deleteReply() {
    this.props.deleteReply(
      this.props.postId,
      this.props.parent.id,
      this.props.comment.id
    )
  }

  renderActions() {
    if (this.props.user && this.props.comment.author) {
      if (this.props.comment.author.id === this.props.user.id) {
        return (
          <>
            <IconButton onClick={this.toggleMode}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={this.deleteComment}>
              <DeleteIcon />
            </IconButton>
          </>
        )
      } else if (!this.props.level) {
        return (
          <IconButton onClick={() => this.setState({ reply: true })}>
            <ReplyIcon />
          </IconButton>
        )
      }
    } else {
      return <></>
    }
  }

  renderComment() {
    if (!this.state.edit) {
      return (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: this.sanitize(
                snarkdown(this.props.comment.content || 'deleted')
              ),
            }}
          />
          <div className={styles.actions}>{this.renderActions()}</div>
        </>
      )
    } else {
      return (
        <>
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
          <div className={styles.actions}>
            <Button flat onClick={this.toggleMode}>
              Cancel
            </Button>
            <Button onClick={this.updateComment}>Submit</Button>
          </div>
        </>
      )
    }
  }

  renderReply() {
    if (this.state.reply) {
      return (
        <Paper style={{ padding: '64px 32px 64px' }}>
          <span style={{ fontSize: 20, fontWeight: 500 }}>
            Reply to {this.props.comment.author.displayName}
          </span>
          <textarea
            style={{
              marginTop: 16,
              color: this.props.theme!.darkMode
                ? darkText.primary
                : lightText.primary,
            }}
            className={styles.textarea}
            onChange={this.handleChangeReply}
            value={this.state.replyText}
          />
          <div className={styles.actions}>
            <Button flat onClick={() => this.setState({ reply: false })}>
              Cancel
            </Button>
            <Button onClick={this.replyToComment}>Reply</Button>
          </div>
        </Paper>
      )
    } else {
      return <></>
    }
  }

  render() {
    return (
      <div className={styles.root}>
        <Paper style={{ padding: '64px 32px 64px' }}>
          <div className={styles.avatar}>
            {this.props.comment.author && (
              <>
                <img
                  className={styles.image}
                  src={
                    'data:image/jpg;base64,' + this.props.comment.author.image
                  }
                />

                <span style={{ marginLeft: 12 }}>
                  {this.props.comment.author.displayName}
                </span>
                <span style={{ fontSize: 12, fontWeight: 200 }}>
                  {this.timeSince()}
                </span>
              </>
            )}
          </div>
          <div className={styles.content}>{this.renderComment()}</div>
        </Paper>
        <div className={styles.reply}>
          {this.renderReply()}
          {this.props.comment.answers
            ? this.props.comment.answers.edges.map(({ node: reply }) => {
                if (!reply.deleted) {
                  return (
                    <Comment
                      {...this.props}
                      key={reply.id}
                      parent={this.props.comment}
                      comment={reply}
                      level={1}
                    />
                  )
                }
              })
            : null}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)
