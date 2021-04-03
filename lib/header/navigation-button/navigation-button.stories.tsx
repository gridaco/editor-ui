import React from "react";
import { Story, Meta } from "@storybook/react";

import HeaderNavigationButton from "./";

export default {
  title: "Header/Navigation-Button",
  component: HeaderNavigationButton,
} as Meta;

const Template: Story<any> = (args) => <HeaderNavigationButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
