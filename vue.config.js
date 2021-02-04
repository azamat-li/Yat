module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  //publicPath: '/Yat/'
	publicPath: process.env.NODE_ENV === 'production'
	? '/Yat/'
	: '/'
}
