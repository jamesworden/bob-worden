import React from "react"
import PostCard from "../PostCard"
import { getFormattedDate } from "../../util/Functions"
import { AnimationContainer, FeaturedPostContainer } from "../Containers"
import FeaturedTitle from "./FeaturedTitle"
import { useFeaturedBlogPosts } from "../../hooks/use-featured-blog-posts"

export default () => {
  return useFeaturedBlogPosts().length === 0 ? null : (
    <React.Fragment>
      <FeaturedTitle to="/blog">Blog Posts</FeaturedTitle>
      <div style={{ backgroundColor: "var(--lightgold)" }}>
        <FeaturedPostContainer>
          {useFeaturedBlogPosts().map(node => (
            <AnimationContainer>
              <PostCard
                featured
                key={node.title}
                title={node.title}
                excerpt={node.excerpt}
                date={getFormattedDate(node.date)}
                slug={"blog/" + node.slug}
                external={false}
                externalUrl={null}
              />
            </AnimationContainer>
          ))}
        </FeaturedPostContainer>
      </div>
    </React.Fragment>
  )
}
