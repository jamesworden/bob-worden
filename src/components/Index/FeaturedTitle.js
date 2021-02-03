import React from "react"
import { Section } from "../Containers"
import ArrowLink from "../ArrowLink"
import { Line } from "../Line"

export default ({ children, to }) => (
  <Section bottomPadding topPadding>
    <div className="centered">
      <div>
        <h1 style={{ marginTop: 0, marginBottom: 0, textAlign: "center" }}>
          Featured {children}
        </h1>
        <div className="centered">
          <Line color="var(--gold)" space half />
        </div>
      </div>
    </div>
    <div className="centered" style={{ marginTop: "1.5rem" }}>
      <ArrowLink to={to}>All {children}</ArrowLink>
    </div>
  </Section>
)
