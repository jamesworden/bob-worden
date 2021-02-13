import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "./BackgroundImage"
import Button from "../../Button"
import Container from "../../Containers/Container"
import React from "react"
import sanitize from "sanitize-html"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const Title = styled.h1`
  color: var(--white);
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 300px) and (min-height: 500px) {
    margin-bottom: 2rem;
  }
`

const Grid = styled.div`
  margin: -2rem 0rem 2rem 0rem;
  display: grid;
  grid-template-columns: 45%;

  @media (max-width: 330px) {
    grid-template-columns: 75%;
  }
  @media (max-width: 430px) {
    margin-top: -1rem;
  }
`
const ScrollContainer = styled.div`
  color: var(--white);
  text-transform: uppercase;
  font-family: "Lato";
  letter-spacing: 0.25rem;
  transition: ease-in-out 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: var(--gold);
  }
`

const P = styled.div`
  color: var(--white);
  flex: 1;
  line-height: 1.8;
`

const ScrollDown = () => (
  <div className="centered">
    <ScrollContainer
      style={{ outline: "none" }}
      onClick={() => scrollTo("#scroll")}
      onKeyDown={() => scrollTo("#scroll")}
      role="button"
      tabIndex={0}
    >
      <span>Learn More</span>
      <span>↓</span>
    </ScrollContainer>
  </div>
)

export default () => {
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        landing: homepage_section(id: "cG9zdDo1MA==") {
          title
          content
          additional_information {
            additionalInformation
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage>
      <StyledHeader>
        <div style={{ marginTop: "2.5rem" }}>
          <Container>
            <Title
              dangerouslySetInnerHTML={{
                __html: sanitize(data.wpgraphql.landing.title),
              }}
            />
            <Grid>
              <P
                style={{ marginBottom: 0, paddingBottom: 0 }}
                dangerouslySetInnerHTML={{
                  __html: sanitize(data.wpgraphql.landing.content),
                }}
              />
              <P
                dangerouslySetInnerHTML={{
                  __html: sanitize(
                    data.wpgraphql.landing.additional_information
                      .additionalInformation
                  ),
                }}
              />
            </Grid>
            <Button to="/contact">Contact Bob</Button>
          </Container>
        </div>
        <ScrollDown />
      </StyledHeader>
    </BackgroundImage>
  )
}
