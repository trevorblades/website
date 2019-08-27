require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Trevor Blades'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-theme-material-ui',
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: 'Fira Mono',
                variants: ['400', '500', '700']
              }
            ]
          }
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/projects`,
        name: 'projects'
      }
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
