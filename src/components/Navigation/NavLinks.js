import NavLink from "./NavLink"
import React from "react"

export default ({ color, close }) => (
  <React.Fragment>
    {/* <NavLink color={color}>home</NavLink> */}
    <NavLink color={color} close={close}>
      about
    </NavLink>
    <NavLink color={color} close={close}>
      articles
    </NavLink>
    <NavLink color={color} close={close}>
      blog
    </NavLink>
    <NavLink color={color} close={close}>
      contact
    </NavLink>
  </React.Fragment>
)
