import React from 'react'
import * as styles from './posts.module.css'
import HeaderFooterLayout from '../layouts/HeaderFooterLayout'
import Select from '@material-ui/core/Select'
import { MenuItem } from '@material-ui/core'
import { graphql, Link } from 'gatsby'
import PostCard from '../components/blocks/post-card/PostCard'
import newMeteor from './../assets/new-meteor.svg'
import SEO from '../components/Seo'

export interface PostsPageProps {
  data: any
  location: Location
}

export interface PostsPageState {
  filter: string
}

class PostsPage extends React.Component<PostsPageProps, PostsPageState> {
  constructor(props: PostsPageProps) {
    super(props)
    this.state = { filter: 'none' }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    if (this.props.location.search) {
      const regexResult = /\?filter=(.+)/g.exec(this.props.location.search)
      if (regexResult.length >= 1) {
        const filter = regexResult[1]
        if (filter === 'angular' || filter === 'react' || filter === 'vue') {
          this.setState({ filter })
        }
      }
    }
  }

  handleChange(event) {
    this.setState({ filter: event.target.value })
  }

  filter() {
    const { data } = this.props
    const posts = data.allMdx.edges
    const angularPosts = data.angular.edges
    const reactPosts = data.react.edges
    const vuePosts = data.vue.edges

    switch (this.state.filter) {
      case 'none': {
        return posts
      }
      case 'angular': {
        return angularPosts
      }
      case 'react': {
        return reactPosts
      }
      case 'vue': {
        return vuePosts
      }
    }
  }

  render() {
    return (
      <HeaderFooterLayout>
        <SEO title="All Posts" />
        <div className={styles.search}>
          <div className={styles.searchContent}>
            <img src={newMeteor} className={styles.image} />
            <h2 style={{ margin: 0 }}>All Posts</h2>
            <div style={{ flex: 1 }} />
            <h4>Filter:</h4>
            <div style={{ marginLeft: 16 }}>
              <Select value={this.state.filter} onChange={this.handleChange}>
                <MenuItem value="none">None</MenuItem>
                <MenuItem value="angular">Angular</MenuItem>
                <MenuItem value="react">React</MenuItem>
                <MenuItem value="vue">Vue</MenuItem>
              </Select>
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.content}>
            {this.filter().map(({ node }, index) => {
              return (
                <Link
                  key={node.fields.slug}
                  style={{
                    textDecoration: 'none',
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
      </HeaderFooterLayout>
    )
  }
}

export default PostsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { released: { eq: true } } }
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
      filter: {
        frontmatter: { tags: { in: "angular" }, released: { eq: true } }
      }
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
      filter: { frontmatter: { tags: { eq: "react" }, released: { eq: true } } }
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
      filter: { frontmatter: { tags: { eq: "vue" }, released: { eq: true } } }
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
