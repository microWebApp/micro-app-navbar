module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 8280
  },
  configureWebpack: {
    externals: ['vue', 'vue-router', /^@patpat-f2e\/.+/]
  }
}
