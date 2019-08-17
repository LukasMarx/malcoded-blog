import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '../components/Seo'
import HeaderFooterLayout from '../layouts/HeaderFooterLayout'
import Button from '../components/elements/button/Button'
import styles from './index.module.css'

import { connect } from 'react-redux'
import { ThemeState } from '../state/reducers/theme.reducer'
import { AppState } from '../state/reducer'
import { ThemeColor } from '../models/Theme'
import { setPrimaryColor } from '../state/actions/theme.actions'
import {
  defaultPrimaryColor,
  vueColor,
  reactColor,
  angularColor,
} from '../theme/colors'
import planets from './../assets/malcoded-planets-v2.svg'
import reactPlanet from './../assets/react-planet.svg'
import angularPlanet from './../assets/angular-planet.svg'
import newMeteor from './../assets/new-meteor.svg'
import vuePlanet from './../assets/vue-planet.svg'
import react from './../assets/react.svg'
import angular from './../assets/angular.svg'
import vue from './../assets/vue.svg'
import PostCard from '../components/blocks/post-card/PostCard'
import PlanetHeader from '../components/blocks/planet-header/PlanetHeader'
import NewsletterDialog from '../components/blocks/newsletter-dialog/NewsletterDialog'
import { subscribeNewsletter } from '../state/actions/newsletter.actions'

export interface BlogIndexProps {
  data: any
  theme: ThemeState
  setPrimaryColor(color: ThemeColor): void
  subscribeToNewsletter(email: string): void
}

export interface BlogIndexState {
  isNewsletterDialogOpen: boolean
  showNewsletterDialogConfirmation: boolean
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
    subscribeToNewsletter: (email: string) => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'newsletter_subscribe', {
          event_category: 'engagement',
        })
      }
      dispatch(subscribeNewsletter(email))
    },
  }
}

class BlogIndex extends React.Component<BlogIndexProps, BlogIndexState> {
  constructor(props) {
    super(props)
    this.state = {
      isNewsletterDialogOpen: false,
      showNewsletterDialogConfirmation: false,
    }
    this.onNewsletterDialogClosed = this.onNewsletterDialogClosed.bind(this)
    this.onNewsletterDialogSubmit = this.onNewsletterDialogSubmit.bind(this)
    this.onNewsletterDialogOpen = this.onNewsletterDialogOpen.bind(this)
  }
  componentDidMount() {
    this.props.setPrimaryColor(defaultPrimaryColor)
  }

  onNewsletterDialogSubmit(email) {
    if (email) {
      this.props.subscribeToNewsletter(email)
    }

    this.setState({ showNewsletterDialogConfirmation: true })
  }

  onNewsletterDialogOpen() {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'newsletter_dialog_open', {
        event_category: 'engagement',
      })
    }
    this.setState({ isNewsletterDialogOpen: true })
  }

  onNewsletterDialogClosed() {
    this.setState({
      isNewsletterDialogOpen: false,
    })
  }

  render() {
    const { data } = this.props
    const posts = data.allMdx.edges
    const angularPosts = data.angular.edges
    const reactPosts = data.react.edges
    const vuePosts = data.vue.edges

    return (
      <HeaderFooterLayout>
        <SEO title="Learn to build modern web applications" />
        <div className={styles.root}>
          <div
            className={styles.hero}
            style={{
              backgroundImage: `url(${planets})`,
              height: '75vh',
              width: '100%',
            }}
          >
            <div className={styles.heroText}>
              <h1>Learn to build modern web applications</h1>
              <h3
                style={{
                  color: this.props.theme.darkMode
                    ? this.props.theme.primaryColor.light
                    : this.props.theme.primaryColor.main,
                  marginTop: 16,
                  marginBottom: 32,
                  fontSize: '24px',
                }}
              >
                using Angular, React & Vue
              </h3>
              <Button
                onClick={this.onNewsletterDialogOpen}
                style={{ height: 64, fontSize: '18px' }}
              >
                Join the newsletter
              </Button>
            </div>
          </div>
          <div
            className={styles.logoGalleryWrapper}
            style={{
              width: '100%',
            }}
          >
            <div className={styles.logoGallery} style={{}}>
              <img src={react} className={styles.logo} />
              <img src={angular} className={styles.logo} />
              <img src={vue} className={styles.logo} style={{ padding: 16 }} />
            </div>
          </div>
          <PlanetHeader
            image={newMeteor}
            title="Latest Posts"
            linkTo="/posts"
            linkColor={defaultPrimaryColor}
          />

          <div className={styles.grid + ' ' + styles.meteor}>
            <div className={styles.content}>
              {posts.map(({ node }, index) => {
                return (
                  <Link
                    key={node.fields.slug}
                    style={{
                      textDecoration: 'none',
                      gridArea:
                        index < 5 ? String.fromCharCode(97 + index) : '',
                      color: 'inherit',
                      boxSizing: 'border-box',
                      display: 'flex',
                    }}
                    className={styles.item}
                    to={'/posts' + node.fields.slug}
                  >
                    <PostCard node={node} />
                  </Link>
                )
              })}
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <Link to="/posts" style={{ textDecoration: 'none' }}>
              <Button>All Posts</Button>
            </Link>
          </div>
          <PlanetHeader
            image={angularPlanet}
            title="Angular"
            linkTo="/posts?filter=angular"
            linkColor={angularColor}
          />
          <div className={styles.grid + ' ' + styles.angular}>
            <div className={styles.content}>
              {angularPosts.map(({ node }, index) => {
                return (
                  <Link
                    key={node.fields.slug}
                    style={{
                      textDecoration: 'none',
                      gridArea:
                        index < 5 ? String.fromCharCode(97 + index) : '',
                      color: 'inherit',
                      boxSizing: 'border-box',
                      display: 'flex',
                    }}
                    className={styles.item}
                    to={'/posts' + node.fields.slug}
                  >
                    <PostCard node={node} />
                  </Link>
                )
              })}
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <Link to="/posts?filter=angular" style={{ textDecoration: 'none' }}>
              <Button bgColor={angularColor}>All Angular Posts</Button>
            </Link>
          </div>
          <PlanetHeader
            image={reactPlanet}
            title="React"
            linkTo="/posts?filter=react"
            linkColor={reactColor}
          />
          <div className={styles.grid + ' ' + styles.react}>
            <div className={styles.content}>
              {reactPosts.map(({ node }, index) => {
                return (
                  <Link
                    key={node.fields.slug}
                    style={{
                      textDecoration: 'none',
                      gridArea:
                        index < 5 ? String.fromCharCode(97 + index) : '',
                      color: 'inherit',
                      boxSizing: 'border-box',
                      display: 'flex',
                    }}
                    className={styles.item}
                    to={'/posts' + node.fields.slug}
                  >
                    <PostCard node={node} />
                  </Link>
                )
              })}
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <Link to="/posts?filter=react" style={{ textDecoration: 'none' }}>
              <Button bgColor={reactColor}>All React Posts</Button>
            </Link>
          </div>
          <PlanetHeader
            image={vuePlanet}
            title="Vue"
            linkTo="/posts?filter=vue"
            linkColor={vueColor}
          />
          <div className={styles.grid + ' ' + styles.vue}>
            <div className={styles.content}>
              {vuePosts.map(({ node }, index) => {
                return (
                  <Link
                    key={node.fields.slug}
                    style={{
                      textDecoration: 'none',
                      gridArea:
                        index < 5 ? String.fromCharCode(97 + index) : '',
                      color: 'inherit',
                      boxSizing: 'border-box',
                      display: 'flex',
                    }}
                    className={styles.item}
                    to={'/posts' + node.fields.slug}
                  >
                    <PostCard node={node} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Link to="/posts?filter=vue" style={{ textDecoration: 'none' }}>
            <Button bgColor={vueColor}>All Vue Posts</Button>
          </Link>
        </div>
        <NewsletterDialog
          open={this.state.isNewsletterDialogOpen}
          onClose={this.onNewsletterDialogClosed}
          onSubmit={this.onNewsletterDialogSubmit}
          showConfirmation={this.state.showNewsletterDialogConfirmation}
        />
      </HeaderFooterLayout>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogIndex)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            author
            recommended
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    angular: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
      filter: { frontmatter: { tags: { in: "angular" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            author
            recommended
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    react: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
      filter: { frontmatter: { tags: { eq: "react" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            author
            recommended
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    vue: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
      filter: { frontmatter: { tags: { eq: "vue" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            author
            recommended
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
