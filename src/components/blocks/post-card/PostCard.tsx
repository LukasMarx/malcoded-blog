import React from 'react'
import Paper from '../../elements/paper/Paper'
import Chip from '../../elements/chip/Chip'
import Img from 'gatsby-image'
import styles from './PostCard.module.css'
import { AppState } from '../../../state/reducer'
import { connect } from 'react-redux'
import { ThemeState } from '../../../state/reducers/theme.reducer'
import { darkText, lightText } from '../../../theme/text'

export interface PostCardProps {
  node: any
  small?: boolean
  theme?: ThemeState
}

export interface PostCardState {}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

class PostCard extends React.Component<PostCardProps, PostCardState> {
  constructor(props: PostCardProps) {
    super(props)
  }
  render() {
    const node = this.props.node
    const title = node.frontmatter.title || node.fields.slug
    return (
      <Paper style={{ padding: 16, width: '100%' }}>
        <div style={{ margin: -16, marginBottom: 16 }}>
          <Img
            style={{ width: '100%' }}
            fluid={node.frontmatter.image.childImageSharp.fluid}
          />
        </div>
        <h2
          className={styles.title}
          style={{ fontSize: this.props.small ? 16 : 24 }}
        >
          {title}
        </h2>
        <div className={styles.dateRow}>
          <small style={{ marginRight: 8 }}>{node.frontmatter.date}</small>

          {node.frontmatter.tags &&
            node.frontmatter.tags.map((tag: string) => {
              return <Chip key={tag} label={tag} />
            })}
        </div>
        <p
          className={styles.excerpt}
          style={{
            color: this.props.theme.darkMode
              ? darkText.secondary
              : lightText.secondary,
          }}
          dangerouslySetInnerHTML={{ __html: node.excerpt }}
        />
      </Paper>
    )
  }
}

export default connect(mapStateToProps)(PostCard)
