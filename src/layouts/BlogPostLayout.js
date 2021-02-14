import Layout from "./Layout"
import { Link } from "gatsby"
import React from "react"
import Section from "../components/Containers/Section"
import { getFormattedDate } from "../util/Functions"
import { graphql } from "gatsby"
import sanitize from "sanitize-html"
import styled from "styled-components"

const blogPostWidth = "50rem"

const StyledTitle = styled.h1`
  text-align: left;
  max-width: ${blogPostWidth};
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
  padding-top: 2rem;
  padding-bottom: 1rem;
  * {
    font-weight: bold;
  }
`

const Body = styled.div`
  padding-bottom: 2rem;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
  }
`

const BlogPostLayout = ({ data }) => (
  <Layout
    seoTitle={data.wpgraphql.post.title}
    seoDescription={data.wpgraphql.post.excerpt}
  >
    <Section noBottomPadding background="var(--gray)" maxWidth={blogPostWidth}>
      <header style={{ paddingBottom: "4rem" }}>
        <StyledTitle>{data.wpgraphql.post.title}</StyledTitle>
        <div>
          <StyledLink to="/about">Bob Worden Esq.</StyledLink>
          <span style={{ margin: "0rem 1rem" }}>|</span>
          {getFormattedDate(data.wpgraphql.post.date)}
        </div>
      </header>
    </Section>
    <Section noBottomPadding noTopPadding maxWidth={blogPostWidth}>
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: sanitize(data.wpgraphql.post.excerpt),
        }}
      />
      <Body
        dangerouslySetInnerHTML={{
          __html: data.wpgraphql.post.content,
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
