import NavLinks from "./NavLinks"
import React from "react"
import styled from "styled-components"

const Div = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 800px) {
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    position: absolute;
    right: 0rem;
    top: 0;
    background-color: ghostwhite;
    height: 100vh;
    width: 100vw;
    text-align: center;
    justify-content: space-around;
    * {
      color: black;
    }
    transition: all 0.3s ease-in-out;
  }
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 1rem;
  }

  @media (max-width: 800px) {
    flex-flow: column nowrap;
    padding: 0;
  }
`

export default ({ color, open, close }) => {
  return (
    <Div open={open}>
      <List>
        <NavLinks color={color} close={close} />
      </List>
    </Div>
  )
}
