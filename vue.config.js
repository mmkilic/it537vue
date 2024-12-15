const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/',
  lintOnSave: false,
  devServer: { 
    port: 3001,
  }
});
