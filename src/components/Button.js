import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

const StyledButton = styled.button`
  padding: 1rem 2.5rem;
  outline: none;
  border: none;
  color: var(--white);
  background-color: var(--gold);
  text-decoration: none;
  cursor: pointer;
  z-index: 10;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: bolder;
  border: 1px solid transparent;
  transition: ease-in-out 0.3s;
  min-width: 15rem;

  &:hover {
    background-color: transparent;
    border: solid 1px var(--gold);
    color: var(--gold);
    transition: ease-in-out 0.3s;
  }
`

const Button = ({ children, to }) => (
  <StyledButton onClick={() => navigate(to)}>{children}</StyledButton>
)

export default Button
