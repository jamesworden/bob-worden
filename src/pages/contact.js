import ContactForm from "../components/ContactForm"
import Container from "../components/Containers/Container"
import PageLayout from "../layouts/PageLayout"
import React from "react"
import { graphql } from "gatsby"
import sanitize from "sanitize-html"
import styled from "styled-components"
import { useContactInfo } from "../hooks/use-contact-info"

const Title = styled.h3`
  margin-bottom: 0;
`

const Header = styled.header`
  margin: 1.5rem 0rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 33% 67%;
  }
`

const Retainer = styled.p`
  font-family: "Lato";
  max-width: 30rem;
  padding-top: 2rem;
`

export default () => (
  <PageLayout
    title="Contact"
    seoDescription="Get in touch with Bob Worden Esq."
  >
    <Container>
      <Header>
        <div>
          <Title>Address</Title>
          {useContactInfo().contact_information.address} <br />
          {useContactInfo().contact_information.cityStateZipCode}
          <Title>Email</Title>
          {useContactInfo().contact_information.email}
          <Title>Phone</Title>
          {useContactInfo().contact_information.phoneNumber}
        </div>
        <div>
          <ContactForm />
          <Retainer
            dangerouslySetInnerHTML={{
              __html: sanitize(useContactInfo().content),
            }}
          />
        </div>
      </Header>
    </Container>
  </PageLayout>
)

export const query = graphql`
  {
    wpgraphql {
      about_sections {
        nodes {
          title
          content
          id
        }
      }
    }
  }
`
