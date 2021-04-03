import React from "react";
import { Story, Meta } from "@storybook/react";

import HeaderMenu from "./";

export default {
  title: "Header/Dashboard",
  component: HeaderMenu,
} as Meta;

const Template: Story<any> = (args) => <HeaderMenu {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
