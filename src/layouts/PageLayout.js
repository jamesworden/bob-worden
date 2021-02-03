import React from "react"
import { Section } from "../components/Containers"
import { Line } from "../components/Line"
import Layout from "../layouts/Layout"

const PageTitle = ({ children, bottomPadding }) => (
  <Section topPadding bottomPadding={bottomPadding}>
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
