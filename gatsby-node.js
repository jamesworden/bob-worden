const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      wpgraphql {
        posts {
          nodes {
            id
            slug
          }
        }
        articles {
          nodes {
            id
            slug
            article_information {
              externalArticle
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.wpgraphql.posts.nodes.forEach(node => {
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve("./src/layouts/BlogPostLayout.js"),
        context: {
          id: node.id,
        },
      })
    })

    result.data.wpgraphql.articles.nodes.forEach(node => {
      if (node.article_information.externalArticle) {
        return
      }
      createPage({
        path: `articles/${node.slug}`,
        component: path.resolve("./src/layouts/ArticleLayout.js"),
        context: {
          id: node.id,
        },
      })
    })
  })
}
