import React from "react"
import styled from "styled-components"
import { Circle } from "../Headshot"
import sanatizeHtml from "sanitize-html"
import ArrowLink from "../ArrowLink"
import { useDescription } from "../../hooks/use-description"

const ProfileContainer = styled.div`
  margin: auto;
  justify-content: "center";
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 22.5rem;
  padding-bottom: 4rem;
`

// Used for dangerouslySetInnerHtml
// That's why we style the child element
const StyledContent = styled.div`
  * {
    font-size: 14px;
    flex-wrap: wrap;
  }
`

// Goes within the ArrowLink to style the text accordingly
const StyledSpan = styled.span`
  font-family: "Lato" sans-serif;
  font-weight: bolder;
  font-size: 16px;
`

// Title
const StyledH3 = styled.h3`
  margin-bottom: 0;
  font-size: 24;
  text-align: center;
`

export default () => (
  <ProfileContainer>
    <div className="centered" style={{ margin: "-3rem 0" }}>
      <Circle />
    </div>
    <StyledH3>Bob Worden Esq.</StyledH3>
    <StyledContent
      dangerouslySetInnerHTML={{
        __html: sanatizeHtml(useDescription()),
      }}
      style={{ fontSize: 18 }}
    />
    <div style={{ padding: 0 }}>
      <ArrowLink to="/about">
        <StyledSpan>About Bob</StyledSpan>
      </ArrowLink>
    </div>
  </ProfileContainer>
)
