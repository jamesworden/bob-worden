import { graphql, useStaticQuery } from "gatsby"

export const useDesktopImage = () => {
  return useStaticQuery(
    graphql`
      {
        desktopImage: file(relativePath: { eq: "images/landing-desktop.jpg" }) {
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
