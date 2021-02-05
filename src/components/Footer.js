import Container from "./Containers/Container"
import Line from "./Line"
import React from "react"
import sanitize from "sanitize-html"
import styled from "styled-components"
import { useContactInfo } from "../hooks/use-contact-info"

const StyledFooter = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  color: var(--white);
  background-color: var(--darkgray);
  width: 100%;
  padding-top: 1rem;
`

const BottomContainer = styled.div`
  color: var(--white);
  text-align: center;
  max-width: 1008px;
`

const Content = styled.div`
  max-width: 1008px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 0rem;

  @media (min-width: 550px) {
    flex-direction: row;
  }
  @media (min-width: 668px) {
    padding: 2rem 0rem;
  }
  @media (min-width: 1008px) {
    padding: 2.5rem 0rem;
  }
`

const Text = styled.div`
  color: var(--white);
  flex: 1;
  width: 60%;
  margin-top: 2rem;
  max-width: 20rem;

  @media (min-width: 550px) {
    margin: -1rem;
  }
`

const List = styled.ul`
  list-style-type: none;
  line-height: 2rem;
  padding: 0;
  margin: 0;
  flex: 1;
  margin-top: -0.15rem;
`

const Title = styled.h1`
  text-transform: uppercase;
  margin-bottom: 0;
`

export default () => (
  <StyledFooter>
    <Container maxWidth="50rem">
      <Title>Bob Worden Esq.</Title>
      <Content>
        <List>
          <li>{useContactInfo().contact_information.address}</li>
          <li>{useContactInfo().contact_information.cityStateZipCode}</li>
          <li>{useContactInfo().contact_information.email}</li>
          <li>{useContactInfo().contact_information.phoneNumber}</li>
        </List>
        <Text
          dangerouslySetInnerHTML={{
            __html: sanitize(useContactInfo().content),
          }}
        />
      </Content>
      <BottomContainer>
        <Line color="var(--white)" />
        <p style={{ padding: "1rem 0rem" }}>
          Copyright &copy; {new Date().getFullYear()} Bob Worden Esq. All Rights
          Reserved.
        </p>
      </BottomContainer>
    </Container>
  </StyledFooter>
)
