module.exports = {
  stories: ["../src/**/story.jsx"],
  addons: ["@storybook/addon-essentials"],
  core: {
    builder: "webpack5"
  }
};