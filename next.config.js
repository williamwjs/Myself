const BASE_PATH = '';

module.exports = {
  basePath: BASE_PATH,
  pageExtensions: ['tsx', 'page.ts'], // if we have gql types generated in the pages folder, we need to ignore .ts files
  trailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
    };

    // projects.forEach((project) => {
    //   paths[`/project/${project.slug}`] = {
    //     page: '/project/[path]',
    //     query: { path: project.slug },
    //   };
    // });

    return paths;
  },
};
