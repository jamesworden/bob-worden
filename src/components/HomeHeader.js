import styles from "./HomeHeader.module.css"
import React from "react"
import Button from "./Button"

const HomeHeader = () => (
  <div className={styles.container}>
    <h1 className={styles.heroTitle}>ROBERT WORDEN</h1>
    <hr className={styles.line} />
    <h2 className={styles.heroSubtitle}>Mediator & Arbitrator</h2>
    <Button text="CONTACT" to="/contact" />
  </div>
)

export default HomeHeader
