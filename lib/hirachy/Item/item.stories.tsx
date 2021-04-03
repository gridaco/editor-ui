import React from "react";
import { Story, Meta } from "@storybook/react";

import HirachyItem from ".";

export default {
  title: "Hirachy/Item",
  component: HirachyItem,
} as Meta;

const Template: Story<any> = (args) => <HirachyItem {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
