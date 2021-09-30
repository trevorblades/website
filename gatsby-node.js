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
      allPost: allFile(
        filter: {sourceInstanceName: {eq: "posts"}, extension: {eq: "mdx"}}
      ) {
        nodes {
          childMdx {
            id
            slug
            frontmatter {
              title
              description
            }
          }
        }
      }
    }
  `);

  data.allPost.nodes.forEach(({childMdx}) => {
    actions.createPage({
      path: '/lab/' + childMdx.slug,
      component: require.resolve('./src/templates/post'),
      context: {
        id: childMdx.id
      }
    });
  });
};
