import React, { useState } from "react"
import PostCard from "../components/PostCard"
import PageLayout from "../layouts/PageLayout"
import { graphql } from "gatsby"
import { getFormattedDate, getNamesFromNodes } from "../util/Functions"
import Sidebar from "../components/Sidebar"
import styles from "./articles.module.css"
import CategoryBar from "../components/CategoryBar"

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
    <PageLayout title="Articles" sidebar>
      <CategoryBar
        categories={allCategories}
        selected={selected}
        handleClick={value => setSelected(value)}
      />
      <div className={styles.container}>
        <div className={styles.postContainer}>
          {data.wpgraphql.articles.nodes.map(node => {
            let articleCategories = getNamesFromNodes(
              node.article_categories.nodes
            )
            if (selected === "All" || articleCategories.includes(selected)) {
              return (
                <PostCard
                  key={node.title}
                  title={node.title}
                  excerpt={node.excerpt}
                  date={getFormattedDate(node.date)}
                  author={node.author.node.name}
                  slug={node.slug}
                  postCategories={getNamesFromNodes(
                    node.article_categories.nodes
                  )}
                  externalUrl={
                    node.article_information.externalArticle
                      ? node.article_information.externalArticleLink
                      : null
                  }
                />
              )
            }
          })}
        </div>
        <Sidebar />
      </div>
    </PageLayout>
  )
}

export const query = graphql`
  {
    wpgraphql {
      articles {
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
