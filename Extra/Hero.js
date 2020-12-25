import React from "react"
import Video from "./Video"
import heroStyles from "./Hero.module.css"

const Hero = () => (
  <div className={heroStyles.container}>
    <Video />
    <div className={heroStyles.text}>
      <h1 className={heroStyles.title}>Robert Worden</h1>
      <h2 className={heroStyles.subtitle}>Mediator & Arbitrator</h2>
    </div>
  </div>
)

export default Hero
