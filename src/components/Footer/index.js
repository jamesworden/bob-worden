import React from "react"
import styles from "./Footer.module.css"
import Logos from "./Logos"
import { Container } from "../Containers"
import { Line } from "../Line"
import sanatizeHtml from "sanitize-html"
import { useContactInfo } from "../../hooks/use-contact-info"

const Top = ({ address1, address2, email, content, phone }) => (
  <div className="centered">
    <div>
      <h1 className={styles.title}>Bob Worden Esq.</h1>
      <div className={styles.content}>
        <ul
          style={{
            listStyleType: "none",
            lineHeight: "2rem",
            padding: 0,
            margin: 0,
            flex: 1,
            marginTop: "-.15rem",
          }}
        >
          <li>{address1}</li>
          <li>{address2}</li>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
        <div className={styles.text}>
          <p
            style={{ maxWidth: "20rem" }}
            className={styles.topParagraph}
            dangerouslySetInnerHTML={{ __html: sanatizeHtml(content) }}
          />
        </div>
      </div>
    </div>
  </div>
)

const Bottom = () => {
  let date = new Date().getFullYear()
  return (
    <div className={styles.bottom}>
      <Line color="#808080" space />
      <Logos />
      <span>{date} Copyright Bob Worden ©. All Rights Reserved.</span>
    </div>
  )
}

export default () => {
  const node = useContactInfo()

  return (
    <footer>
      <Container maxWidth="1008px">
        <Top
          address1={node.contact_information.address}
          address2={node.contact_information.cityStateZipCode}
          email={node.contact_information.email}
          phone={node.contact_information.phoneNumber}
          content={node.content}
        />
        <Bottom />
      </Container>
    </footer>
  )
}
