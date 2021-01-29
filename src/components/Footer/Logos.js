import React, { useState, useLayoutEffect } from "react"
import { Container } from "../Containers"

const SmallLinkedIn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <path
      id="Icon_awesome-linkedin"
      data-name="Icon awesome-linkedin"
      d="M18.571,2.25H1.424A1.435,1.435,0,0,0,0,3.692V20.808A1.435,1.435,0,0,0,1.424,22.25H18.571A1.439,1.439,0,0,0,20,20.808V3.692A1.439,1.439,0,0,0,18.571,2.25ZM6.045,19.393H3.08V9.848H6.049v9.545ZM4.563,8.545A1.719,1.719,0,1,1,6.281,6.826,1.719,1.719,0,0,1,4.563,8.545ZM17.156,19.393H14.192V14.75c0-1.107-.022-2.531-1.54-2.531-1.545,0-1.781,1.205-1.781,2.451v4.723H7.906V9.848H10.75v1.3h.04A3.122,3.122,0,0,1,13.6,9.612c3,0,3.558,1.978,3.558,4.549Z"
      transform="translate(0 -2.25)"
      fill="gray"
    />
  </svg>
)

const MediumLinkedIn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
  >
    <path
      id="Icon_awesome-linkedin"
      data-name="Icon awesome-linkedin"
      d="M23.214,2.25H1.78A1.793,1.793,0,0,0,0,4.052v21.4a1.793,1.793,0,0,0,1.78,1.8H23.214A1.8,1.8,0,0,0,25,25.448V4.052A1.8,1.8,0,0,0,23.214,2.25ZM7.556,23.679H3.85V11.748H7.561V23.679ZM5.7,10.118A2.148,2.148,0,1,1,7.852,7.97,2.149,2.149,0,0,1,5.7,10.118Zm15.742,13.56H17.74v-5.8c0-1.384-.028-3.164-1.925-3.164-1.931,0-2.227,1.507-2.227,3.064v5.9H9.883V11.748h3.555v1.629h.05A3.9,3.9,0,0,1,17,11.452c3.75,0,4.448,2.472,4.448,5.686Z"
      transform="translate(0 -2.25)"
      fill="gray"
    />
  </svg>
)

const LargeLinkedIn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
  >
    <path
      id="Icon_awesome-linkedin"
      data-name="Icon awesome-linkedin"
      d="M27.857,2.25H2.136A2.152,2.152,0,0,0,0,4.413V30.087A2.152,2.152,0,0,0,2.136,32.25H27.857A2.158,2.158,0,0,0,30,30.087V4.413A2.158,2.158,0,0,0,27.857,2.25ZM9.067,27.964H4.621V13.647H9.074V27.964ZM6.844,11.692A2.578,2.578,0,1,1,9.422,9.114,2.579,2.579,0,0,1,6.844,11.692ZM25.734,27.964H21.288V21c0-1.661-.033-3.8-2.31-3.8-2.317,0-2.672,1.808-2.672,3.676v7.085H11.859V13.647h4.266V15.6h.06a4.683,4.683,0,0,1,4.212-2.31c4.5,0,5.337,2.967,5.337,6.824Z"
      transform="translate(0 -2.25)"
      fill="gray"
    />
  </svg>
)

const LinkedInLogo = () => {
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth([window.innerWidth])
    }
    window.addEventListener("resize", updateWidth)
    updateWidth()
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <div style={{ padding: ".5rem" }}>
      <a href="https://www.linkedin.com/in/bob-worden-82801517">
        {width < 668 ? (
          <SmallLinkedIn />
        ) : width < 1008 ? (
          <MediumLinkedIn />
        ) : (
          <LargeLinkedIn />
        )}
      </a>
    </div>
  )
}

const Logos = () => (
  <Container>
    <LinkedInLogo />
  </Container>
)

export default Logos
