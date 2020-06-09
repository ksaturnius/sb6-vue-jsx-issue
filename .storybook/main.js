module.exports = {
  stories: ["../stories/**/*.stories.@(js|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    // {
    //   name: "@storybook/addon-docs",
    //   options: {
    //     configureJSX: true,
    //     babelOptions: {},
    //     sourceLoaderOptions: null,
    //   },
    // },
  ],
};
