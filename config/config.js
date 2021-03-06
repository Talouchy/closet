
let CONFIG = {} //Make this global to use all over the application

CONFIG.app          = process.env.APP   || 'development';
CONFIG.port         = process.env.PORT  || '3000';

CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mongodb';
CONFIG.db_host      = process.env.DB_HOST       || 'localhost';
CONFIG.db_port      = process.env.DB_PORT       || '';
CONFIG.db_name      = process.env.DB_NAME       || '';
CONFIG.db_user      = process.env.DB_USER       || '';
CONFIG.db_password  = process.env.DB_PASSWORD   || '';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'jwt_please_change';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || 86400; // 24 hours

module.exports = CONFIG;
