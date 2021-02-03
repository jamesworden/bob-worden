import React from "react"
import { Line } from "../../Line"
import ArrowLink from "../../ArrowLink"

const TopTen = ({
  backgroundColor,
  color,
  lineColor,
  paddingBottom,
  paddingTop,
}) => (
  <div
    style={{
      backgroundColor,
      color,
      display: "flex",
      justifyContent: "center",
      paddingBottom,
      paddingTop,
      paddingLeft: "1rem",
      paddingRight: "1rem",
    }}
  >
    <div style={{ maxWidth: "350px" }}>
      <h3 style={{ marginTop: 0, marginBottom: 0 }}>
        A Top Ten Arbitrator in New York State
      </h3>
      <Line partial color={lineColor} space />
      <div style={{ width: "80%", marginBottom: "2rem", marginTop: "2rem" }}>
        <p style={{ lineHeight: "2rem" }}>
          For the third consecutive year in 2020, Bob Worden Esq. was voted a
          Top Ten Arbitrator in New York State by the New York Law Journal Best
          of Survey.
        </p>
      </div>
      <ArrowLink
        color={color}
        url="https://www.namadr.com/awards/the-legal-community-reaffirms-that-nam-is-the-1-adr-provider-for-the-tenth-year-in-a-row/"
      >
        Learn More
      </ArrowLink>
    </div>
  </div>
)

export default TopTen
