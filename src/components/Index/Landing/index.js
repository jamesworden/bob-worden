import React from "react"
import { Container } from "../../Containers"
import styles from "./Landing.module.css"
import Button from "../../Button"
import sanatizeHtml from "sanitize-html"
import BackgroundImage from "./BackgroundImage"
import scrollTo from "gatsby-plugin-smoothscroll"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        homepage_section(id: "cG9zdDo1MA==") {
          title
          content
          additional_information {
            additionalInformation
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage className="Landing Section">
      <header className={styles.container}>
        <div style={{ marginTop: "2.5rem" }}>
          <Container>
            <h1
              className={styles.title}
              dangerouslySetInnerHTML={{
                __html: sanatizeHtml(data.wpgraphql.homepage_section.title),
              }}
            />
            <section className={styles.grid}>
              <div
                dangerouslySetInnerHTML={{
                  __html: sanatizeHtml(data.wpgraphql.homepage_section.content),
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
            onClick={() => scrollTo("#scroll")}
            className={styles.scrollContainer}
          >
            <span>Learn More</span>
            <span>↓</span>
          </div>
        </div>
      </header>
    </BackgroundImage>
  )
}
