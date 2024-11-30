import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    // Возможно, вам будет нужно добавить:
    "@storybook/addon-links", // Для добавления ссылок между сторисами
    "@storybook/addon-a11y", // Для доступности

  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;
