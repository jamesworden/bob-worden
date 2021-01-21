import React from "react"
import styles from "./Navigation.module.css"
import { Link } from "gatsby"

const NavLink = ({ children, color }) => {
  let linkTo

  if (children == "home") {
    linkTo = "/"
  } else {
    linkTo = "/" + children
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Link
        to={linkTo}
        style={{
          color,
          textDecoration: "none",
          marginLeft: "3rem",
        }}
      >
        <p
          style={{
            fontFamily: "Lora",
          }}
        >
          {children}
        </p>
      </Link>
    </div>
  )
}

const Links = ({ color }) => (
  <div className={styles.linkContainer}>
    <div className={styles.links}>
      <NavLink color={color}>home</NavLink>
      <NavLink color={color}>about</NavLink>
      <NavLink color={color}>articles</NavLink>
      <NavLink color={color}>contact</NavLink>
    </div>
  </div>
)

export default Links
