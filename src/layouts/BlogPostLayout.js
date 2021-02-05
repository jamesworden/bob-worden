import Layout from "./Layout"
import { Link } from "gatsby"
import React from "react"
import Section from "../components/Containers/Section"
import { getFormattedDate } from "../util/Functions"
import { graphql } from "gatsby"
import sanitize from "sanitize-html"
import styled from "styled-components"

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

const Excerpt = styled.p`
  padding-top: 1rem;
  * {
    font-weight: bold;
  }
`

const Body = styled.p`
  padding: 1rem 0rem;
`

const BlogPostLayout = ({ data }) => (
  <Layout
    seoTitle={data.wpgraphql.post.title}
    seoDescription={data.wpgraphql.post.excerpt}
  >
    <Section noBottomPadding backgroundColor="var(--gray)" maxWidth="50rem">
      <header style={{ paddingBottom: "4rem" }}>
        <StyledTitle>{data.wpgraphql.post.title}</StyledTitle>
        <div>
          <StyledLink to="/about">Bob Worden Esq.</StyledLink>
          <span style={{ margin: "0rem 1rem" }}>|</span>
          {getFormattedDate(data.wpgraphql.post.date)}
        </div>
      </header>
    </Section>
    <Section noBottomPadding noTopPadding maxWidth="50rem">
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: sanitize(data.wpgraphql.post.excerpt),
        }}
      />
      <Body
        dangerouslySetInnerHTML={{
          __html: sanitize(data.wpgraphql.post.content),
        }}
      />
    </Section>
  </Layout>
)

export default BlogPostLayout

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        author {
          node {
            name
          }
        }
        date
        content
        title
        excerpt
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`
