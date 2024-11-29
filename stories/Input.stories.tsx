import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import InputBase from "@/shared/components/UI/input/InputBase";
import ThemeProviderWrapper from "@/providers/ThemeProviderWrapper";

const meta: Meta<typeof InputBase> = {
  component: InputBase,
  title: "UI/InputBase",
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["text", "number"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputBase>;

export const Primary: Story = {
  args: {
    label: "Storybook Input",
    name: "Interactive Input",
    max: 28,
    type: "text",
    style: { width: "100%" },
  },
  render: (args) => {
    const [value, setValue] = useState<string | number>("");

    return (
      <ThemeProviderWrapper>
        <InputBase
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </ThemeProviderWrapper>
    );
  },
};
