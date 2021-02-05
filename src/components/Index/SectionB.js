import { graphql, useStaticQuery } from "gatsby"

import React from "react"
import Section from "../Containers/Section"
import TextContainer from "../Containers/TextContainer"

export default () => {
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        homepage_section(id: "cG9zdDo0Mg==") {
          title
          content
        }
      }
    }
  `)
  return (
    <Section topPadding bottomPadding>
      <TextContainer
        title={data.wpgraphql.homepage_section.title}
        lineColor="var(--gold)"
        content={data.wpgraphql.homepage_section.content}
      />
    </Section>
  )
}
