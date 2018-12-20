require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Trevor Blades'
  },
  plugins: [
    'gatsby-plugin-jss',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-34658521-1'
      }
    },
    {
      resolve: 'gatsby-plugin-emoji-favicon',
      options: {
        emoji: '🔪'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/projects`,
        name: 'projects'
      }
    },
    'gatsby-transformer-remark',
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
