module.exports = {
    "stories": [
        "../lib/**/*.stories.mdx",
        "../lib/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        '@storybook/preset-create-react-app',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
    ],
}