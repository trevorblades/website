exports.createSchemaCustomization = ({actions}) => {
  const {createTypes} = actions;
  const typeDefs = `
    type MdxFrontmatter {
      styles: JSON
    }
  `;
  createTypes(typeDefs);
};

exports.createPages = async ({actions, graphql}) => {
  const {data} = await graphql(`
    {
      allMdx {
        nodes {
          id
          slug
          frontmatter {
            title
            description
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      path: '/lab/' + node.slug,
      component: require.resolve('./src/templates/post'),
      context: {
        id: node.id
      }
    });
  });
};
