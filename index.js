const express =  require ('express')
const bodyPaser = require('body-parser')

const CONFIG = require('./config/config')
const db = require('./libs/db')
const logger = require('./libs/logger')
const middleware = require('./middleware')
const api = require('./versions');


const app = express()

/******* Middlewares *******/
app.use(bodyPaser.json())
app.use(middleware.addUserAgent) // get client user agent
app.use(middleware.addClientIpInfo) // get client ip
app.set('json spaces', 2) // number of spaces for indentation of response

/******* Routes *******/
app.use('/api', api.version0_0_1())

/******* Middlewares *******/
app.use(middleware.notFound) // 404 not found handler

app.use(middleware.errorHandler) // error handler

//Listen for requests
app.listen(CONFIG.port,  '0.0.0.0', () => {
  // logger.log('info', `now listening for requests on Port ${CONFIG.port}`)
  logger.log({
    level: 'info',
    message: `now listening for requests on Port ${CONFIG.port}`,
  })
  
})