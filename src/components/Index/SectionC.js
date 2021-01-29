import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Section, ListContainer } from "../Containers"

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
