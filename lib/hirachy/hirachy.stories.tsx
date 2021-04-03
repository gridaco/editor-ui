import React from "react";
import { Story, Meta } from "@storybook/react";

import Hirachy, { HirachyProps } from "./hirachy";

const BasicStruct = [
  {
    id: "id",
    title: "Item1",
    type: "layout",
    child: [
      {
        id: "id",
        title: "Item",
        type: "layout",
      },
    ],
  },
  {
    id: "id",
    title: "Item2",
    type: "layout",
    child: [
      {
        id: "id",
        title: "Item",
        type: "layout",
      },
    ],
  },
];

export default {
  title: "Hirachy/Hirachy",
  component: Hirachy,
  parameters: {
    componentSubtitle: "A component that wraps HirachyItem to make it into Sturcts."
  }
} as Meta;

const Template: Story<HirachyProps> = (args) => <Hirachy {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  struct: BasicStruct,
};
