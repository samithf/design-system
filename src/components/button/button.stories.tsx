import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
    disabled: false,
    size: "medium",
  },
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};
