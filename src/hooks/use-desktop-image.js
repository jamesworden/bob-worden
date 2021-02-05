import { graphql, useStaticQuery } from "gatsby"

export const useDesktopImage = () => {
  return useStaticQuery(
    graphql`
      {
        desktopImage: file(relativePath: { eq: "images/landing-desktop.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    `
  )
}
