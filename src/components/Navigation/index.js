import React, { useState, useLayoutEffect, useEffect } from "react"
import { Container } from "../Containers"
import styled from "styled-components"
import Logo from "./Logo"
import Burger from "./Burger"
import disableScroll from "disable-scroll"

const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
`

export default ({ home }) => {
  const [width, setWidth] = useState(0)
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth([window.innerWidth])
    }
    window.addEventListener("resize", updateWidth)
    updateWidth()
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const [open, setOpen] = useState(false)
  let color = home ? "var(--white)" : "black"

  if (!open) document.body.style.overflow = "hidden"

  const handleClick = () => {
    setOpen(!open)

    if (open) {
      disableScroll.off()
    } else {
      disableScroll.on()
    }
  }

  useEffect(() => {
    disableScroll.off()

    return () => {
      disableScroll.on()
    }
  }, [])

  return (
    <Container zIndex={10} position="absolute">
      <Nav>
        <Logo color={open && width < 800 ? "black" : color} />
        <Burger color={color} handleClick={handleClick} open={open} />
      </Nav>
    </Container>
  )
}
