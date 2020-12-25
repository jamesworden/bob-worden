import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Logo = () => {
  const Icon = require("../../static/whiteIcon.svg")

  const LogoWrap = styled.div`
    margin: auto 0;
    flex: 0 1 36px;
    padding-right: 1rem;

    @media (max-width: 768px) and (orientation: landscape) {
      flex: 0 1 25px;
    }
  `

  return (
    <LogoWrap>
      <Link to="/">
        <img
          src={Icon}
          style={{
            width: "35px",
          }}
        />
      </Link>
    </LogoWrap>
  )
}

export default Logo
