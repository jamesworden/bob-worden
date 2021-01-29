const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      wpgraphql {
        posts {
          nodes {
            slug
            content
            title
            date
            excerpt
            categories {
              nodes {
                name
              }
            }
            author {
              node {
                name
              }
            }
          }
        }
        articles {
          nodes {
            author {
              node {
                name
              }
            }
            title
            date
            excerpt
            slug
            article_information {
              externalArticle
              externalArticleLink
              featuredArticle
            }
            article_categories {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.wpgraphql.posts.nodes.forEach(node => {
      let categories = []
      node.categories.nodes.forEach(node => {
        categories.push(node.name)
      })
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve("./src/layouts/BlogPostLayout.js"),
        context: {
          slug: node.slug,
          title: node.title,
          content: node.content,
          date: node.date,
          categories,
          author: node.author.node.name,
          excerpt: node.excerpt,
        },
      })
    })

    result.data.wpgraphql.articles.nodes.forEach(node => {
      if (node.article_information.externalArticle) {
        return
      }
      let categories = []
      node.article_categories.nodes.forEach(node => {
        categories.push(node.name)
      })
      createPage({
        path: `articles/${node.slug}`,
        component: path.resolve("./src/layouts/ArticleLayout.js"),
        context: {
          slug: node.slug,
          title: node.title,
          content: node.content,
          date: node.date,
          categories,
          author: node.author.node.name,
          excerpt: node.excerpt,
        },
      })
    })
  })
}

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === "MarkdownRemark") {
//     const slug = createFilePath({ node, getNode, basePath: "blog" })
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }
