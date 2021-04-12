import React from "react";
import { Story, Meta } from "@storybook/react";

import DnDListView from "./";

export default {
  title: "Property/Layout/DnDListView",
  component: DnDListView,
} as Meta;

const Template: Story<any> = (args) => <DnDListView {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
