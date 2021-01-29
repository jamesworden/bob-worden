import React from "react"
import { Section } from "../../Containers"
import { Line } from "../../Line"
import styles from "./Services.module.css"
import ArrowLink from "../../ArrowLink"

const Service = ({ title, subtitle, to, url }) => (
  <React.Fragment>
    <h2 style={{ margin: 0 }}>{title}</h2>
    <p style={{ marginTop: ".25rem" }}>{subtitle}</p>
    <ArrowLink url={url} to={to} color="black">
      Learn More
    </ArrowLink>
  </React.Fragment>
)

const ServiceLine = () => (
  <React.Fragment>
    <Line color="var(--gold)" space />
    <div style={{ marginBottom: "2rem" }} />
  </React.Fragment>
)

const Services = ({ paddingBottom, paddingRight }) => (
  <div className={styles.conatainer} style={{ paddingBottom, paddingRight }}>
    <Section maxWidth="350px">
      <Service
        title="Hearing Officer"
        subtitle="National Arbitration and Mediation"
        url="https://www.namadr.com/neutrals-bio/bob-worden-esq/"
      />
      <ServiceLine />
      <Service
        title="Confrence Speaker"
        subtitle="National Arbitration and Mediation"
        url="https://www.namadr.com/news/nys-academy-of-lawyers-webinar-bob-worden-esq-invited-to-present-the-ethics-and-art-of-settlement-at-mediation/"
      />
      <ServiceLine />
      <Service
        title="Firm Member"
        subtitle="Lawrence Worden Ranis & Bard P.C."
        url="http://www.lwrlawyer.com/attorney/robert-p-worden-jr/"
      />
    </Section>
  </div>
)

export default Services