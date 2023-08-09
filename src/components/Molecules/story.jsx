import React, { useRef, useEffect } from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Molecules/Tasks",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  onTaskChange: (name) => {
    console.log(name);
  },
  onTaskComplete: () => {
    console.log("onTaskComplete");
  },
  taskName: "",
  defaultIsEditing: false,
};
