import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        children: 'Button',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        variant: 'default',
        children: 'Button',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Button',
    },
};
export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Button',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Button',
    },
};

export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Button',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Button',
    },
};
export const Regular: Story = {
    args: {
        size: 'regular',
        children: 'Button',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        children: 'Button',
    },
};

export const Icon: Story = {
    args: {
        size: 'icon',
        children: 'Button',
    },
};
