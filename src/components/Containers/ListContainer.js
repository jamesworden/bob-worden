import Line from "../Line"
import React from "react"
import sanitize from "sanitize-html"
import styled from "styled-components"

const Content = styled.div`
  @media (max-width: 600px) {
    div > h2 {
      margin-top: 0;
    }
  }
  @media (min-width: 600px) {
    display: flex;

    div {
      flex: 1;
      margin: -1rem 1rem;
    }
    div {
      margin-top: -1rem 1rem;
    }
  }
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  text-indent: -5px;
  padding-left: 0rem;
  margin-top: 2rem;

  @media (min-width: 600px) {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
  }
`

const ListItem = styled.li`
  padding: 1rem;
  padding-left: 2rem;
  background-color: var(--gray);
  margin: 0;
  margin-bottom: 0.25rem;
  font-weight: 500;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  list-style-position: outside;

  &:before {
    content: "\\2756\\00a0\\00a0";
    color: var(--gold);
    margin: 0 0.5rem;
    float: left;
    margin-left: -15px;
  }
`

// This is used for section C. Displays a list with text.
export default ({ title, color, lineColor, content, array }) => (
  <React.Fragment>
    <Content>
      <div>
        <h2 style={{ color }}>{title}</h2>
        <Line partial color={lineColor} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: sanitize(content) }} />
    </Content>
    <div style={{ color }}>
      <List>
        {array.map(string => (
          <ListItem
            key={string}
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
            data-sal-delay="200"
          >
            {string}
          </ListItem>
        ))}
      </List>
    </div>
  </React.Fragment>
)
