const logger = require('../libs/logger')
const CONFIG = require('../config/config')
const Errorhandlers = require('express-errorhandlers')
const useragent = require('express-useragent')
const requestIp = require('request-ip')

module.exports = {
  // Error handler
  errorHandler: Errorhandlers.middleware.errorHandler({
    debug: CONFIG.app !== 'production',
    status: 500, // default response status code
    message: 'Internal Server Error', // default error message
    extra: {}, // It is a data area that you can freely use. It is also used in production environments.
    extraDebug: {}, //It is a data area that you can freely use. Ignored in production environment.
    final: (req, res, handler) => { // Postprocessing function.
      // log output. choose from [ 'error', 'status', 'message', 'extra', 'extraDebug' ]
      logger.log('error', `form [${req.clientIp}]. error ${handler.message}`)
    }
  }),

  // Not found handler
  notFound: Errorhandlers.middleware.notFound({
    message : 'Not Found', // custom response message (optional)
    extra : {}, // It is a data area that you can freely use. It is also used in production environments.
    extraDebug: {}, //It is a data area that you can freely use. Ignored in production environment.
  }),

  // get useragent
  addUserAgent: useragent.express(),

  // get client ip
  addClientIpInfo: requestIp.mw()
}

