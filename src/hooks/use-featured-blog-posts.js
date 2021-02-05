import { graphql, useStaticQuery } from "gatsby"

export const useFeaturedBlogPosts = () => {
  const data = useStaticQuery(
    graphql`
      {
        wpgraphql {
          posts {
            nodes {
              post_information {
                featuredPost
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
  let featuredBlogPosts = []
  data.wpgraphql.posts.nodes.forEach(node => {
    if (node.post_information.featuredPost) {
      featuredBlogPosts.push(node)
    }
  })

  return featuredBlogPosts
}
