const path = require(`path`)
const fs = require(`fs`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { frontmatter: { released: { eq: true }  } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: 'posts' + post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onPostBuild = async ({ graphql }) => {

  const publicPath = `./public`

  const query = `
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              id
              date(formatString: "MMMM DD, YYYY")
              title
              tags
              image {
                childImageSharp {
                  fixed(width: 1200) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `

  const baseQuery = await graphql(query);
  const posts = baseQuery.data.allMdx.edges;
  const siteMeta = baseQuery.data.site.siteMetadata


  const outputPath = path.join(publicPath, 'metadata.json');
  const outputDir = path.dirname(outputPath);


  const json = {}
  posts.forEach(({node}) => {
    json[node.frontmatter.id] = {
      slug: node.fields.slug,
      link: siteMeta.siteUrl + '/posts' + node.fields.slug,
      title: node.frontmatter.title,
      tags: node.frontmatter.tags,
      thumbnail: siteMeta.siteUrl + node.frontmatter.image.childImageSharp.fixed.src
    }
  });

  fs.writeFileSync(outputPath, JSON.stringify(json));
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    'type Mdx implements Node { frontmatter: Frontmatter }',
    schema.buildObjectType({
      name: 'Frontmatter',
      fields: {
        recommendedPosts: {
          type: '[Mdx]',
          resolve: (source, args, context, info) => {
            return context.nodeModel
              .getAllNodes({ type: 'Mdx' })
              .filter(post =>
                source.recommended.some(id => id === post.frontmatter.id)
              )
          },
        },
      },
    }),
  ]
  createTypes(typeDefs)
}
