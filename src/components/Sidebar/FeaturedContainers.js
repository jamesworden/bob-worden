import React from "react"
import styled from "styled-components"
import ArrowLink from "../ArrowLink"

const StyledCardBar = styled.div`
  min-width: 0.25rem;
  min-height: 100%;
  background-color: var(--gold);
  margin-right: 1rem;
`

const StyledCardContainer = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 3rem;
  h3 {
    transition: all 0.3s ease;
  }

  h3:hover {
    color: var(--gold);
    transition: all 0.3s ease;
  }
`

const StyledLink = styled.span`
  font-size: 14px;
  font-family: "Lato" sans-serif;
  font-weight: bolder;
`

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  * {
    margin: 0;
    padding: 0;
  }
`

const StyledDate = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  padding-bottom: 1rem;
`

const FeaturedContainer = styled.div`
  margin-bottom: 2rem;
  max-width: 25rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07);
  background-color: var(--white);
  padding: 2rem;
`

const StyledTitle = styled.h3`
  padding-bottom: 1.25rem;
  font-size: 24px;
`

const FeaturedContainerTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 2.5rem;
  text-align: center;
  font-size: 32px;
`

const CardContainer = ({ date, title, handleClick }) => (
  <StyledCardContainer>
    <StyledCardBar />
    <StyledCardContent>
      <StyledDate>{date}</StyledDate>
      <StyledTitle>{title}</StyledTitle>
      <ArrowLink>
        <StyledLink>Read More</StyledLink>
      </ArrowLink>
    </StyledCardContent>
  </StyledCardContainer>
)

export { FeaturedContainer, FeaturedContainerTitle, CardContainer }
