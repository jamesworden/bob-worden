import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: ${({ color }) => color};
  font-family: "Lora";
  text-transform: uppercase;
  text-decoration: none;
  transition: ease 0.3s all;

  &:hover {
    color: var(--gold);
    transition: ease 0.3s all;
  }
`

const StyledListItem = styled.li`
  justify-content: space-around;
  display: flex;
  margin: 1rem 0rem;

  @media (min-width: 800px) {
    padding: 2rem 1rem;
  }
`

export default ({ children, color, close }) => (
  <StyledListItem>
    <StyledLink
      to={`/${children === "home" ? "" : children}`}
      color={color}
      onClick={close}
    >
      {children}
    </StyledLink>
  </StyledListItem>
)
