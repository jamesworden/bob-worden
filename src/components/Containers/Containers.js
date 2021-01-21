import React from "react"
import styles from "./Containers.module.css"

const Container = ({ children, position, maxWidth = "1196px" }) => (
  <div className={styles.centered} style={{ position }}>
    <div className={styles.container} style={{ maxWidth }}>
      {children}
    </div>
  </div>
)

const Section = ({
  children,
  backgroundColor = "white",
  noVerticalPadding,
}) => {
  let paddingTop, paddingBottom
  if (noVerticalPadding) {
    paddingTop = 0
    paddingBottom = 0
  }
  return (
    <section
      className={styles.section}
      style={{ backgroundColor, paddingTop, paddingBottom }}
    >
      <Container maxWidth="860px">{children}</Container>
    </section>
  )
}

const SmallSection = ({ children }) => (
  <div className={styles.centered}>
    <div className={styles.smallSection}>{children}</div>
  </div>
)

export { Container, Section, SmallSection }
