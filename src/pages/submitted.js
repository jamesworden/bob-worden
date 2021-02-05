import { Link, graphql } from "gatsby"

import Container from "../components/Containers/Container"
import PageLayout from "../layouts/PageLayout"
import React from "react"
import sanitize from "sanitize-html"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: black;
  transition: 0.3s all ease;

  &:hover {
    color: var(--gold);
    transition: 0.3s all ease;
  }
`

export default ({ data }) => (
  <PageLayout
    title="Submitted"
    seoDescription="Your message has been delivered to Bob Worden Esq."
  >
    <div style={{ paddingTop: "2rem" }}>
      <Container>
        <h3 style={{ margin: 0, padding: 0 }}>
          {data.wpgraphql.submission_section.title}
        </h3>
        <p
          dangerouslySetInnerHTML={{
            __html: sanitize(data.wpgraphql.submission_section.content),
          }}
        />
        <p style={{ paddingTop: "4rem" }}>
          Click <StyledLink to="/">here</StyledLink> to return to the homepage.
        </p>
      </Container>
    </div>
  </PageLayout>
)

export const query = graphql`
  {
    wpgraphql {
      submission_section(id: "cG9zdDo4NA==") {
        title
        content
      }
    }
  }
`
