module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Bob Worden",
    description: "Mediator & Arbitrator",
    keywords: "Law, Lawyer, Mediator, Arbitrator",
    url: "https://www.bobworden.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `https://wordpress.bobworden.com/graphql`,
        refetchInterval: 60,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `nlm1bjb`,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}