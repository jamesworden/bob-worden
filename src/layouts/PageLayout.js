import Layout from "../layouts/Layout"
import Line from "../components/Line"
import React from "react"
import Section from "../components/Containers/Section"

const PageTitle = ({ children, bottomPadding }) => (
  <Section noBottomPadding bottomPadding={bottomPadding}>
    <h1 className="title" style={{ marginBottom: "1rem" }}>
      {children}.
    </h1>
    <Line partial color="#c4b57a" />
  </Section>
)

const PageLayout = ({ children, title, bottomPadding, seoDescription }) => (
  <Layout seoTitle="title" seoDescription={seoDescription}>
    <PageTitle bottomPadding={bottomPadding}>{title}</PageTitle>
    {children}
  </Layout>
)

export default PageLayout
