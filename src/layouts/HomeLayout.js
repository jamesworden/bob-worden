import React from "react"
import { useDescription } from "../hooks/use-description"
import Layout from "../layouts/Layout"
import sanitizeHtml from "sanitize-html"

export default ({ children }) => {
  return (
    <Layout
      seoTitle="Bob Worden Esq."
      seoDescription={sanitizeHtml(useDescription()).innerHTML}
      home
    >
      {children}
    </Layout>
  )
}
