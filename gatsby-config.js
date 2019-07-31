module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `t56g6tagj34t`,
        accessToken: `HXg2kVNAan9V3JBJz-K7juG0Bb6T0Rcytrotl_QbTQ8`,
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    }
  ]
}
