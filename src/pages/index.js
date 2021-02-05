import CallToAction from "../components/Index/CallToAction"
import Card from "../components/Index/Card"
import FeaturedArticles from "../components/Index/FeaturedArticles"
import FeaturedBlogPosts from "../components/Index/FeaturedBlogPosts"
import HomeLayout from "../layouts/HomeLayout"
import Landing from "../components/Index/Landing"
import React from "react"
import Resume from "../components/Index/Resume"
import SectionA from "../components/Index/SectionA"
import SectionB from "../components/Index/SectionB"
import SectionC from "../components/Index/SectionC"
import Video from "../components/Index/Video"

export default ({ data }) => (
  <HomeLayout>
    <Landing />
    <SectionA />
    <SectionB />
    <Card />
    <SectionC />
    <Video />
    <Resume />
    <FeaturedArticles />
    <FeaturedBlogPosts />
    <CallToAction />
  </HomeLayout>
)
