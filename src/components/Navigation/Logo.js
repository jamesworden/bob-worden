import { navigate } from "gatsby"
import React from "react"
import styles from "./Navigation.module.css"

const Logo = ({ color }) => {
  return (
    <h3
      onClick={() => navigate("/")}
      className={styles.logo}
      style={{
        cursor: "pointer",
        color,
      }}
    >
      Bob Worden
    </h3>
  )
}

export default Logo
