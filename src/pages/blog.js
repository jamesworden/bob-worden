import React, { useState } from "react"
import { getFormattedDate, getNamesFromNodes } from "../util/Functions"

import CategoryBar from "../components/CategoryBar"
import Container from "../components/Containers/Container"
import NoPostsText from "../components/NoPostsText"
import PageLayout from "../layouts/PageLayout"
import PostCard from "../components/PostCard"
import PostContainer from "../components/Containers/PostContainer"
import Sidebar from "../components/Sidebar"
import SidebarContainer from "../components/Containers/SidebarContainer"
import { graphql } from "gatsby"

const Posts = ({ selected, data }) => (
  <PostContainer>
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
          slug={"blog/" + node.slug}
          external={false}
          externalUrl={null}
          native={true}
        />
      ))}
  </PostContainer>
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
          {data.wpgraphql.posts === undefined ? (
            <NoPostsText>blog posts</NoPostsText>
          ) : (
            <Posts selected={selected} data={data} />
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
