import CallToAction from "./CallToAction"
import Profile from "./Profile"
import React from "react"
import SidebarFeaturedArticles from "./SidebarFeaturedArticles"
import SidebarFeaturedBlogPosts from "./SidebarFeaturedBlogPosts"
import styled from "styled-components"

// Container takes up entire width
const SidebarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 888px) {
    margin-left: 2rem;
  }
`

// This is the content that is centered above
const SidebarContent = styled.div`
  display: inline-block;
  max-width: 22.5rem;
`

export default ({ articles, blog }) => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <Profile />
        {articles ? <SidebarFeaturedArticles /> : null}
        {blog ? <SidebarFeaturedBlogPosts /> : null}
        <CallToAction />
      </SidebarContent>
    </SidebarContainer>
  )
}
