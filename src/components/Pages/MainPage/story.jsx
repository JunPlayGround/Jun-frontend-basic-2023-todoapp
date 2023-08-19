import React, { useRef, useEffect } from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Pages/MainPage",
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});