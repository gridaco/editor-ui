import React from "react";
import { Story, Meta } from "@storybook/react";

import Selector from "./";

export default {
  title: "Property/Selector",
  component: Selector,
} as Meta;

const Template: Story<any> = (args) => <Selector {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
