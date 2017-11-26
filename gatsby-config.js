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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `destiny-gear-sets`,
        path: `${__dirname}/data`,
      },
    },
    /*
    {
      resolve: `gatsby-source-destiny-manifest`,
      options: {
        baseURL: `https://www.bungie.net`,
        apiKey: process.env.BUNGIENET_API_KEY,
      },
    },
    */
    `gatsby-transformer-json`,
    `gatsby-transformer-javascript-static-exports`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
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
    // Keep this at the end
    `gatsby-plugin-netlify`,
  ],
}
