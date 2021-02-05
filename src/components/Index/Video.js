import React from "react"
import Section from "../Containers/Section"
import styled from "styled-components"

const Background = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  max-height: 406px;
`

const Foreground = styled.div`
  width: 90vw;
  height: calc(90vw * (9 / 16));
  position: relative;
  display: flex;
  justify-content: center;
  max-height: 406px;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  max-width: 720px;
  max-height: 406px;
  clip-path: inset(1px 1px);
`

const Video = () => (
  <Section noTopPadding noBottomPadding>
    <Background>
      <Foreground>
        <Iframe
          title="video"
          src="https://www.youtube.com/embed/ZpORq-4pB5A?showinfo=0;playlist=ZpORq-4pB5A;modestbranding=1;iv_load_policy=0;"
          allowFullScreen
          frameBorder="0"
        />
      </Foreground>
    </Background>
  </Section>
)

export default Video
