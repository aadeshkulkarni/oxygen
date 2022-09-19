// @ts-ignore 
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from './Badge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Oxygen/Badge',
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      name: 'label',
      type: { name: 'string', required: false },
      description: 'This property sets the display value of the Badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Submit' },
      },
      control: {
        type: 'text'
      }
    },
    state: { control: 'select', options: ['info', 'success','warn','error','disable','default'] },
    fill: {
      options: [true, false],
      control: { type: 'radio' },
    },

  }
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;
export const Badge_success =  Template.bind({});
// export const PrimaryBtn = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Badge_success.args = {
state : "success",
fill:true
};

// export const SecondaryBtn = Template.bind({});
// SecondaryBtn.args = {
//   theme: 'secondary',
//   rounded: true,
//   children: 'Secondary Badge',
//   size: 'large'
// };
