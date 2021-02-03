import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Div = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 10;
  position: relative;
`

const H3 = styled.h3`
  color: ${({ color }) => color};
  text-transform: uppercase;
  cursor: pointer;
  transition: ease 0.3s all;
  font-size: 18px;
  @media (min-width: 668px) {
    font-size: 21px;
  }
  @media (min-width: 1008px) {
    font-size: 24px;
  }

  &:hover {
    color: var(--gold);
    transition: ease 0.3s all;
  }
`

export default ({ color }) => {
  return (
    <Div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <H3 color={color}>Bob Worden Esq.</H3>
      </Link>
    </Div>
  )
}
