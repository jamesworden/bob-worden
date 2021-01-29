import React from "react"
import { Link } from "gatsby"

export default ({ children, to, url, color = "black" }) => {
  return (
    <React.Fragment>
      {url ? (
        <a href={url} style={{ cursor: "pointer", textDecoration: "none" }}>
          <span style={{ color, fontWeight: 900 }}>{children} →</span>
        </a>
      ) : (
        <Link to={to} style={{ cursor: "pointer", textDecoration: "none" }}>
          <span style={{ color, fontWeight: 900 }}>{children} →</span>
        </Link>
      )}
    </React.Fragment>
  )
}
