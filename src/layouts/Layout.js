import React from "react"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import SEO from "../components/SEO"

const Layout = ({ children, seoTitle, seoDescription }) => (
  <div
    style={{
      padding: "0 0 3rem",
      position: "relative",
      minHeight: "calc(100vh - 3rem)",
    }}
  >
    <SEO title={seoTitle} description={seoDescription} />
    <Navigation />
    {children}
    <Footer />
  </div>
)

export default Layout
