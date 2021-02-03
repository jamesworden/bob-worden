import React from "react"
import HomeLayout from "../layouts/HomeLayout"
import Landing from "../components/index/Landing"
import Card from "../components/index/Card"
import Video from "../components/index/Video"
import Resume from "../components/index/Resume"
import SectionA from "../components/Index/SectionA"
import SectionB from "../components/Index/SectionB"
import SectionC from "../components/Index/SectionC"
import FeaturedBlogPosts from "../components/Index/FeaturedBlogPosts"
import FeaturedArticles from "../components/Index/FeaturedArticles"
import CallToAction from "../components/Index/CallToAction"
import { graphql } from "gatsby"

export default ({ data }) => (
  <HomeLayout>
    <Landing
      title={data.wpgraphql.landing.title}
      content={data.wpgraphql.landing.content}
      additionalInformation={
        data.wpgraphql.landing.additional_information.additionalInformation
      }
    />
    <SectionA />
    <SectionB />
    <Card
      title={data.wpgraphql.card.title}
      content={data.wpgraphql.card.content}
      additionalInformation={
        data.wpgraphql.card.additional_information.additionalInformation
      }
    />
    <SectionC />
    <Video />
    <Resume />
    <FeaturedArticles />
    <FeaturedBlogPosts />
    <CallToAction />
  </HomeLayout>
)

export const query = graphql`
  {
    wpgraphql {
      landing: homepage_section(id: "cG9zdDo1MA==") {
        title
        content
        additional_information {
          additionalInformation
        }
      }
      card: homepage_section(id: "cG9zdDo1Ng==") {
        title
        content
        additional_information {
          additionalInformation
        }
      }
    }
  }
`
