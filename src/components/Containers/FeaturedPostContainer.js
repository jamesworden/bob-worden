import Container from "./Container"
import React from "react"
import styled from "styled-components"

const FeaturedPostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 20rem;
`

// These are used for Featured Articles and Featured Posts
export default ({ children }) => (
  <Container>
    <div className="centered">
      <FeaturedPostContent>{children}</FeaturedPostContent>
    </div>
  </Container>
)
