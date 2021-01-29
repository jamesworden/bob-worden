import React from "react"
import { Container } from "./Containers"

const Line = ({ color = "black", partial, space, half }) => (
  <hr
    style={{
      float: "left",
      backgroundColor: "none",
      height: "1px",
      border: 0,
      borderTop: "1px",
      borderStyle: "solid",
      borderColor: color,
      width: partial ? "33%" : half ? "50%" : "100%",
      marginTop: space ? ".5rem" : "-1rem",
    }}
  />
)

const SectionLine = () => (
  <Container>
    <div
      style={{
        width: "100%",
        height: "1rem",
        marginTop: "2.5rem",
        minWidth: "1096px",
      }}
    >
      <Line color="var(--gold)" />
    </div>
  </Container>
)

export { Line, SectionLine }
