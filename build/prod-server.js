var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')

var port = 8080
	// Define HTTP proxies to your custom API backend
	// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()


// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
	var options = proxyTable[context]
	if (typeof options === 'string') {
		options = { target: options }
	}
	app.use(proxyMiddleware(context, options))
})

app.use(express.static(path.resolve(__dirname, '../dist')))

console.log(port);

module.exports = app.listen(port, function(err) {
	if (err) {
		console.log(err.message)
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
})
