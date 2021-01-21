import React from "react"
import styles from "./Card.module.css"
import Image from "../../../static/headshot.jpg"
import { Section } from "../Containers/Containers"

const Card = () => (
  <Section noVerticalPadding>
    <div className={styles.centered}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={Image} alt="Bob Worden" className={styles.image} />
        </div>
        <div className={styles.content}>
          <span className={styles.name}>Bob Worden</span>
          <h2 className={styles.excerpt}>
            Ut aute elit culpa irure proident ut irure pariatur proident. Et est
            dolore labore et sit enim enim.
          </h2>
          <p>Enim id aliquip amet fugiat nulla cupidatat elit tempor.</p>
        </div>
      </div>
    </div>
  </Section>
)

export default Card
