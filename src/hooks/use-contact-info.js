import { useStaticQuery, graphql } from "gatsby"

export const useContactInfo = () => {
  const data = useStaticQuery(
    graphql`
      {
        wpgraphql {
          contact_section(id: "cG9zdDo3Nw==") {
            content
            contact_information {
              address
              cityStateZipCode
              email
              phoneNumber
            }
          }
        }
      }
    `
  )
  return data.wpgraphql.contact_section
}
