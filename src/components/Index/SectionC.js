import { graphql, useStaticQuery } from "gatsby"

import ListContainer from "../Containers/ListContainer"
import React from "react"
import Section from "../Containers/Section"

export default () => {
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        homepage_section(id: "cG9zdDo0NA==") {
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
    <Section topPadding bottomPadding>
      <ListContainer
        title={data.wpgraphql.homepage_section.title}
        lineColor="var(--gold)"
        content={data.wpgraphql.homepage_section.content}
        array={data.wpgraphql.homepage_section.additional_information.additionalInformation.split(
          "\n"
        )}
      />
    </Section>
  )
}
