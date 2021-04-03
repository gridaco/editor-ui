import React from "react";
import { Story, Meta } from "@storybook/react";

import Dashboard, { DashBoardProps } from "./dashboard";

export default {
  title: "Dashboard/Dashboard",
  component: Dashboard,
} as Meta;

const Template: Story<DashBoardProps> = (args) => <Dashboard {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
