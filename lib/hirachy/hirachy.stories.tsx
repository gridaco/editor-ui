import React from "react";
import { Story, Meta } from "@storybook/react";

import Hirachy from "./hirachy";

export default {
  title: "Hirachy/Hirachy",
  component: Hirachy,
} as Meta;

const Template: Story<any> = (args) => <Hirachy {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
