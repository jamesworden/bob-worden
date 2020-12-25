import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NavigationLinks from "./NavigationLinks"
import Logo from "./Logo"

const Navbar = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #2a2a2a;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 5vw;
  top: 0;
  z-index: 2;
  align-self: center;
  transition: all 0.3s;

  @media (max-width: 768px) {
    position: absolute;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  transition: all 0.3s ease-in;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #2a2a2a;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: white;
  width: 30px;
  height: 1px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 1px;
    background-color: white;
    content: "";
    position: absolute;
    transition: 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setNavbarOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
  })

  return (
    <Navbar>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavigationLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavigationLinks />
        </Navbox>
      )}
    </Navbar>
  )
}

export default Navigation
