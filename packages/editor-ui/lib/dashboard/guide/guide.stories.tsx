import React from "react";
import { Story, Meta } from "@storybook/react";

import DashboardGuide, { DashboardGuideProps } from "./";

export default {
  title: "Dashboard/Guide",
  component: DashboardGuide,
} as Meta;

const Template: Story<DashboardGuideProps> = (args) => <DashboardGuide {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
