import React, { useState, useLayoutEffect } from "react"
import styles from "./Resume.module.css"
import Services from "../Services"
import TopTen from "../TopTen"
import { SectionLine } from "../../Line"

export default () => {
  const [width, setWidth] = useState(0)
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth([window.innerWidth])
    }
    window.addEventListener("resize", updateWidth)
    updateWidth()
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <React.Fragment>
      <div className={styles.centered}>
        <section className={styles.container}>
          <Services
            paddingBottom={
              width < 668 ? "6rem" : width < 1008 ? "7rem" : "0rem"
            }
            paddingRight={width > 1008 ? "2rem" : "1rem"}
          />
          <TopTen
            backgroundColor={width < 1008 ? "#3D3C47" : "var(--white)"}
            color={width < 1008 ? "var(--white)" : "black"}
            lineColor={width < 1008 ? "var(--white)" : "var(--gold)"}
            paddingTop={width < 668 ? "6rem" : width < 1008 ? "7rem" : "0rem"}
            paddingBottom={
              width < 668 ? "6rem" : width < 1008 ? "7rem" : "0rem"
            }
            paddingLeft={width > 1008 ? "2rem" : "1rem"}
          />
        </section>
      </div>
      {width > 1008 ? <SectionLine /> : null}
    </React.Fragment>
  )
}
