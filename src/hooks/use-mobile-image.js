import { useStaticQuery, graphql } from "gatsby"

export const useMobileImage = () => {
  return useStaticQuery(
    graphql`
      {
        mobileImage: file(relativePath: { eq: "images/landing-mobile.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 480) {
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
