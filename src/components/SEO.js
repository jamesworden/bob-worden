import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const SEO = ({ title, description }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
      }
      return (
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="robots" content="index,follow" />
        </Helmet>
      )
    }}
  />
)
export default SEO

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
  }
`
