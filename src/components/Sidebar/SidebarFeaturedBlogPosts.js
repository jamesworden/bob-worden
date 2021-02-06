import {
  CardContainer,
  FeaturedContainer,
  FeaturedContainerTitle,
} from "./FeaturedContainers"

import Line from "../Line"
import React from "react"
import { getFormattedDate } from "../../util/Functions"
import { navigate } from "gatsby"
import { useFeaturedBlogPosts } from "../../hooks/use-featured-blog-posts"

export default () => {
  const handleClick = node => navigate("/blog/" + node.slug)

  return useFeaturedBlogPosts().length === 0 ? (
    <Line color="var(--gold)" />
  ) : (
    <FeaturedContainer>
      <FeaturedContainerTitle>Featured Blog Posts</FeaturedContainerTitle>
      {useFeaturedBlogPosts().map(node => (
        <div
          key={node.title}
          style={{ outline: "none" }}
          onClick={() => handleClick(node)}
          onKeyDown={() => handleClick(node)}
          tabIndex={0}
          role="button"
        >
          <CardContainer
            title={node.title}
            date={getFormattedDate(node.date)}
          />
        </div>
      ))}
    </FeaturedContainer>
  )
}
