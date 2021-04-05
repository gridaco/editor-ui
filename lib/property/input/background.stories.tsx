import React from "react";
import { Story, Meta } from "@storybook/react";

import ButBackgrounInputton from "./background";

export default {
  title: "Property/Background",
  component: ButBackgrounInputton,
} as Meta;

const Template: Story<any> = (args) => <ButBackgrounInputton {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
