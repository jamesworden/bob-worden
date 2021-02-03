import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container } from "../components/Containers"
import { useContactInfo } from "../hooks/use-contact-info"
import PageLayout from "../layouts/PageLayout"
import sanatizeHtml from "sanitize-html"
import TextareaAutosize from "react-textarea-autosize"
import Button from "../components/Button"

const Title = styled.h3`
  margin-bottom: 0;
`

const P = styled.p`
  margin: 0;
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

const Info = styled.div``

const Retainer = styled.p`
  font-family: "Lato";
  max-width: 30rem;
  padding: 2rem 0rem;

  @media (min-width: 800px) {
    grid-template-columns: 33%;
  }
`

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid var(--gold);
  background-color: var(--white);
  width: 100%;
  font-family: "Lato";
  font-size: 14px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, var(--white) 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }

  :invalid {
    border-color: #cc5350;
  }
`

const Textarea = styled(TextareaAutosize)`
  border: none;
  outline: none;
  border-bottom: 2px solid var(--gold);
  background-color: var(--white);
  width: 100%;
  font-family: "Lato";
  font-size: 14px;
  resize: none;
  overflow: hidden;
`

const Label = styled.p`
  margin-top: 0.25rem;
  font-family: "Lora";
  font-size: 18px;
`

const StyledForm = styled.form`
  padding-top: 2rem;
  @media (min-width: 800px) {
    padding-top: 0rem;
  }
`

const Form = () => (
  <StyledForm
    method="post"
    action="https://www.flexyform.com/f/8a919fb1644387c261422e429fba3face1339927"
  >
    <p>
      <Input type="text" name="Name" spellCheck="false" maxLength="64" />
      <Label>Name</Label>
    </p>
    <p>
      <Input type="email" name="_reply_to" spellCheck="false" maxLength="64" />
      <Label>Email</Label>
    </p>
    <p style={{ paddingBottom: "1rem" }}>
      <Textarea
        type="textarea"
        name="Message"
        rows="6"
        maxLength="500"
        spellCheck="false"
      />
      <Label>Message</Label>
    </p>
    <Button type="submit">Send</Button>
  </StyledForm>
)

export default () => (
  <PageLayout
    title="Contact"
    seoDescription="Get in touch with Bob Worden Esq."
  >
    <Container>
      <Header>
        <Info>
          <Title>Address</Title>
          <P>
            {useContactInfo().contact_information.address} <br />
            {useContactInfo().contact_information.cityStateZipCode}
          </P>
          <Title>Email</Title>
          <P>{useContactInfo().contact_information.email}</P>
          <Title>Phone</Title>
          <P>{useContactInfo().contact_information.phoneNumber}</P>
        </Info>
        <Form />
      </Header>
      <Retainer
        dangerouslySetInnerHTML={{
          __html: sanatizeHtml(useContactInfo().content),
        }}
      />
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
