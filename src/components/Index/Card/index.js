import React from "react"
import styles from "./Card.module.css"
import { Section } from "../../Containers"
import sanatizeHtml from "sanitize-html"
import { Square } from "../../Headshot"

export default ({ title, content, additionalInformation }) => (
  <Section verticalPadding={false}>
    <div className={styles.centered}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Square />
        </div>
        <div className={styles.content} style={{ marginTop: "1rem" }}>
          <span
            className={styles.name}
            dangerouslySetInnerHTML={{
              __html: sanatizeHtml(title),
            }}
          />
          <h2
            className={styles.excerpt}
            dangerouslySetInnerHTML={{
              __html: sanatizeHtml(content),
            }}
          />
          <p>{additionalInformation}</p>
        </div>
      </div>
    </div>
  </Section>
)
