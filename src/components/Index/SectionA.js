import { graphql, useStaticQuery } from "gatsby"

import React from "react"
import Section from "../Containers/Section"
import TextContainer from "../Containers/TextContainer"

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
      <Section background="#3D3C47" topPadding bottomPadding>
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
