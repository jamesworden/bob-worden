import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

const Button = ({ text, to, dark }) => {
  const color = dark ? "#2a2a2a" : "#ffffff"
  const hoverColor = dark ? "#ffffff" : "#2a2a2a"

  const StyledButton = styled.button`
    color: ${color};
    padding: 0.5rem 2rem;
    background-color: transparent;
    border: 1px solid ${color};
    margin-top: 2.5rem;
    cursor: pointer;
    transition: 0.3s;
    font-family: Lora;

    :hover {
      color: ${hoverColor};
      border: 1px solid ${hoverColor};
      background-color: ${dark ? color : "transparent"};
      transition: 0.4s;
    }
  `

  return <StyledButton onClick={() => navigate(to)}>{text}</StyledButton>
}

export default Button
