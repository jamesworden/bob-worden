import Container from "./Container"
import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  padding: 6rem 0rem;

  @media (min-width: 668px) {
    padding: 7rem 0rem;
  }
  @media (min-width: 1008px) {
    padding: 8rem 0rem;
  }
`

export default ({
  children,
  backgroundColor = "var(--white);",
  maxWidth = "1096px",
  textAlign = "left",
  color = "black",
  noTopPadding,
  noBottomPadding,
}) => (
  <StyledSection
    style={{
      color,
      backgroundColor,
      textAlign,
      paddingTop: noTopPadding ? 0 : "",
      paddingBottom: noBottomPadding ? 0 : "",
    }}
  >
    <Container maxWidth={maxWidth}>{children}</Container>
  </StyledSection>
)
