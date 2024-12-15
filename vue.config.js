module.exports = {
  lintOnSave: false,
  devServer: { 
    port: 3001,
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
};
