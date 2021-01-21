import React from "react"
import Article from "../components/Article/Article"
import PageLayout from "../layouts/PageLayout"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)

  return (
    // <PageLayout>
    //   <h1 className="title">Articles</h1>
    //   {data.wpgraphql.posts.nodes.map(node => (
    //     <Article
    //       key={node.title}
    //       title={node.title}
    //       excerpt={node.excerpt}
    //       slug={node.slug}
    //     />
    //   ))}
    // </PageLayout>
    <div>Under Construction.</div>
  )
}

export const query = graphql`
  {
    wpgraphql {
      posts {
        nodes {
          title
          slug
          date
          content
          excerpt
        }
      }
    }
  }
`
