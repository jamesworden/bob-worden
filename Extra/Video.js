import React from "react"
import videoStyles from "./video.module.css"

const Video = () => (
  <div className={videoStyles.container}>
    <div className={videoStyles.foreground}>
      <iframe
        className={videoStyles.frame}
        title="video"
        src="https://www.youtube.com/embed/ZpORq-4pB5A?controls=0;rel=0;showinfo=0;autoplay=1;&mute=1;start=5;end=130;playlist=ZpORq-4pB5A;loop=1;modestbranding=1;iv_load_policy=0;"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  </div>
)

export default Video
