import { graphql, useStaticQuery } from "gatsby"

export const useFeaturedArticles = () => {
  const data = useStaticQuery(
    graphql`
      {
        wpgraphql {
          articles {
            nodes {
              article_information {
                externalArticle
                externalArticleLink
                featuredArticle
              }
              date
              title
              slug
              excerpt
            }
          }
        }
      }
    `
  )

  // Push all featured articles into an array
  // This is done manually here because Gatsby
  // doesn't allow filtering based on ACF fields
  let featuredArticles = []
  data.wpgraphql.articles.nodes.forEach(node => {
    if (node.article_information.featuredArticle) {
      featuredArticles.push(node)
    }
  })

  return featuredArticles
}
