const a = require.context('../assets', true, /\.(png|jpg|gif)$/);
const r = require.context('./', false, /\.md$/);
export default r.keys().map(key => {
  const project = r(key);
  const matches = key.match(/\/([a-z-]+)\./);
  return {
    ...project,
    id: matches[1],
    attributes: {
      ...project.attributes,
      gif: project.attributes.gif && a(project.attributes.gif),
      images: project.attributes.images.map(image => ({
        ...image,
        src: a(image.src)
      }))
    }
  };
});
