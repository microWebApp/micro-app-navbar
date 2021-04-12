module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 8280
  },
  configureWebpack: {
    externals: ['vue', 'vue-router', /^@patpat-f2e\/.+/]
  },
  css: {
    loaderOptions: {
      less: {
        // 注意用lessOptions包裹，不然识别不了，被坑了一手
        lessOptions: {
          modifyVars: {
            /* less 变量覆盖，用于自定义 ant design 主题 */
            // 'primary-color': '#007FFF',
            // 'link-color': '#007FFF',
            // "primary-color": "#673AB7",
            // "link-color": "#673AB7",
            'border-radius-base': '4px'
          }
        },
        javascriptEnabled: true
      }
    }
  }
}
