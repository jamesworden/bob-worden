import React from "react"
import { useDesktopImage } from "../../../hooks/use-desktop-image"
import { useMobileImage } from "../../../hooks/use-mobile-image"
import GatsbyBackgroundImage from "gatsby-background-image"

const BackgroundImage = ({ children, className }) => {
  const { desktopImage } = useDesktopImage()
  const { mobileImage } = useMobileImage()

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 575px)`,
    },
  ]

  return (
    <GatsbyBackgroundImage
      Tag="section"
      fluid={sources}
      backgroundColor={`#040e18`}
      className={className}
    >
      {children}
    </GatsbyBackgroundImage>
  )
}

export default BackgroundImage
