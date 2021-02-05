import AnimationContainer from "../Containers/AnimationContainer"
import DiagonalContainer from "../Containers/DiagonalContainer"
import FeaturedPostContainer from "../Containers/FeaturedPostContainer"
import FeaturedTitle from "./FeaturedTitle"
import PostCard from "../PostCard"
import React from "react"
import { getFormattedDate } from "../../util/Functions"
import { useFeaturedArticles } from "../../hooks/use-featured-articles"

export default () => {
  return useFeaturedArticles().length === 0 ? null : (
    <React.Fragment>
      <FeaturedTitle to="articles">Articles</FeaturedTitle>
      <DiagonalContainer>
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
      </DiagonalContainer>
    </React.Fragment>
  )
}
