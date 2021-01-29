import { useHeadshotImage } from "../../hooks/use-headshot-image"
import { useSmallHeadshotImage } from "../../hooks/use-small-headshot-image"
import Img from "gatsby-image"
import React from "react"
import styles from "./Headshot.module.css"

export default () => {
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
