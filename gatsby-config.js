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
    "@lekoarts/gatsby-theme-cara",
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
