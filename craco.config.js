// const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const getLocalIdent = require('lens-ui/dist/getBemCssLocalIdent');


module.exports = {
    reactScriptsVersion: "react-scripts",
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