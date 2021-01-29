import React from "react"
import { Line } from "../Line"
import styles from "./Containers.module.css"
import sanatizeHtml from "sanitize-html"

const Container = ({ children, position, maxWidth = "1096px", zIndex = 0 }) => (
  <div className="centered" style={{ position, zIndex }}>
    <div className="container" style={{ maxWidth }}>
      {children}
    </div>
  </div>
)

const Section = ({
  children,
  backgroundColor = "var(--white);",
  topPadding,
  maxWidth = "1096px",
  textAlign = "left",
  color = "black",
  bottomPadding,
}) => {
  return (
    <section
      style={{
        color,
        backgroundColor,
        textAlign,
      }}
      className={`${topPadding ? styles.topPadding : ""} ${
        bottomPadding ? styles.bottomPadding : ""
      } `}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </section>
  )
}

const TextContainer = ({ title, color, lineColor, content }) => (
  <div className={styles.textContainer}>
    <div className={styles.textTitle}>
      <h2 style={{ color }}>{title}</h2>
      <Line partial color={lineColor} />
    </div>
    <div className={styles.textContent} style={{ color }}>
      <div dangerouslySetInnerHTML={{ __html: sanatizeHtml(content) }} />
    </div>
  </div>
)

const ListContainer = ({ title, color, lineColor, content, array }) => (
  <div className={styles.listContainer}>
    <div className={styles.listContent}>
      <div className={styles.listTitle}>
        <h2 style={{ color }}>{title}</h2>
        <Line partial color={lineColor} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: sanatizeHtml(content) }} />
    </div>
    <div className={styles.list} style={{ color }}>
      <ul className={styles.list}>
        {array.map(string => (
          <li
            key={string}
            className={styles.item}
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
            data-sal-delay="200"
          >
            {string}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const FeaturedPostContainer = ({ children }) => (
  <div className={styles.featuredPostContainer}>{children}</div>
)

const AnimationContainer = ({ children }) => (
  <div data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">
    {children}
  </div>
)

export {
  Container,
  Section,
  TextContainer,
  ListContainer,
  FeaturedPostContainer,
  AnimationContainer,
}
