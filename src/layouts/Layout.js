import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import React from "react"
import SEO from "../components/SEO"

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
