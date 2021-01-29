import "./src/styles/global.css"
import "./src/styles/button.css"
import "./src/styles/containers.css"
import "./src/styles/variables.css"

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`)
  }
}
