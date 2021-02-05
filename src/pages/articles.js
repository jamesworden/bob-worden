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
    {data.wpgraphql.articles.nodes
      .filter(
        node =>
          selected === "All" ||
          getNamesFromNodes(node.article_categories.nodes).includes(selected)
      )
      .map(node => (
        <PostCard
          key={node.title}
          title={node.title}
          excerpt={node.excerpt}
          date={getFormattedDate(node.date)}
          slug={"articles/" + node.slug}
          external={node.article_information.externalArticle}
          externalUrl={
            node.article_information.externalArticle
              ? node.article_information.externalArticleLink
              : null
          }
        />
      ))}
  </PostContainer>
)

export default ({ data }) => {
  // Get all categories from WordPress
  const allCategories = getNamesFromNodes(
    data.wpgraphql.article_categories.nodes
  )
  // Add the 'All' category to that array
  allCategories.unshift("All")
  // Create the selected state and set it to 'All'
  const [selected, setSelected] = useState("All")

  return (
    <PageLayout
      title="Articles"
      seoDescription="Articles written by Bob Worden Esq."
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
          {data.wpgraphql.articles.length === 0 ? (
            <NoPostsText>articles</NoPostsText>
          ) : (
            <Posts selected={selected} data={data} />
          )}
          <Sidebar articles />
        </SidebarContainer>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  {
    wpgraphql {
      articles {
        nodes {
          title
          date
          excerpt
          slug
          article_information {
            externalArticle
            externalArticleLink
            featuredArticle
          }
          article_categories {
            nodes {
              name
            }
          }
        }
      }
      article_categories {
        nodes {
          name
        }
      }
    }
  }
`
