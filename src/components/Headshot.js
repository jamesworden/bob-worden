import Img from "gatsby-image"
import React from "react"
import { useHeadshotImage } from "../hooks/use-headshot-image"
import { useSmallHeadshotImage } from "../hooks/use-small-headshot-image"

const Square = () => {
  const { headshotImage } = useHeadshotImage()
  const { smallHeadshotImage } = useSmallHeadshotImage()

  const sources = [
    smallHeadshotImage.childImageSharp.fixed,
    {
      ...headshotImage.childImageSharp.fixed,
      media: `(min-width: 340px)`,
    },
  ]
  return <Img fixed={sources} />
}

const Circle = () => {
  const { headshotImage } = useHeadshotImage()
  const { smallHeadshotImage } = useSmallHeadshotImage()

  const sources = [
    smallHeadshotImage.childImageSharp.fixed,
    {
      ...headshotImage.childImageSharp.fixed,
      media: `(min-width: 300px)`,
    },
  ]
  return (
    <Img
      fixed={sources}
      style={{
        justifyContent: "center",
        margin: "auto",
        transform: "scale(0.6)",
        clipPath: "circle(50%)",
      }}
    />
  )
}

export { Square, Circle }
