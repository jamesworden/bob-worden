import React from "react"
import { Link } from "gatsby"

export default ({ children, color }) => (
  <li>
    <Link
      to={`/${children === "home" ? "" : children}`}
      style={{
        color,
        textDecoration: "none",
      }}
    >
      <p
        style={{
          fontFamily: "Lora",
          textTransform: "uppercase",
        }}
      >
        {children}
      </p>
    </Link>
  </li>
)
