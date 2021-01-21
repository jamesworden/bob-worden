import React from "react"
import Footer from "../components/Footer/Footer"
import SEO from "../components/SEO"
import Navigation from "../components/Navigation/Navigation"

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
      <SEO title={seoTitle} description={seoDescription} />
      <Navigation home={home} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
