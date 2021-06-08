import React from "react";
import { Story, Meta } from "@storybook/react";

import HeaderSearchButton, { HeaderSearchButtonProps } from "./";

export default {
  title: "Header/Navigation-Button",
  component: HeaderSearchButton,
} as Meta;

const Template: Story<HeaderSearchButtonProps> = (args) => <HeaderSearchButton {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
