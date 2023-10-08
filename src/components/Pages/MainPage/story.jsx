import React, { useRef, useEffect } from "react";
import Component from "./index";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import AlertManager from "../../Organisms/AlertManager";

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
Default.decorators = [
  (Story) => (
    <div>
      <AlertHandlerProvider>
        <AlertManager />
        <Story />
      </AlertHandlerProvider>
    </div>
  ),
];
