import React, { useState, useLayoutEffect } from "react"
import styles from "./Navigation.module.css"
import Links from "./Links"
import Logo from "./Logo"
import { Container } from "../Containers/Containers"
import HamburgerMenu from "react-hamburger-menu"

const Navigation = ({ home }) => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  const [width, setWidth] = useState(0)
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth([window.innerWidth])
    }
    window.addEventListener("resize", updateWidth)
    updateWidth()
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  let condensed = width < 768 ? true : false
  let position = home ? "absolute" : "relative"
  let color = home ? "white" : "black"

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
