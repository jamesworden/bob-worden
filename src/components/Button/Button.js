import React from "react"
import { navigate } from "gatsby"
import styles from "./Button.module.css"

export default function Button({ children, to }) {
  return <button onClick={() => navigate(to)}>{children}</button>
}
