import React, { useEffect } from "react"

import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import SEO from "../components/SEO"

const Layout = ({ children, seoTitle, seoDescription, home }) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    })
  }, [])

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
