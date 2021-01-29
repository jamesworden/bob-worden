import React from "react"
import NavLink from "./NavLink"

export default ({ color }) => (
  <React.Fragment>
    {/* <NavLink color={color}>home</NavLink> */}
    <NavLink color={color}>about</NavLink>
    <NavLink color={color}>articles</NavLink>
    <NavLink color={color}>blog</NavLink>
    <NavLink color={color}>contact</NavLink>
  </React.Fragment>
)
