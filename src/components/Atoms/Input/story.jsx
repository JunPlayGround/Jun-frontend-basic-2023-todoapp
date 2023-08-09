import React, { useRef, useEffect } from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Atoms/Input",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: "",
  onEditComplete: (e) => {
    console.log("onEditComplete");
  },
};
