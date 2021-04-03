import React from "react";
import { Story, Meta } from "@storybook/react";

import Button from "./";

export default {
  title: "Other/Button",
  component: Button,
} as Meta;

const Template: Story<any> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
