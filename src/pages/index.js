import React from "react"
import HomeLayout from "../layouts/HomeLayout"
import Landing from "../components/index/Landing"
import Card from "../components/index/Card"
import Video from "../components/index/Video"
import Resume from "../components/index/Resume"
import SectionA from "../components/Index/SectionA"
import SectionB from "../components/Index/SectionB"
import SectionC from "../components/Index/SectionC"

// import FeaturedBlogPosts from "../components/Index/FeaturedBlogPosts"
import FeaturedArticles from "../components/Index/FeaturedArticles"
import CallToAction from "../components/Index/CallToAction"

export default () => (
  <HomeLayout>
    <Landing />
    <SectionA />
    <SectionB />
    <Card />
    <SectionC />
    <Video />
    <Resume />
    <FeaturedArticles />
    {/* <FeaturedBlogPosts /> */}
    <CallToAction />
  </HomeLayout>
)
