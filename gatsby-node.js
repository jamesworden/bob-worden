const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      wpcontent {
        posts {
          nodes {
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.wpcontent.posts.nodes.forEach(node => {
      createPage({
        path: node.slug,
        component: path.resolve("./src/layouts/ArticleLayout.js"),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
