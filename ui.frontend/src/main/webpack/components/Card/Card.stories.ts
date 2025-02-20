import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

import { parameters } from '../../../../../.storybook/stories_config';
const figmaUrl = 'https://www.figma.com/design/wTzU9RR9oKfNvyet4LG9It/Cards-(Community)?node-id=1-773';
const figmaUrlLight = 'https://www.figma.com/design/wTzU9RR9oKfNvyet4LG9It/Cards-(Community)?node-id=1-766&t=VU5P5HyJGAiIr7Fe-4';

import nahidPhoto from "../../../../stories/assets/nahid_photo.jpg";

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    design: parameters({ url: figmaUrl }).design,
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
    variant: 'vertical',
    theme: 'light',
    title: 'Nahid Hasan',
    roles: ['UX/UI Designer'],
    image: nahidPhoto,
    description: ['UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
    ],
  },
};

export const Light: Story = {
  args: {
    ...Primary.args,
    theme: 'dark',
  },
  parameters: {
    ...meta.parameters,
    design: parameters({ url: figmaUrlLight }).design,
  },
};

export const NoImage: Story = {
  args: {
    ...Primary.args,
    title: 'No Image',
    image: undefined,
    roles: ['Ex-rich'],
    description: ['Never worked a day in my life. Can you believe that? Need to get a job, help!'],
  },
};

export const Horizontal: Story = {
  args: {
    ...Primary.args,
    variant: 'horizontal',
  },
};
