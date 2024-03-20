import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {
            builder: {
                viteConfigPath: path.resolve(__dirname, '../vite.config.ts'),
            },
        },
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
