module.exports = {
  pathPrefix: `/room-designer`,
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
}
