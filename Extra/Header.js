import React from "react"
import { Link } from "gatsby"
import headerStyles from "./Header.module.css"

export default ({ whiteMenu }) => {
  let style = whiteMenu ? headerStyles.white : headerStyles.black
  let Icon = whiteMenu
    ? require("../../static/whiteIcon.svg")
    : require("../../static/blackIcon.svg")

  return <div></div>
}
