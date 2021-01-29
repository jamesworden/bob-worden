import React from "react"
import { Section } from "../../Containers"
import videoStyles from "./Video.module.css"

const Video = () => (
  <Section verticalPadding={false}>
    <div className={videoStyles.container}>
      <div className={videoStyles.foreground}>
        <iframe
          className={videoStyles.frame}
          title="video"
          src="https://www.youtube.com/embed/ZpORq-4pB5A?showinfo=0;playlist=ZpORq-4pB5A;modestbranding=1;iv_load_policy=0;"
          allowFullScreen
          frameBorder="0"
        />
      </div>
    </div>
  </Section>
)

export default Video
