const mongoose = require('mongoose');
const CONFIG = require('../config/config');
const logger = require('./logger');

// connect to mongo DB
var url = `${CONFIG.db_dialect}://${CONFIG.db_host}/${CONFIG.db_name}`

mongoose.Promise = global.Promise

mongoose.connect(url, { useNewUrlParser: true }, () => logger.log('info', 'Mongo is connected') );
(CONFIG.app === 'development')?mongoose.set('debug', true):'';
module.exports = {
  connection: mongoose.connection,
};