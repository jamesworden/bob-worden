import React from "react"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import Navigation from "../components/Navigation"

const Layout = ({ children, seoTitle, seoDescription, home }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <Navigation home={home} />
      <SEO title={seoTitle} description={seoDescription} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
