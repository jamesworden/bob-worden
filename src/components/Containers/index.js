import React from "react"
import { Line } from "../Line"
import styles from "./Containers.module.css"
import sanatizeHtml from "sanitize-html"
import styled from "styled-components"

// Containers have centered children, horisontal padding, and proper max width
const Container = ({ children, position, maxWidth = "1096px", zIndex = 0 }) => (
  <div className="centered" style={{ position, zIndex }}>
    <div className="container" style={{ maxWidth }}>
      {children}
    </div>
  </div>
)

// Sections have options for vertical padding and more.
// These are placed inside of Containers as they have no horisontal padding.
// Sections with the same background color can stack so there isn't
// Double whitespace of the same color.
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

// These are used for Section A and Section B.
const TextContainer = ({ title, color, lineColor, content }) => (
  <div className={styles.textContainer}>
    <div className={styles.textTitle}>
      <h3 style={{ color }}>{title}</h3>
      <Line partial color={lineColor} />
    </div>
    <div className={styles.textContent} style={{ color }}>
      <div dangerouslySetInnerHTML={{ __html: sanatizeHtml(content) }} />
    </div>
  </div>
)

// This is used for section C. Displays a list with text.
const ListContainer = ({ title, color, lineColor, content, array }) => (
  <div className={styles.listContainer}>
    <div className={styles.listContent}>
      <div className={styles.listTitle}>
        <h3 style={{ color }}>{title}</h3>
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

// These are used for Featured Articles and Featured Posts
const FeaturedPostContainer = ({ children }) => (
  <Container>
    <div className="centered">
      <div className={styles.featuredPostContent}>{children}</div>
    </div>
  </Container>
)

const DiagonalBackground = ({ children }) => (
  <div className={styles.diagonalContainer}>
    <div className={styles.diagonalContent}>{children}</div>
  </div>
)

// Used for divs that are to slide up when scrolling
const AnimationContainer = ({ children }) => (
  <div data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">
    {children}
  </div>
)

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 888px) {
    flex-direction: row;
  }
`

export {
  Container,
  Section,
  TextContainer,
  ListContainer,
  FeaturedPostContainer,
  AnimationContainer,
  DiagonalBackground,
  SidebarContainer,
}
