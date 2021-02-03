import React from "react"
import Profile from "./Profile"
import SidebarFeaturedArticles from "./SidebarFeaturedArticles"
import styled from "styled-components"
import CallToAction from "./CallToAction"
import SidebarFeaturedBlogPosts from "./SidebarFeaturedBlogPosts"

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
  max-width: 23rem;
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
