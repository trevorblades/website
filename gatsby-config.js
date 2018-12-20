// new EmojiFaviconPlugin('🔪')
module.exports = {
  siteMetadata: {
    title: 'Trevor Blades'
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-34658521-1'
      }
    }
  ]
};
