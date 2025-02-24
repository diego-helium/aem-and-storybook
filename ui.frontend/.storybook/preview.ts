import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  tags: ['autodocs'],
};

export default preview;
