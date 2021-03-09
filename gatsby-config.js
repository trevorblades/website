const dotenv = require('dotenv');
const {webFontsConfig} = require('@trevorblades/mui-theme');

dotenv.config();

module.exports = {
  siteMetadata: {
    title: 'Trevor Blades'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-theme-material-ui',
      options: {webFontsConfig}
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-34658521-1'
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
      }
    }
  ]
};
