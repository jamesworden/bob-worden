import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Button from "../Button"
import { Section } from "../Containers"

// This is the same data as the call to action
export default () => {
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        landing: homepage_section(id: "cG9zdDo1MA==") {
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
    <div style={{ padding: "4rem 0rem" }}>
      <Section textAlign="center" maxWidth="35rem">
        <div style={{ marginTop: "-1rem", paddingBottom: "1rem" }}>
          <h2>
            {
              data.wpgraphql.landing.additional_information
                .additionalInformation
            }
          </h2>
          <Button to="contact">Contact Bob</Button>
        </div>
      </Section>
    </div>
  )
}
