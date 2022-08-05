/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const getLocalIdent = require('lens-ui/dist/getBemCssLocalIdent');
const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
  reactScriptsVersion: 'react-scripts',
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {},
    },
  ],
  style: {
    css: {
      loaderOptions: ((cssLoaderOptions) => ({
        ...cssLoaderOptions,
        modules: {
          auto: true,
          exportLocalsConvention: 'camelCase',
          getLocalIdent,
        },
      })),
    },
  },
};
