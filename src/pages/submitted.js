import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../components/Containers"
import PageLayout from "../layouts/PageLayout"
import sanitizeHtml from "sanitize-html"

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
            __html: sanitizeHtml(data.wpgraphql.submission_section.content),
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
