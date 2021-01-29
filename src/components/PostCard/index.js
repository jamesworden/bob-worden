import { navigate } from "gatsby"
import React from "react"
import ArrowLink from "../ArrowLink"
import { Line } from "../Line"
import styles from "./PostCard.module.css"
import sanatizeHtml from "sanitize-html"
import { AnimationContainer } from "../Containers"
import { getFormattedDate } from "../../util/Functions"

export default ({
  title,
  date,
  excerpt,
  author,
  slug,
  externalUrl,
  external,
}) => (
  <div
    className={styles.container}
    onClick={() => {
      external ? window.open(externalUrl, "_self") : navigate("/" + slug)
    }}
  >
    <div className={styles.topContainer}>
      <p className={styles.date}>{date}</p>
      <h3 className={styles.title}>{title}</h3>
      <p
        className={styles.excerpt}
        dangerouslySetInnerHTML={{ __html: sanatizeHtml(excerpt) }}
      />
    </div>
    <div className={styles.bottomContainer}>
      <ArrowLink to={"/" + slug}>
        <span className={styles.arrowText}>Read More</span>
      </ArrowLink>
      <div style={{ marginTop: "0rem" }}>
        <Line space />
      </div>
      <div className={styles.bottomContainerContent}>{author}</div>
    </div>
  </div>
)
