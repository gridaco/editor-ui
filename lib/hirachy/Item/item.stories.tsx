import React from "react";
import { Story, Meta } from "@storybook/react";

import HirachyItem, { HirachyItemProps } from ".";

export default {
  title: "Hirachy/Item",
  component: HirachyItem,
} as Meta;

const Template: Story<HirachyItemProps> = (args) => <HirachyItem {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  struct: {
    id: "RandomId",
    title: "StoryBook",
    type: "text",
  },
};
