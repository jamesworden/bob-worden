import React from "react"
import Button from "../Button"
import { Section } from "../Containers"

export default () => (
  <Section textAlign="center" maxWidth="35rem" bottomPadding topPadding>
    <div style={{ marginTop: "-1rem", paddingBottom: "1rem" }}>
      <h2>Contact Bob and get the assistance you need.</h2>
      <Button to="contact">Contact Bob</Button>
    </div>
  </Section>
)
