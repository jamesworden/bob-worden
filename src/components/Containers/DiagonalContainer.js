import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: var(--gray);
    clip-path: polygon(
      0% calc(6vw + 7rem),
      100% 7rem,
      100% calc(100% - 6vw),
      0% 100%
    );
    -webkit-clip-path: polygon(
      0% calc(6vw + 3rem),
      100% 3rem,
      100% calc(100% - 6vw - 3rem),
      0% calc(100% - 3rem)
    );
    min-height: 25rem;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 1;
`

export default ({ children }) => (
  <StyledContainer>
    <Content>{children}</Content>
  </StyledContainer>
)
