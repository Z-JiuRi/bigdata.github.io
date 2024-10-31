module.exports = {
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-md-loader')
      .loader('vue-md-loader')
      .options({
        preset: 'default',
        html: true,
        xhtmlOut: true,
        breaks: true,
        linkify: true,
        plugins: [
          require('markdown-it-katex')
        ]
      })
  }
}