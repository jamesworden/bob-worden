import React, { useEffect, useState } from "react"

import Burger from "./Burger"
import Container from "../Containers/Container"
import Logo from "./Logo"
import disableScroll from "disable-scroll"
import styled from "styled-components"

const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
`

export default ({ home }) => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    function updateWidth() {
      setWidth([window.innerWidth])
    }
    window.addEventListener("resize", updateWidth)
    updateWidth()
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const [open, setOpen] = useState(false)
  let color = home ? "var(--white)" : "black"

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

  const close = () => {
    setOpen(false)
    disableScroll.off()
  }

  if (width > 800) close()

  return (
    <Container zIndex={10} position="absolute">
      <Nav>
        <Logo color={open && width < 800 ? "black" : color} />
        <Burger
          color={color}
          close={close}
          handleClick={handleClick}
          open={open}
        />
      </Nav>
    </Container>
  )
}
