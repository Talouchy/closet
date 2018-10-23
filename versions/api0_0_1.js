const express = require ('express')
const geoip = require('geoip-lite');
const expressErrorhandlers = require('express-errorhandlers')
const Handler = expressErrorhandlers.Handler
var ip = require('ip')

function api0_0_1() {
  var router = express.Router()

  router.use('/error', (req, res, next) => {
    next(new Handler(
      null,
      422,
      'Error trew',
      {data: 'It is a data area that you can freely use. It is also used in production environments.'},
      {debugData: 'It is a data area that you can freely use. Ignored in production environment.'}
    ))
  })

  router.use('/useragent', (req, res, next) => {
    res.json(req.useragent)
  })

  router.use('/ip', (req, res, next) => {
    let geo = geoip.lookup(ip.address())
    console.log(Object.keys(req));
    
    res.json({server: ip.address(), client: req.clientIp})
  })

  return router
}

module.exports = api0_0_1