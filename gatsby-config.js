module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Bob Worden Esq.",
    description: "Mediator & Arbitrator",
    image: "../src/images/landing-desktop.jpg",
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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Lato",
              variants: ["300", "300i", "400", "700"],
            },
            {
              family: "Lora",
              variants: ["300", "300i", "400", "700"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-191693427-2",
      },
    },
    {
      resolve: `gatsby-plugin-page-progress`,
      options: {
        includePaths: [{ regex: "^/blog/" }, { regex: "^/articles/" }],
        height: 3,
        prependToBody: false,
        color: "var(--gold)",
        footerHeight: 300,
      },
    },
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`,
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-humans-txt`,
      options: {
        header: "JAMES WORDEN",
        team: [
          {
            Developer: `James Worden`,
            GitHub: `jamesworden`,
            LinkedIn: `jameswordenny`,
          },
        ],
        site: {
          "Last update": `Saturday, February 6, 2021`,
        },
        note: `Developed in New York.`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
  ],
}
