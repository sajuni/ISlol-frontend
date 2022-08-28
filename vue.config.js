module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8180',
        changeOrigin: true,
      },
      '/summoners': {
        target: 'https://www.op.gg',
        changeOrigin: true,
      },
    },
    // disableHostCheck: true,
  },
};
