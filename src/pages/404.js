import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../components/Containers"
import PageLayout from "../layouts/PageLayout"

const StyledLink = styled(Link)`
  color: black;
  transition: 0.3s all ease;

  &:hover {
    color: var(--gold);
    transition: 0.3s all ease;
  }
`

export default () => (
  <PageLayout
    title="Page not found"
    seoDescription="This page indicates that the last specified route did not exist."
  >
    <div style={{ paddingTop: "2rem" }}>
      <Container>
        <p>
          Click <StyledLink to="/">here</StyledLink> to return to the homepage.
        </p>
      </Container>
    </div>
  </PageLayout>
)
