import React from "react"
import { navigate } from "gatsby"

const Button = ({ children, to }) => (
  <button onClick={() => navigate(to)}>{children}</button>
)

export default Button
