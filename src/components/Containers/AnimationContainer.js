import React from "react"

// Used for divs that are to slide up when scrolling
export default ({ children }) => (
  <div
    data-sal="slide-up"
    data-sal-duration="1000"
    data-sal-easing="ease"
    style={{ width: "100%" }}
  >
    {children}
  </div>
)
