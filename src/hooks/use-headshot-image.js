import { useStaticQuery, graphql } from "gatsby"

export const useHeadshotImage = () => {
  return useStaticQuery(
    graphql`
      {
        headshotImage: file(relativePath: { eq: "images/headshot.jpg" }) {
          childImageSharp {
            fixed {
              base64
              width
              height
              src
              srcSet
            }
          }
        }
      }
    `
  )
}