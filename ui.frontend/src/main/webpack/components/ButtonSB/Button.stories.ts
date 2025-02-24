import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { Button } from './Button';
import { initButton } from './script';

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  initButton();
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button', { name: /learn more/i });
  await userEvent.click(button);
  expect(button).toHaveClass('button-copied-text');
  expect(button).toHaveTextContent('Copied!');
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: { label: 'Learn More' },
  play: async () => {
    initButton();
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    layout: 'content-width',
  },
};

export const PrimaryFocusState: Story = {
  args: {
    ...Primary.args,
  },
  parameters: {
    ...meta.parameters,
    pseudo: { focus: true }
  },
};

export const PrimaryHoverState: Story = {
  args: {
    ...Primary.args,
  },
  parameters: {
    ...meta.parameters,
    pseudo: { hover: true }
  },
};

export const PrimaryWithInteraction: Story = {
  args: {
    ...Primary.args,
    layout: 'full-width',
  },
  play: play,
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Learn More',
  },
};

export const SecondaryHoverState: Story = {
  args: {
    ...Secondary.args,
  },
  parameters: {
    ...meta.parameters,
    pseudo: { hover: true }
  },
};

export const SecondaryFullWidth: Story = {
  args: {
    ...Secondary.args,
    layout: 'full-width',
  },
  play: play,
};


