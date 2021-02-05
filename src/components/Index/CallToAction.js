import { graphql, useStaticQuery } from "gatsby"

import Button from "../Button"
import React from "react"
import Section from "../Containers/Section"

export default () => {
  const data = useStaticQuery(
    graphql`
      {
        wpgraphql {
          landing: homepage_section(id: "cG9zdDo1MA==") {
            additional_information {
              additionalInformation
            }
          }
        }
      }
    `
  )
  return (
    <Section textAlign="center" maxWidth="35rem" bottomPadding topPadding>
      <div style={{ marginTop: "-1rem", paddingBottom: "1rem" }}>
        <h2>
          {data.wpgraphql.landing.additional_information.additionalInformation}
        </h2>
        <Button to="contact">Contact Bob</Button>
      </div>
    </Section>
  )
}
