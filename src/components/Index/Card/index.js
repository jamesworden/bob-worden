import React from "react"
import styles from "./Card.module.css"
import { Section } from "../../Containers"
import sanatizeHtml from "sanitize-html"
import Headshot from "../../Headshot"
import { useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        homepage_section(id: "cG9zdDo1Ng==") {
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
    <Section verticalPadding={false}>
      <div className={styles.centered}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Headshot />
          </div>
          <div className={styles.content} style={{ marginTop: "1rem" }}>
            <span
              className={styles.name}
              dangerouslySetInnerHTML={{
                __html: sanatizeHtml(data.wpgraphql.homepage_section.title),
              }}
            />
            <h2
              className={styles.excerpt}
              dangerouslySetInnerHTML={{
                __html: sanatizeHtml(data.wpgraphql.homepage_section.content),
              }}
            />
            <p>
              {
                data.wpgraphql.homepage_section.additional_information
                  .additionalInformation
              }
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
