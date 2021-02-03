import React from "react"
import sanitizeHtml from "sanitize-html"
import styled from "styled-components"
import { AnimationContainer, Container } from "../components/Containers"
import { Square } from "../components/Headshot"
import { Line } from "../components/Line"
import { useDescription } from "../hooks/use-description"
import PageLayout from "../layouts/PageLayout"

const Bio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 350px;
`

const Title = styled.h2`
  margin-bottom: 0;
`

const Profile = styled.div`
  margin-top: 3rem;
  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
  }
`
const HeadshotContainer = styled.div`
  margin: 2rem 0rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px,
    rgba(0, 0, 0, 0.07) 0 16px 32px rgba(0, 0, 0, 0.07);
  @media (min-width: 800px) {
    margin-left: 4rem;
  }
`

const AboutSectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  justify-content: center;
  > * {
    width: 100%;
  }
`

const AboutSection = ({ title, content }) => (
  <AnimationContainer>
    <h3>{title}</h3>
    <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} />
    <Line color="var(--gold)" space half />
  </AnimationContainer>
)

export default ({ data }) => {
  // Separate the main about section from the rest
  let aboutSections = []
  let mainSection

  data.wpgraphql.about_sections.nodes.forEach(node => {
    if (node.id !== "cG9zdDo3Mw==") {
      aboutSections.push(node)
    } else {
      mainSection = node
    }
  })

  return (
    <PageLayout title="About" seoDescription={sanitizeHtml(useDescription())}>
      <Container>
        <Profile>
          <Bio>
            <div>
              <Title>{mainSection.title}</Title>
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(mainSection.content),
                }}
              />
            </div>
            <Line color="var(--gold)" space />
          </Bio>
          <HeadshotContainer className="centered">
            <Square />
          </HeadshotContainer>
        </Profile>
        <AboutSectionsContainer>
          {aboutSections.map(node => (
            <AboutSection title={node.title} content={node.content} />
          ))}
        </AboutSectionsContainer>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  {
    wpgraphql {
      about_sections {
        nodes {
          title
          content
          id
        }
      }
    }
  }
`
