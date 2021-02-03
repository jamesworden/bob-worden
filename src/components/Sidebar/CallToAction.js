import React from "react"
import Button from "../Button"
import { Section } from "../Containers"
import { useCallToAction } from "../../hooks/use-call-to-action"

export default () => {
  return (
    <Section textAlign="center" maxWidth="35rem">
      <div style={{ margin: "2rem 0 4rem 0" }}>
        <h3 style={{ fontSize: "24px" }}>{useCallToAction()}</h3>
        <Button to="contact">
          <span style={{ fontSize: "13px" }}>Contact Bob</span>
        </Button>
      </div>
    </Section>
  )
}
