import React from "react"
import Container from "../components/Container"
import Layout from "../layouts/Layout"

const PageLayout = ({ children }) => (
  <Layout>
    <Container>{children}</Container>
  </Layout>
)

export default PageLayout
