import { useStaticQuery, graphql } from "gatsby"

export const useCallToAction = () => {
  const data = useStaticQuery(
    graphql`
      {
        wpgraphql {
          landing: homepage_section(id: "cG9zdDo1MA==") {
            additional_information {
              additionalInformation
            }
          }
        }
      }
    `
  )
  return data.wpgraphql.landing.additional_information.additionalInformation
}
