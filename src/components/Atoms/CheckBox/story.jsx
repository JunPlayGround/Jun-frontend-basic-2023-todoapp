import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Atoms,CheckBox",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log("clicked"), //Default要素に与えるpropsを定義
};