import { graphql, useStaticQuery } from "gatsby"

export const useHeadshotImage = () => {
  return useStaticQuery(
    graphql`
      {
        headshotImage: file(relativePath: { eq: "images/headshot.jpg" }) {
          childImageSharp {
            fixed(width: 320, height: 320) {
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
