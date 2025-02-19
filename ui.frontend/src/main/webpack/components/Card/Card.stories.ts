import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Nahid Hasan',
    roles: ['UX/UI Designer'],
    image: 'https://picsum.photos/id/237/200/200',
    description: ['UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'],
  },
};

export const Dark: Story = {
  args: {
    ...Primary.args,
    theme: 'dark',
  },
};
