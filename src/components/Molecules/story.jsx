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
    console.log("Task name changed" + name);
  },
  onTaskComplete: () => {
    console.log("Task Completed");
  },
  taskName: "",
  defaultIsEditing: false,
};
