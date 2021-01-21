import React from "react"

const LinkedInLogo = () => (
  <a href="https://www.linkedin.com/in/bob-worden-82801517" target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31.5"
      height="31.5"
      viewBox="0 0 31.5 31.5"
    >
      <path
        id="Icon_awesome-linkedin"
        data-name="Icon awesome-linkedin"
        d="M29.25,2.25H2.243A2.26,2.26,0,0,0,0,4.521V31.479A2.26,2.26,0,0,0,2.243,33.75H29.25a2.266,2.266,0,0,0,2.25-2.271V4.521A2.266,2.266,0,0,0,29.25,2.25Zm-19.73,27H4.852V14.217H9.527V29.25ZM7.186,12.164A2.707,2.707,0,1,1,9.893,9.457a2.708,2.708,0,0,1-2.707,2.707ZM27.021,29.25H22.352V21.938c0-1.744-.035-3.987-2.426-3.987-2.433,0-2.805,1.9-2.805,3.86V29.25H12.452V14.217h4.479V16.27h.063a4.917,4.917,0,0,1,4.423-2.426c4.725,0,5.6,3.115,5.6,7.165Z"
        transform="translate(0 -2.25)"
        fill="#fff"
      />
    </svg>
  </a>
)

const NamLogo = () => (
  <a
    style={{
      marginLeft: "1rem",
    }}
    href="https://www.namadr.com/neutrals-bio/bob-worden-esq/"
    target="_blank"
  >
    <img src={"/nam-logo.png"} alt="NAM Logo" height="31.5"></img>
  </a>
)

const Logos = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
    }}
  >
    <LinkedInLogo />
    <NamLogo />
  </div>
)

export default Logos
