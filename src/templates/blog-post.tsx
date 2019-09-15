import React, { useEffect, useState } from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import SEO from '../components/Seo'
import HeaderFooterLayout from '../layouts/HeaderFooterLayout'

import styles from './BlogPost.module.css'
import { connect } from 'react-redux'
import { setPrimaryColor } from '../state/actions/theme.actions'
import { ThemeColor } from '../models/Theme'
import { AppState } from '../state/reducer'
import { ThemeState } from '../state/reducers/theme.reducer'

import Img from 'gatsby-image'
import Toc from '../components/blocks/toc/Toc'
import Sidebar from '../components/blocks/sidebar/Sidebar'
import Comments from '../components/blocks/comments/Comments'
import Chip from '../components/elements/chip/Chip'
import Button from '../components/elements/button/Button'
import { subscribeNewsletter } from '../state/actions/newsletter.actions'
import NewsletterDialog from '../components/blocks/newsletter-dialog/NewsletterDialog'
import PostCard from '../components/blocks/post-card/PostCard'

import { Typography } from '@material-ui/core'
import NewsletterIcon from '../components/elements/icons/NewsletterIcon'
import Paper from '../components/elements/paper/Paper'

export interface BlogPostTemplateProps {
  data: any
  pageContext: any
  setPrimaryColor(color: ThemeColor): void
  theme: ThemeState
  subscribeToNewsletter(email: string)
}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPrimaryColor: (primaryColor: ThemeColor) =>
      dispatch(setPrimaryColor(primaryColor)),
    subscribeToNewsletter: (email: string) =>
      dispatch(subscribeNewsletter(email)),
  }
}

const BlogPostTemplate: React.SFC<BlogPostTemplateProps> = props => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  const [open, setOpen] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    props.setPrimaryColor({
      dark: post.frontmatter.colorDark,
      light: post.frontmatter.colorLight,
      main: post.frontmatter.colorMain,
      contrast: '#fff',
    })
  }, [])

  const onNewsletterDialogSubmit = email => {
    if (email) {
      if (email) {
        props.subscribeToNewsletter(email)
      }
    }
    setShowConfirmation(true)
  }

  const openNewsletterDialog = () => {
    setOpen(true)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'newsletter_dialog_open', {
        event_category: 'engagement',
      })
    }
  }

  const onNewsletterDialogClose = () => {
    setOpen(false)
  }

  const isUpdated = post.frontmatter.lastUpdated !== post.frontmatter.date

  return (
    <HeaderFooterLayout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        image={post.frontmatter.image.childImageSharp.fluid.src}
      />
      <div className={styles.grid}>
        <div className={styles.sidebarLeft} />
        <div className={styles.content}>
          <Img
            style={{ width: '100%' }}
            fluid={post.frontmatter.image.childImageSharp.fluid}
          />
          <a
            href="https://twitter.com/malcoded"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <div className={styles.subtitle}>
              <img
                src="/icons/authors/LukasMarx.png"
                style={{ borderRadius: '50%', marginRight: 8 }}
              />
              <div className={styles.meta}>
                <div
                  style={{
                    display: `block`,
                    fontSize: 16,
                  }}
                >
                  <strong style={{ marginBottom: 8 }}>
                    {post.frontmatter.author}
                  </strong>
                  <br />
                  <small>
                    {!isUpdated && post.frontmatter.date}
                    {isUpdated && post.frontmatter.lastUpdated}
                  </small>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginLeft: 16,
                }}
              >
                {post.frontmatter.tags.map((tag: string) => {
                  return <Chip key={tag} label={tag} />
                })}
              </div>
            </div>
          </a>
          <h1>{post.frontmatter.title}</h1>

          <MDXRenderer>{post.body}</MDXRenderer>
          <br />
          <div className={styles.recommended}>
            {post.frontmatter.recommendedPosts.map(rPost => {
              return (
                <Link
                  key={rPost.fields.slug}
                  style={{
                    textDecoration: 'none',

                    color: 'inherit',
                    boxSizing: 'border-box',
                    display: 'flex',
                  }}
                  className={styles.item}
                  to={'/posts' + rPost.fields.slug}
                >
                  <PostCard node={rPost} small />
                </Link>
              )
            })}
          </div>
          <Comments postId={post.frontmatter.id} />
        </div>
        <div className={styles.sidebarRight}>
          <Sidebar>
            <Toc toc={post.tableOfContents} />
            <div
              style={{
                width: 500,
              }}
              onClick={openNewsletterDialog}
            >
              <Paper>
                <div className={styles.newsletterSubscribe}>
                  <div style={{ height: '100%', marginRight: 32 }}>
                    <NewsletterIcon />
                  </div>
                  <Typography variant="h5" component="p" color="inherit">
                    Subscribe to the newsletter
                  </Typography>
                </div>
              </Paper>
            </div>
          </Sidebar>
        </div>
      </div>
      <NewsletterDialog
        open={open}
        showConfirmation={showConfirmation}
        onClose={onNewsletterDialogClose}
        onSubmit={onNewsletterDialogSubmit}
      />
    </HeaderFooterLayout>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPostTemplate)

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }, frontmatter:{released: {eq: true}} ) {
      id
      excerpt(pruneLength: 160)
      tableOfContents
      frontmatter {
        id
        title
        colorLight
        colorMain
        colorDark
        tags
        author
        colorContrast
        recommendedPosts {
          fields {
            slug
          }
          frontmatter {
            title

            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        lastUpdated(formatString: "MMMM DD, YYYY")
      }

      body
    }
  }
`
