import React, { useState, useLayoutEffect } from "react"
import styles from "./Navigation.module.css"
import Links from "./Links"
import Logo from "./Logo"
import { Container } from "../Containers/Containers"
import HamburgerMenu from "react-hamburger-menu"

const Navigation = ({ home }) => {
  let condensed = window.innerWidth < 768 ? true : false
  let position = home ? "absolute" : "relative"
  let color = home ? "white" : "black"

  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <Container position={position}>
      <div className={styles.navigation}>
        <Logo color={color} />
        {condensed ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              marginTop: "-4px",
            }}
          >
            <div style={{ cursor: "pointer" }}>
              <HamburgerMenu
                isOpen={open}
                menuClicked={handleClick.bind(this)}
                width={18}
                height={16}
                strokeWidth={1 + window.innerWidth / 1000}
                rotate={0}
                color={color}
                borderRadius={0}
                animationDuration={0.3}
              />
            </div>
          </div>
        ) : (
          <Links color={color} />
        )}
      </div>
    </Container>
  )
}

export default Navigation
