import { graphql, useStaticQuery } from "gatsby"

import React from "react"
import Section from "../Containers/Section"
import { Square } from "../Headshot"
import sanitize from "sanitize-html"
import styled from "styled-components"

const Name = styled.span`
  text-transform: uppercase;
  color: #5a5a5a;
  font-family: "Lora";
`

const Content = styled.div`
  padding: 1rem 2rem;
  max-width: 26rem;
  display: block;
  margin-top: 1rem;

  @media (min-width: 768px) {
    padding-left: 2rem;
  }
`

const Excerpt = styled.h2`
  p {
    line-height: 2rem;
    font-family: "Lora";
    font-size: 28px;
    font-weight: 100;
  }
  @media (min-height: 668px) {
    p {
      line-height: 2.5rem;
      font-size: 32px;
    }
  }
  @media (min-height: 1008px) {
    p {
      line-height: 3rem;
      font-size: 36px;
    }
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 22rem;
  background: linear-gradient(
    to bottom,
    var(--white),
    var(--white) 15%,
    var(--gray) 15%,
    var(--gray) 85%
  );
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 52rem;
    background: linear-gradient(
      to right,
      var(--white),
      var(--white) 15%,
      var(--gray) 15%,
      var(--gray) 85%
    );
    min-height: 320px;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        card: homepage_section(id: "cG9zdDo1Ng==") {
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
    <Section noTopPadding noBottomPadding>
      <div className="centered">
        <Card>
          <ImageContainer>
            <Square />
          </ImageContainer>
          <Content>
            <Name
              dangerouslySetInnerHTML={{
                __html: sanitize(data.wpgraphql.card.title),
              }}
            />
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: sanitize(data.wpgraphql.card.content),
              }}
            />
            <p>
              {data.wpgraphql.card.additional_information.additionalInformation}
            </p>
          </Content>
        </Card>
      </div>
    </Section>
  )
}
