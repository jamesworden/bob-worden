import AnimationContainer from "../Containers/AnimationContainer"
import FeaturedPostContainer from "../Containers/FeaturedPostContainer"
import FeaturedTitle from "./FeaturedTitle"
import PostCard from "../PostCard"
import React from "react"
import { getFormattedDate } from "../../util/Functions"
import { useFeaturedBlogPosts } from "../../hooks/use-featured-blog-posts"

export default () => {
  return useFeaturedBlogPosts().length === 0 ? null : (
    <React.Fragment>
      <FeaturedTitle to="/blog">Blog Posts</FeaturedTitle>
      <section style={{ backgroundColor: "var(--lightgold)" }}>
        <FeaturedPostContainer>
          {useFeaturedBlogPosts().map(node => (
            <AnimationContainer key={node.title}>
              <PostCard
                featured
                title={node.title}
                excerpt={node.excerpt}
                date={getFormattedDate(node.date)}
                slug={"blog/" + node.slug}
                external={false}
                externalUrl={null}
                native={false}
              />
            </AnimationContainer>
          ))}
        </FeaturedPostContainer>
      </section>
    </React.Fragment>
  )
}
