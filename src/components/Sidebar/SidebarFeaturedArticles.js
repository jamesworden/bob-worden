import {
  CardContainer,
  FeaturedContainer,
  FeaturedContainerTitle,
} from "./FeaturedContainers"

import Line from "../Line"
import React from "react"
import { getFormattedDate } from "../../util/Functions"
import { navigate } from "gatsby"
import { useFeaturedArticles } from "../../hooks/use-featured-articles"

export default () => {
  function handleClick(node) {
    node.article_information.externalArticle
      ? window.open(node.article_information.externalArticleLink, "_self")
      : navigate("/articles/" + node.slug)
  }

  return useFeaturedArticles().length === 0 ? (
    <Line color="var(--gold)" />
  ) : (
    <FeaturedContainer>
      <FeaturedContainerTitle>Featured Articles</FeaturedContainerTitle>
      {useFeaturedArticles().map(node => (
        <div
          style={{ outline: "none" }}
          onClick={() => handleClick(node)}
          onKeyDown={() => handleClick(node)}
          tabIndex={0}
          role="button"
        >
          <CardContainer
            date={getFormattedDate(node.date)}
            title={node.title}
          />
        </div>
      ))}
    </FeaturedContainer>
  )
}
