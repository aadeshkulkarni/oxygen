import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import yourTheme from './YourTheme';
addons.setConfig({
  theme: yourTheme,
});