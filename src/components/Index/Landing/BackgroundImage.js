import GatsbyBackgroundImage from "gatsby-background-image"
import React from "react"
import { useDesktopImage } from "../../../hooks/use-desktop-image"
import { useMobileImage } from "../../../hooks/use-mobile-image"

const BackgroundImage = ({ children }) => {
  const { desktopImage } = useDesktopImage()
  const { mobileImage } = useMobileImage()

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 668px)`,
    },
  ]

  return (
    <GatsbyBackgroundImage
      Tag="section"
      fluid={sources}
      backgroundColor={`#040e18`}
    >
      {children}
    </GatsbyBackgroundImage>
  )
}

export default BackgroundImage
