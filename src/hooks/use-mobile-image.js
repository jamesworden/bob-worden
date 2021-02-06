import { graphql, useStaticQuery } from "gatsby"

export const useMobileImage = () => {
  return useStaticQuery(
    graphql`
      {
        mobileImage: file(relativePath: { eq: "images/landing-desktop.jpg" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
}
