module.exports = {
  stories: ['../components/**/*.stories.tsx'],
  addons: ['@storybook/preset-typescript', '@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    });

    // Return the altered config
    return config;
  },
};
