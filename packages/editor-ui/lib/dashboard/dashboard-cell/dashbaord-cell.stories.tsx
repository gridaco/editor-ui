import React from "react";
import { Story, Meta } from "@storybook/react";

import DashboardCell, { DashboardCellProps } from "./";

export default {
  title: "Dashboard/Cell",
  component: DashboardCell,
} as Meta;

const Template: Story<DashboardCellProps> = (args) => <DashboardCell {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
