import React, { useState } from "react"
import styled from "styled-components"
import RightNav from "./RightNav"

const Div = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 10;
  position: relative;
`
const StyledBurger = styled.div`
  display: none;
  height: 1.5rem;
  cursor: pointer;

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 1.5rem;
    height: 1px;
    background-color: ${({ open, color }) => (open ? "black" : color)};
    transform-origin: 1px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`

export default ({ color, open, handleClick }) => {
  return (
    <React.Fragment>
      <Div>
        <StyledBurger open={open} color={color} onClick={handleClick}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </Div>
      <RightNav color={color} open={open} />
    </React.Fragment>
  )
}
