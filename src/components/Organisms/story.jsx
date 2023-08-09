import React, { useRef, useEffect } from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Organisms/TodoCard",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
