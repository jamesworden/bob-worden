import { useHeadshotImage } from "../../hooks/use-headshot-image"
import { useSmallHeadshotImage } from "../../hooks/use-small-headshot-image"
import Img from "gatsby-image"
import React from "react"
import styles from "./Headshot.module.css"

const Square = () => {
  const { headshotImage } = useHeadshotImage()
  const { smallHeadshotImage } = useSmallHeadshotImage()

  const sources = [
    smallHeadshotImage.childImageSharp.fixed,
    {
      ...headshotImage.childImageSharp.fixed,
      media: `(min-width: 300px)`,
    },
  ]
  return <Img fixed={sources} className={styles.image} />
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
      className={styles.image}
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
