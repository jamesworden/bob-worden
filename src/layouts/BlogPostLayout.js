import React from "react"
import Layout from "./Layout"
import { graphql } from "gatsby"
import { Section } from "../components/Containers"
import styled from "styled-components"
import { Link } from "gatsby"
import { getFormattedDate } from "../util/Functions"
import sanitizeHtml from "sanitize-html"

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

// const StyledUrl = styled.a`
//   text-decoration: none;
//   transition: all ease 0.3s;
//   cursor: pointer;
//   color: black;

//   &:hover {
//     transition: all ease 0.3s;
//     color: var(--gold);
//   }
// `

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
    <Section topPadding backgroundColor="var(--gray)" maxWidth="50rem">
      <header style={{ paddingBottom: "4rem" }}>
        <StyledTitle>{data.wpgraphql.post.title}</StyledTitle>
        <div>
          <StyledLink to="/about">Bob Worden Esq.</StyledLink>
          <span style={{ margin: "0rem 1rem" }}>|</span>
          {getFormattedDate(data.wpgraphql.post.date)}
        </div>
      </header>
    </Section>
    <Section maxWidth="50rem">
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(data.wpgraphql.post.excerpt),
        }}
      />
      <Body
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(data.wpgraphql.post.content),
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
