import React from "react";
import { Story, Meta } from "@storybook/react";

import HirachyItem, { HirachyItemProps } from ".";

export default {
  title: "Hirachy/Item",
  component: HirachyItem,
  parameters: {
    componentSubtitle: "Components for representing a single structure",
  },
} as Meta;

const Template: Story<HirachyItemProps> = (args) => <HirachyItem {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  struct: {
    id: "RandomId",
    title: "StoryBook",
    type: "text",
  },
  isSelect: true,
};

export const UnSelected = Template.bind({});
UnSelected.args = {
  struct: {
    id: "RandomId",
    title: "StoryBook",
    type: "text",
  },
  isSelect: false,
};