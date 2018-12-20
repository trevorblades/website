const {createFilePath} = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({node, getNode, actions}) => {
  if (node.internal.type === 'MarkdownRemark') {
    actions.createNodeField({
      node,
      name: 'path',
      value: createFilePath({
        node,
        getNode,
        trailingSlash: false
      })
    });
  }
};

exports.createPages = async ({actions, graphql}) => {
  const projectTemplate = path.resolve('src/templates/project.js');
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              path
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    actions.createPage({
      path: node.fields.path,
      component: projectTemplate
    });
  });
};
