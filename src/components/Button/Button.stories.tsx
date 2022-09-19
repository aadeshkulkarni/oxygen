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
    type: { control: 'select', options: ['button', 'submit'] },
    rounded: {
      options: [true, false],
      control: { type: 'radio' },
    },

  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryButton.args = {
  theme: 'primary',
  size:'large',
  rounded:true,
  children: 'Unbutton me',
};

export const PrimaryFlat = Template.bind({});
PrimaryFlat.args = {
  theme: 'primary',
  children: 'Unbutton me',
};

export const ButtonLoading = Template.bind({});
ButtonLoading.args = {
  theme: 'primary',
  children: 'Progress',
  showProgress: true
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  theme: 'primary',
  children: 'Unbutton me',
  disabled: true
};

export const SecondaryFlatBtn = Template.bind({});
SecondaryFlatBtn.args = {
  theme: 'secondary',
  children: 'Secondary Button',
};

export const SecondaryBtnStroke = Template.bind({});
SecondaryBtnStroke.args = {
  theme: 'secondary',
  children: 'Secondary Button with Stroke',
  stroke: true
};



