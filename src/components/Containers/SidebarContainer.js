import styled from "styled-components"

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 888px) {
    flex-direction: row;
  }
`
