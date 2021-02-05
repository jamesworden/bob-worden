import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledSpan = styled.span`
  color: ${({ color }) => color};
  font-weight: 900;
  transition: ease 0.3s all;

  &:hover {
    color: var(--gold);
    transition: ease 0.3s all;
  }
`

export default ({ children, to, url, color = "black" }) => (
  <React.Fragment>
    {url ? (
      <a href={url} style={{ cursor: "pointer", textDecoration: "none" }}>
        <StyledSpan color={color}>{children} →</StyledSpan>
      </a>
    ) : to ? (
      <Link to={to} style={{ cursor: "pointer", textDecoration: "none" }}>
        <StyledSpan color={color}>{children} →</StyledSpan>
      </Link>
    ) : (
      <StyledSpan color={color}>{children} →</StyledSpan>
    )}
  </React.Fragment>
)
