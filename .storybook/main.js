// .storybook/main.js

const path = require('path');
// My webpack.config.js
const custom = require('../webpack.dev.js');

module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
  ],
  webpackFinal: config => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
};