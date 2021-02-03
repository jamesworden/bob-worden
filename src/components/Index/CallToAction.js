import React from "react"
import Button from "../Button"
import { Section } from "../Containers"
import { useCallToAction } from "../../hooks/use-call-to-action"

export default () => {
  return (
    <Section textAlign="center" maxWidth="35rem" bottomPadding topPadding>
      <div style={{ marginTop: "-1rem", paddingBottom: "1rem" }}>
        <h2>{useCallToAction()}</h2>
        <Button to="contact">Contact Bob</Button>
      </div>
    </Section>
  )
}
