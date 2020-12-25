import styles from "./Article.module.css"
import Button from "../components/Button"
import React from "react"

const Article = ({ slug, title, excerpt }) => (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <h2 className="subtitle">{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
    </div>
    <Button to={`/${slug}`} text="Read More..." dark />
  </div>
)

export default Article
