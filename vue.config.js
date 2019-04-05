module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  chainWebpack: config => {
    config.plugin('preload').tap(options => {
      options[0].as = entry => {
        if (/\.css$/.test(entry)) {
          return 'style'
        }
        if (/\.woff$/.test(entry)) {
          return 'font'
        }
        if (/\.png$/.test(entry)) {
          return 'image'
        }
        return 'script'
      }
      options[0].include = 'allAssets'
      // options[0].fileWhitelist: [/\.files/, /\.to/, /\.include/]
      options[0].fileBlacklist = [/\.js/]
      return options
    })
  }
}
