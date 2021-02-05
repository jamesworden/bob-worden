import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  padding: 0rem 1rem;
  overflow: hidden;
  margin: auto;
  width: 100%;
  height: 100%;

  @media (min-width: 668px) {
    padding: 0rem 2rem;
  }
`

// Containers have centered children, horisontal padding, and proper max width
export default ({ children, position, maxWidth = "1096px", zIndex = 0 }) => (
  <div className="centered" style={{ position, zIndex }}>
    <StyledContainer style={{ maxWidth }}>{children}</StyledContainer>
  </div>
)
