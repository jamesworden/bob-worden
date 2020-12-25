import React from "react"
import Article from "../components/Article"
import PageLayout from "../layouts/PageLayout"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)

  return (
    <PageLayout>
      <h1 className="title">Articles</h1>
      {data.wpcontent.posts.nodes.map(node => (
        <Article
          key={node.title}
          title={node.title}
          excerpt={node.excerpt}
          slug={node.slug}
        />
      ))}
    </PageLayout>
  )
}

export const query = graphql`
  {
    wpcontent {
      posts {
        nodes {
          title
          uri
          slug
          excerpt
        }
      }
    }
  }
`
