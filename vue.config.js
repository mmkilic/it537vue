const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/word-game/',
  lintOnSave: false,
  devServer: { 
    port: 3001,
  }
});
