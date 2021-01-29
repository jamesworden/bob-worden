import React from "react"
import { Container, Section } from "../components/Containers"
import { Line } from "../components/Line"
import Layout from "../layouts/Layout"

const PageTitle = ({ children }) => (
  <Section topPadding>
    <h1 className="title" style={{ marginBottom: "1rem" }}>
      {children}
    </h1>
    <Line partial color="#c4b57a" />
  </Section>
)

const PageLayout = ({ children, title }) => (
  <Layout>
    <PageTitle>{title}</PageTitle>
    <Container>{children}</Container>
  </Layout>
)

export default PageLayout
