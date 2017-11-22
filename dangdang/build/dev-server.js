require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

var eleData = require('../data/new.json')
var zuyueData = require('../data/zuyue.json')
var tingshuData = require('../data/tingshu.json')
var nanpinData = require('../data/nanpin.json')
var nupinData = require('../data/nupin.json')
var dongmanData = require('../data/manhua.json')

var header = eleData.header

var slideImage = eleData.slideImage

var detail = eleData.detail

var content = eleData.content

var zuyueSlideImage = zuyueData.slideImage
var zuyueContent = zuyueData.content

var tingshuSlideImage = tingshuData.slideImage
var tingshuContent = tingshuData.content

var nanpinSlideImage = nanpinData.slideImage
var nanpinContent = nanpinData.content

var nupinSlideImage = nupinData.slideImage
var nupinContent = nupinData.content

var dongmanSlideImage = dongmanData.slideImage
var dongmanContent = dongmanData.content
var apiRouter = express.Router()

app.use('/api', apiRouter)

apiRouter.get('/header', function (req, res) {
  res.json({
    error: 0,
    data: header
  })
})
apiRouter.get('/slideImage', function (req, res) {
  res.json({
    error: 0,
    data: slideImage
  })
})
apiRouter.get('/detail', function (req, res) {
  res.json({
    error: 0,
    data: detail
  })
})

apiRouter.get('/content', function (req, res) {
  res.json({
    error: 0,
    data: content
  })
})

apiRouter.get('/zuyueSlideImage', function (req, res) {
  res.json({
    error: 0,
    data: zuyueSlideImage
  })
})

apiRouter.get('/zuyueContent', function (req, res) {
  res.json({
    error: 0,
    data: zuyueContent
  })
})

apiRouter.get('/tingshuSlideImage', function (req, res) {
  res.json({
    error: 0,
    data: tingshuSlideImage
  })
})

apiRouter.get('/tingshuContent', function (req, res) {
  res.json({
    error: 0,
    data: tingshuContent
  })
})

apiRouter.get('/nanpinSlideImage', function (req, res) {
  res.json({
    error: 0,
    data: nanpinSlideImage
  })
})

apiRouter.get('/nanpinContent', function (req, res) {
  res.json({
    error: 0,
    data: nanpinContent
  })
})

apiRouter.get('/nupinSlideImage', function (req, res) {
  res.json({
    error: 0,
    data: nupinSlideImage
  })
})

apiRouter.get('/nupinContent', function (req, res) {
  res.json({
    error: 0,
    data: nupinContent
  })
})

apiRouter.get('/dongmanSlideImage', function (req, res) {
  res.json({
    error: 0,
    data: dongmanSlideImage
  })
})

apiRouter.get('/dongmanContent', function (req, res) {
  res.json({
    error: 0,
    data: dongmanContent
  })
})
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}

