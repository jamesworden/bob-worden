import React from "react"
import PostCard from "../PostCard"
import { getFormattedDate } from "../../util/Functions"
import {
  AnimationContainer,
  Container,
  FeaturedPostContainer,
} from "../Containers"
import FeaturedTitle from "./FeaturedTitle"
import { graphql, useStaticQuery } from "gatsby"
import { sortArticlesByDate } from "../../util/Functions"

export default () => {
  const data = useStaticQuery(
    graphql`
      {
        wpgraphql {
          articles {
            nodes {
              article_categories {
                nodes {
                  name
                }
              }
              article_information {
                externalArticle
                externalArticleLink
                featuredArticle
              }
              author {
                node {
                  name
                }
              }
              date
              content
              title
              slug
              excerpt
            }
          }
        }
      }
    `
  )

  // Push all featured articles into an array
  // This is done manually here because Gatsby
  // doesn't allow filtering based on ACF fields
  let featuredArticles = []
  data.wpgraphql.articles.nodes.forEach(node => {
    if (node.article_information.featuredArticle) {
      featuredArticles.push(node)
    }
  })

  // Sort the featured articles by date
  // featuredArticles = sortArticlesByDate(featuredArticles)

  // If there are no featured posts, return nothing
  return featuredArticles.length === 0 ? null : (
    <Container>
      <FeaturedTitle to="articles">Articles</FeaturedTitle>
      <FeaturedPostContainer>
        {featuredArticles.map(node => (
          <AnimationContainer>
            <PostCard
              key={node.title}
              title={node.title}
              excerpt={node.excerpt}
              datePublished={getFormattedDate(node.date)}
              author={node.author.node.name}
              slug={node.slug}
              external={node.article_information.externalArticle}
              externalUrl={node.article_information.externalArticleLink}
            />
          </AnimationContainer>
        ))}
      </FeaturedPostContainer>
    </Container>
  )
}
