import Layout from "../layouts/Layout"
import React from "react"
import sanitize from "sanitize-html"
import { useDescription } from "../hooks/use-description"

export default ({ children }) => {
  return (
    <Layout
      seoTitle="Bob Worden Esq."
      seoDescription={sanitize(useDescription()).innerHTML}
      home
    >
      {children}
    </Layout>
  )
}
