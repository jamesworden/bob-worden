import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Div = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 10;
  position: relative;
`

export default ({ color }) => {
  return (
    <Div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h3
          style={{
            textTransform: "uppercase",
            cursor: "pointer",
            color,
          }}
        >
          Bob Worden Esq.
        </h3>
      </Link>
    </Div>
  )
}
