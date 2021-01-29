import React from "react"
import Layout from "../layouts/Layout"

export default ({ children, seoTitle, seoDescription }) => {
  return (
    <Layout title={seoTitle} description={seoDescription} home>
      {children}
    </Layout>
  )
}
