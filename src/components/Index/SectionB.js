import { useStaticQuery } from "gatsby"
import React from "react"
import { Section, TextContainer } from "../Containers"

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
