// @ts-ignore 
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Oxygen/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      name: 'label',
      type: { name: 'string', required: false },
      defaultValue: 'Submit',
      description: 'This property sets the display value of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Submit' },
      },
      control: {
        type: 'text'
      }
    },
    theme: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['small', 'medium','large'] },
    rounded: {
      options: [true, false],
      control: { type: 'radio' },
    },

  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryBtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryBtn.args = {
  theme: 'primary',
  rounded: true,
  children: 'Primary Button',
  size: 'large'
};

export const SecondaryBtn = Template.bind({});
SecondaryBtn.args = {
  theme: 'secondary',
  rounded: true,
  children: 'Secondary Button',
  size: 'large'
};
