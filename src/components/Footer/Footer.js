import React from "react"
import styles from "./Footer.module.css"
import Logos from "./Logos"
import { Container } from "../Containers/Containers"

const Bottom = () => {
  let date = new Date().getFullYear()
  return (
    <div className={styles.bottom}>
      <span>© Copyright {date} Bob Worden. All Rights Reserved.</span>
    </div>
  )
}

const Footer = () => (
  <footer>
    <div className={styles.container}>
      <div className={styles.content}>
        <Container>
          <h2 className={styles.title}>Bob Worden</h2>
          <ul className={styles.list}>
            <li>175 Pinelawn Road, Suite 308</li>
            <li>Melville, NY 11747</li>
            <li>631-694-0033 EXT 226</li>
            <li>bob@bobworden.com</li>
          </ul>
          <Logos />
        </Container>
      </div>
    </div>
    <Bottom />
  </footer>
)

export default Footer
