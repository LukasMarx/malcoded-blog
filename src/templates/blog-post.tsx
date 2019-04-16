import React, { useEffect, useState } from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

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

  useEffect(() => {
    props.setPrimaryColor({
      dark: post.frontmatter.colorDark,
      light: post.frontmatter.colorLight,
      main: post.frontmatter.colorMain,
      contrast: '#fff',
    })
  }, [])

  const onNewsletterDialogClosed = (value: any) => {
    if (value.success) {
      if (value.email) {
        props.subscribeToNewsletter(value.email)
      }
    }
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
          <h1>{post.frontmatter.title}</h1>
          <div className={styles.subtitle}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 16,
              }}
            >
              {post.frontmatter.tags.map((tag: string) => {
                return <Chip key={tag} label={tag} />
              })}
            </div>
            <small
              style={{
                display: `block`,
                fontSize: 16,
              }}
            >
              <strong>Published:</strong> {post.frontmatter.date} -{' '}
              {isUpdated && (
                <>
                  <strong>Last Updated: </strong>
                  {post.frontmatter.lastUpdated} -{' '}
                </>
              )}
              <strong>Author: </strong>
              {post.frontmatter.author}
            </small>
          </div>
          <MDXRenderer>{post.code.body}</MDXRenderer>
          <br />
          <Comments postId={post.frontmatter.id} />
        </div>
        <div className={styles.sidebarRight}>
          <Sidebar>
            <Toc toc={post.tableOfContents} />
            <Button style={{ marginTop: 32 }} onClick={() => setOpen(true)}>
              Subscribe to the newsletter
            </Button>
            {}
          </Sidebar>
        </div>
      </div>
      <NewsletterDialog open={open} onClose={onNewsletterDialogClosed} />
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
    mdx(fields: { slug: { eq: $slug } }) {
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
      code {
        body
      }
    }
  }
`
