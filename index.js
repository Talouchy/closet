const express =  require ('express')
const bodyPaser = require('body-parser')
const CONFIG = require('./config/config')
const logger = require('./libs/logger')
const db = require('./libs/db')

const app = express();

app.use(bodyPaser.json());

app.listen(CONFIG.port, ()=> {
    logger.log('info', `now listening for requests on Port ${CONFIG.port}`)
})