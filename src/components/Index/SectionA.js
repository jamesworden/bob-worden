import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Section, TextContainer } from "../Containers"

export default () => {
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        homepage_section(id: "cG9zdDo0MQ==") {
          title
          content
        }
      }
    }
  `)

  return (
    <div id="scroll">
      <Section backgroundColor="#3D3C47" topPadding bottomPadding>
        <TextContainer
          title={data.wpgraphql.homepage_section.title}
          color="var(--white)"
          lineColor="var(--white)"
          content={data.wpgraphql.homepage_section.content}
        />
      </Section>
    </div>
  )
}
