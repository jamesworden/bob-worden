import React from "react"
import styles from "./Footer.module.css"
import Logos from "./Logos"
import { Container } from "../Containers"
import { Line } from "../Line"
import { graphql, StaticQuery } from "gatsby"
import sanatizeHtml from "sanitize-html"

const Top = ({ title, array, content }) => (
  <div
    style={{
      justifyContent: "space-around",
      display: "flex",
    }}
  >
    <div style={{ maxWidth: "50rem" }}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        <ul
          style={{
            listStyleType: "none",
            lineHeight: "2rem",
            padding: 0,
            margin: 0,
            flex: 1,
            marginTop: "-.15rem",
          }}
        >
          {array.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className={styles.text}>
          <p
            className={styles.topParagraph}
            dangerouslySetInnerHTML={{ __html: sanatizeHtml(content) }}
          />
        </div>
      </div>
    </div>
  </div>
)

const Bottom = () => {
  let date = new Date().getFullYear()
  return (
    <div className={styles.bottom}>
      <Line color="#808080" space />
      <Logos />
      <span>{date} Copyright Bob Worden ©. All Rights Reserved.</span>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <footer>
        <Container maxWidth="1008px">
          <Top
            title={data.wpgraphql.homepage_section.title}
            array={data.wpgraphql.homepage_section.additional_information.additionalInformation.split(
              "\n"
            )}
            content={data.wpgraphql.homepage_section.content}
          />
          <Bottom />
        </Container>
      </footer>
    )}
  />
)

const query = graphql`
  {
    wpgraphql {
      homepage_section(id: "cG9zdDo1Nw==") {
        title
        content
        additional_information {
          additionalInformation
        }
      }
    }
  }
`
