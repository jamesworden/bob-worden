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
    <Section textAlign="center" maxWidth="35rem" noBottomPadding noTopPadding>
      <div style={{ margin: "2rem 0 4rem 0" }}>
        <h3 style={{ fontSize: "24px" }}>
          {data.wpgraphql.landing.additional_information.additionalInformation}
        </h3>
        <Button to="/contact">
          <span style={{ fontSize: "13px" }}>Contact Bob</span>
        </Button>
      </div>
    </Section>
  )
}
