import React from "react"
import HomeHeader from "../components/HomeHeader"
import HomeContent from "../components/HomeContent"
import Layout from "../layouts/Layout"

export default () => (
  <React.Fragment>
    <Layout>
      <HomeHeader />
      <HomeContent />
    </Layout>
  </React.Fragment>
)
