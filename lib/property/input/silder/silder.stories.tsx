import React from "react";
import { Story, Meta } from "@storybook/react";

import Silder from "./";

export default {
  title: "Property/Silder",
  component: Silder,
} as Meta;

const Template: Story<any> = (args) => <Silder {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
