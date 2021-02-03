import React from "react"
import { Container } from "../../Containers"
import styles from "./Landing.module.css"
import Button from "../../Button"
import sanatizeHtml from "sanitize-html"
import BackgroundImage from "./BackgroundImage"
import scrollTo from "gatsby-plugin-smoothscroll"

export default ({ title, content, additionalInformation }) => (
  <BackgroundImage className="Landing Section">
    <header className={styles.container}>
      <div style={{ marginTop: "2.5rem" }}>
        <Container>
          <h1
            className={styles.title}
            dangerouslySetInnerHTML={{
              __html: sanatizeHtml(title),
            }}
          />
          <section className={styles.grid}>
            <div
              dangerouslySetInnerHTML={{
                __html: sanatizeHtml(content),
              }}
              className={styles.paragraph}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: sanatizeHtml(additionalInformation),
              }}
              className={styles.paragraph}
            />
          </section>
          <div className={styles.spaceBetween}>
            <Button to="contact">Contact Bob</Button>
          </div>
        </Container>
      </div>
      <div className="centered">
        <div
          style={{ outline: "none" }}
          onClick={() => scrollTo("#scroll")}
          onKeyDown={() => scrollTo("#scroll")}
          role="button"
          tabIndex={0}
          className={styles.scrollContainer}
        >
          <span>Learn More</span>
          <span>↓</span>
        </div>
      </div>
    </header>
  </BackgroundImage>
)
