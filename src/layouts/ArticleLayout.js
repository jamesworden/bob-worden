import Layout from "./Layout"
import Line from "../components/Line"
import { Link } from "gatsby"
import React from "react"
import Section from "../components/Containers/Section"
import { getFormattedDate } from "../util/Functions"
import { graphql } from "gatsby"
import sanitize from "sanitize-html"
import styled from "styled-components"

const StyledArticle = styled.div`
  background-color: var(--white);
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07);

  @media (min-width: 668px) {
    padding: 2rem;
    margin-bottom: 2rem;
  }
`

const StyledTitle = styled.h2`
  text-align: left;
  max-width: 50rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: all ease 0.3s;
  cursor: pointer;
  color: black;

  &:hover {
    transition: all ease 0.3s;
    color: var(--gold);
  }
`

const Excerpt = styled.div`
  padding-top: 1rem;
  * {
    font-weight: bold;
  }
`

const ArticleLayout = ({ data }) => (
  <Layout
    seoTitle={data.wpgraphql.article.title}
    seoDescription={data.wpgraphql.article.excerpt}
  >
    <Section
      noBottomPadding
      maxWidth="50rem"
      background="linear-gradient(
    to bottom,
    var(--white),
    var(--white) 10%,
    var(--lightgold) 10%,
    var(--lightgold) 100%
  )"
    >
      <StyledArticle>
        <header style={{ paddingBottom: "2rem" }}>
          <StyledTitle>{data.wpgraphql.article.title}</StyledTitle>
          <div>
            <StyledLink to="/about">Bob Worden Esq.</StyledLink>
            <span style={{ margin: "0rem 1rem" }}>|</span>
            {getFormattedDate(data.wpgraphql.article.date)}
          </div>
        </header>
        <Line color="var(--lightgold)" space />
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: sanitize(data.wpgraphql.article.excerpt),
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: sanitize(data.wpgraphql.article.content),
          }}
        />
      </StyledArticle>
    </Section>
  </Layout>
)

export default ArticleLayout

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      article(id: $id) {
        author {
          node {
            name
          }
        }
        date
        content
        title
        excerpt
        article_categories {
          nodes {
            name
          }
        }
      }
    }
  }
`
