const {createFilePath} = require('gatsby-source-filesystem');

exports.onCreateNode = ({node, getNode, actions}) => {
  if (node.internal.type === 'Mdx') {
    actions.createNodeField({
      node,
      name: 'path',
      value: createFilePath({
        node,
        getNode
      })
    });
  }
};

exports.createPages = async ({actions, graphql}) => {
  const template = require.resolve('./src/components/template.js');
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            fields {
              path
            }
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach(({node}) => {
    actions.createPage({
      path: node.fields.path,
      component: template,
      context: {
        id: node.id
      }
    });
  });
};
