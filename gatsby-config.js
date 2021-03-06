/**
 * External dependencies
 */
const path = require(`path`)

module.exports = {
  siteMetadata: {
    enableIdentity: true,
    siteUrl: `https://destiny.syndia.nl`,
    title: 'Destiny Clan',
    description: `Nederlandse clan voor 'Destiny the Game'.`,
    author: `John Ripke`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-javascript-static-exports`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-110314930-1`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Destiny Clan`,
        short_name: `Destiny Clan`,
        start_url: `/`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-react-next`,
    // Keep this at the end
    `gatsby-plugin-netlify`,
  ],
}
