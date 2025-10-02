module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    siteTitle: `Ashley Villeneuve Portfolio`,
    siteTitleAlt: `Ashley Villeneuve - Portfolio`,
    siteHeadline: `Ashley Villeneuve - Portfolio`,
    siteUrl: `https://ashleyvilleneuve.github.io`,
    siteDescription: `Portfolio site showcasing my work`,
    siteImage: `/banner.jpg`,
    author: `@ashleyvilleneuve`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {
        initialColorModeName: `dark`, // Force dark mode
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Portfolio site showcasing my work`,
        start_url: `/`,
        background_color: `#141821`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}
