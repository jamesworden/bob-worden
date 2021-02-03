import React from "react"
import PostCard from "../PostCard"
import { getFormattedDate } from "../../util/Functions"
import {
  AnimationContainer,
  DiagonalBackground,
  FeaturedPostContainer,
} from "../Containers"
import FeaturedTitle from "./FeaturedTitle"
import { useFeaturedArticles } from "../../hooks/use-featured-articles"

export default () => {
  return useFeaturedArticles().length === 0 ? null : (
    <React.Fragment>
      <FeaturedTitle to="articles">Articles</FeaturedTitle>
      <DiagonalBackground>
        <FeaturedPostContainer>
          {useFeaturedArticles().map(node => (
            <AnimationContainer>
              <PostCard
                featured
                key={node.title}
                title={node.title}
                excerpt={node.excerpt}
                date={getFormattedDate(node.date)}
                slug={"articles/" + node.slug}
                external={node.article_information.externalArticle}
                externalUrl={node.article_information.externalArticleLink}
              />
            </AnimationContainer>
          ))}
        </FeaturedPostContainer>
      </DiagonalBackground>
    </React.Fragment>
  )
}
