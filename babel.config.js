// module.exports = {
//   presets: ["@vue/babel-preset-jsx"],
// };

module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      // MDX docs functionality in Storybook doesn't work
      // without this `jsx: false`
      {
        jsx: false,
      },
    ],
  ],
};