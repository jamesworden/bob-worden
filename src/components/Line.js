import React from "react"

export default ({ color = "black", partial, space, half }) => (
  <hr
    style={{
      float: "left",
      backgroundColor: "none",
      height: "2px",
      border: 0,
      borderTop: "2px",
      borderStyle: "solid",
      borderColor: color,
      width: partial ? "5rem" : half ? "50%" : "100%",
      marginTop: space ? ".5rem" : "-1rem",
    }}
  />
)
