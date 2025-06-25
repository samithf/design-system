import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./button";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    intent: "primary",
    disabled: false,
    size: "medium",
    type: "button",
  },
  argTypes: {
    children: {
      name: "Label",
      control: "text",
      description: "Text to display on the button",
      table: {
        category: "Appearance",
      },
    },
    intent: {
      name: "Intent",
      description: "Intent of the button",
      control: "radio",
      table: {
        category: "Appearance",
      },
    },
    size: {
      name: "Size",
      description: "Size of the button",
      control: "radio",
      table: {
        category: "Appearance",
      },
    },
    type: {
      name: "Type",
      description: "Type of button",
      control: "radio",
      table: {
        category: "Appearance",
      },
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Disables the button",
      table: {
        defaultValue: {
          summary: "false",
          detail: "Defers to the built-in HTML attribute.",
        },
        category: "Accessibility",
      },
      //   table: {
      //     disable: true,
      //   },
    },
  },
};

export default meta;

export const Primary: Story = {
  args: {
    intent: "primary",
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    intent: "destructive",
  },
};

export const Iconbutton: Story = {
  args: {
    type: "icon",
  },
};
