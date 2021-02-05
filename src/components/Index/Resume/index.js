import React, { useLayoutEffect, useState } from "react"

import Container from "../../Containers/Container"
import Line from "../../Line"
import Services from "./Services"
import TopTen from "./TopTen"
import styled from "styled-components"

const StyledSection = styled.section`
  padding-top: 6rem;
  max-width: 1008px;
  width: 100%;
  @media (min-width: 668px) {
    padding-top: 7rem;
  }
  @media (min-width: 1008px) {
    padding-top: 9rem;
    display: flex;
    justify-content: space-evenly;
  }
`

const StyledContainer = styled.div`
  @media (min-width: 1008px) {
    display: flex;
    justify-content: space-around;
  }
`

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
      <Line color="var(--gold)" space />
    </div>
  </Container>
)

export default () => {
  const [width, setWidth] = useState(0)
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth([window.innerWidth])
    }
    window.addEventListener("resize", updateWidth)
    updateWidth()
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <React.Fragment>
      <StyledContainer>
        <StyledSection>
          <Services
            paddingBottom={
              width < 668 ? "6rem" : width < 1008 ? "7rem" : "0rem"
            }
            paddingRight={width > 1008 ? "2rem" : "1rem"}
          />
          <TopTen
            backgroundColor={width < 1008 ? "#3D3C47" : "var(--white)"}
            color={width < 1008 ? "var(--white)" : "black"}
            lineColor={width < 1008 ? "var(--white)" : "var(--gold)"}
            paddingTop={width < 668 ? "6rem" : width < 1008 ? "7rem" : "0rem"}
            paddingBottom={
              width < 668 ? "6rem" : width < 1008 ? "7rem" : "0rem"
            }
            paddingLeft={width > 1008 ? "2rem" : "1rem"}
          />
        </StyledSection>
      </StyledContainer>
      {width > 1008 ? <SectionLine /> : null}
    </React.Fragment>
  )
}
