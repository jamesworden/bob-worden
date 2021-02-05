import Line from "../Line"
import React from "react"
import sanitize from "sanitize-html"
import styled from "styled-components"

const StyledContainer = styled.div`
  @media (max-width: 600px) {
    div > h2 {
      margin-top: 0;
    }
  }
  @media (min-width: 1008px) {
    display: flex;
    div {
      margin: 0rem 1rem;
    }
  }
`

const TitleContainer = styled.div`
  @media (min-width: 600px) {
    margin-bottom: 4rem;
    width: 55%;
  }
  @media (min-width: 1008px) {
    flex: 1;
    width: 100%;
    margin-bottom: 0;
  }
`

const Content = styled.div`
  @media (min-width: 600px) {
    div p {
      columns: 2 auto;
      column-gap: 2rem;
    }
  }
  @media (min-width: 1008px) {
    flex: 2;
  }
`

// These are used for Section A and Section B.
export default ({ title, color, lineColor, content }) => (
  <StyledContainer>
    <TitleContainer>
      <h2 style={{ color, marginTop: 0 }}>{title}</h2>
      <Line partial color={lineColor} />
    </TitleContainer>
    <Content style={{ color }}>
      <div dangerouslySetInnerHTML={{ __html: sanitize(content) }} />
    </Content>
  </StyledContainer>
)
