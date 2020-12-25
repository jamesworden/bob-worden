import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationLinks = () => {
  const color = "white"

  const NavItem = styled(Link)`
    text-decoration: none;
    color: ${color};
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    transition: all 200ms ease-in;
    position: relative;

    :after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0%;
      content: "";
      background: ${color};
      height: 1px;
      transition: all 0.4s ease-in;
    }

    :hover {
      transition: all 0.3s ease-in;
      color: ${color};
      ::after {
        width: 100%;
        transition: all 0.3s ease-in;
      }
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
      z-index: 6;
      transition: all 0.3s ease-in;
      margin-bottom: 2rem;
    }
  `

  return (
    <>
      <NavItem to="/about">about</NavItem>
      <NavItem to="/articles">articles</NavItem>
      <NavItem to="/contact">contact</NavItem>
      <NavItem to="/">home</NavItem>
    </>
  )
}

export default NavigationLinks
