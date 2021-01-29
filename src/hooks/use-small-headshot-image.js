import { useStaticQuery, graphql } from "gatsby"

export const useSmallHeadshotImage = () => {
  return useStaticQuery(
    graphql`
      {
        smallHeadshotImage: file(relativePath: { eq: "images/headshot.jpg" }) {
          childImageSharp {
            fixed(width: 260, height: 260) {
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
