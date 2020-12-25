import React from "react"
import Layout from "./Layout"
import Container from "../components/Container"
import { graphql } from "gatsby"

const ArticleLayout = ({ children }) => {
  return (
    <Layout>
      <Container>{children}</Container>
    </Layout>
  )
}

export default ArticleLayout

// import { graphql } from "gatsby"
// import innerText from "innertext"

// const ArticleLayout = ({ data }) => {
//   const post = data.wordpressPost
//   return (
//     <Layout darkNav>
//       <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
//       <div dangerouslySetInnerHTML={{ __html: post.content }} />
//     </Layout>
//   )
// }

// export default ArticleLayout

// export const query = graphql`
//   query($slug: String!) {
//     wordpressPost(slug: { eq: $slug }) {
//       content
//       title
//       featured_media {
//         source_url
//       }
//       excerpt
//     }
//   }
// `

{
  /* <SEO
        title={innerText(post.title)}
        description={innerText(post.excerpt)}
        image={post.featured_media.source_url}
        // No keywords because Graph QL Query is not working properly
      /> */
}
