import React, { useState } from "react"
import PostCard from "../components/PostCard"
import PageLayout from "../layouts/PageLayout"
import { graphql } from "gatsby"
import { getFormattedDate, getNamesFromNodes } from "../util/Functions"
import Sidebar from "../components/Sidebar"
import CategoryBar from "../components/CategoryBar"
import { Container, SidebarContainer } from "../components/Containers"
import NoPostsText from "../components/NoPostsText"
import styled from "styled-components"

const StyledPostContainer = styled.div`
  padding: 1rem 0rem;
  width: 100%;
  max-width: 668px;
  justify-content: left;
  > * {
    margin: 3rem 0rem;
  }
`

// let blogCategories = getNamesFromNodes(node.categories.nodes).includes(selected)
// if () {
//   return (

//   )
// }

const PostContainer = ({ selected, data }) => (
  <StyledPostContainer>
    {data.wpgraphql.posts.nodes
      .filter(
        node =>
          selected === "All" ||
          getNamesFromNodes(node.categories.nodes).includes(selected)
      )
      .map(node => (
        <PostCard
          key={node.title}
          title={node.title}
          excerpt={node.excerpt}
          date={getFormattedDate(node.date)}
          author={node.author.node.name}
          slug={"blog/" + node.slug}
          external={false}
          externalUrl={null}
        />
      ))}
  </StyledPostContainer>
)

export default ({ data }) => {
  // Get all categories from WordPress
  const allCategories = getNamesFromNodes(data.wpgraphql.categories.nodes)
  // Add the 'All' category to that array
  allCategories.unshift("All")

  // Create the selected state and set it to 'All'
  const [selected, setSelected] = useState("All")

  return (
    <PageLayout
      title="Blog"
      seoDescription="Blog Posts written by Bob Worden Esq."
    >
      <Container>
        <CategoryBar
          categories={allCategories}
          selected={selected}
          handleClick={value => setSelected(value)}
        />
      </Container>
      <Container>
        <SidebarContainer>
          {data.wpgraphql.posts.length === 0 ? (
            <NoPostsText>blog posts</NoPostsText>
          ) : (
            <PostContainer selected={selected} data={data} />
          )}
          <Sidebar blog />
        </SidebarContainer>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  {
    wpgraphql {
      posts {
        nodes {
          author {
            node {
              name
            }
          }
          title
          date
          excerpt
          slug
          categories {
            nodes {
              name
            }
          }
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`
