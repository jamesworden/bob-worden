import React, { useLayoutEffect, useState } from "react"
import { Container } from "../Containers/Containers"
import styles from "./Landing.module.css"
import Button from "../Button/Button"

const Scroll = () => {
  const [parallax, setParallax] = useState(0)
  useLayoutEffect(() => {
    function updateParallax() {
      console.log(parallax)
      setParallax(window.scrollY * -0.15)
    }
    window.addEventListener("scroll", updateParallax)
    updateParallax()
    return () => window.removeEventListener("scroll", updateParallax)
  }, [])

  return (
    <div className={styles.scrollContainer} style={{ marginTop: parallax }}>
      <span className={styles.scrollText}>SCROLL</span>
    </div>
  )
}

const Grid = () => (
  <section className={styles.grid}>
    <p style={{ color: "white", flex: 1, lineHeight: 1.8 }}>
      Avoid uncertainty at trial with mediation and arbitration from an attorney
      who has litigated for over 35 years.
    </p>
    <p style={{ color: "white", flex: 1, lineHeight: 1.8 }}>
      Connect with Bob Worden, Esq. and begin settling complex cases.
    </p>
  </section>
)

const Landing = () => (
  <header className={styles.container}>
    <div className={styles.content}>
      <Container>
        <h1 className={styles.title} style={{ margin: 0 }}>
          Don't gamble in
        </h1>
        <h1
          className={styles.title}
          style={{ marginTop: 0, marginLeft: 0, marginRight: 0 }}
        >
          the courtroom.
        </h1>
        <Grid />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button to="contact">Contact Bob</Button>
          <Scroll />
        </div>
      </Container>
    </div>
  </header>
)

export default Landing
