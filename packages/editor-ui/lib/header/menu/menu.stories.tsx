import React from "react";
import { Story, Meta } from "@storybook/react";

import HeaderMenu, { HeaderMenuProps } from "./";

export default {
  title: "Header/Dashboard",
  component: HeaderMenu,
} as Meta;

const Template: Story<HeaderMenuProps> = (args) => <HeaderMenu {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
