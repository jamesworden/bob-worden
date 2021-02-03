import { useStaticQuery, graphql } from "gatsby"

// This is the same content as the first paragraph of the landing page
export const useDescription = () => {
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        landing: homepage_section(id: "cG9zdDo1MA==") {
          content
        }
      }
    }
  `)
  return data.wpgraphql.landing.content
}
