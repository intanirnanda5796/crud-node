require('dotenv').config()
const path = require('path');

let CONFIG = {} //Make this global to use all over the application

var appendString = '';
if (process.env.APP == 'staging') appendString = "STAG_";
else if (process.env.APP == 'production') appendString = "PROD_";

var string = [appendString + "DB_DIALECT", appendString + "DB_HOSTNAME", appendString + "DB_PORT", appendString + "DB_NAME", appendString + "DB_USERNAME", appendString + "DB_PASSWORD"];

CONFIG.app = process.env.APP || 'dev';
CONFIG.email_password = process.env.EMAIL_PASS || 'contact@lala.com';
CONFIG.app_port = process.env.PORT || '8080';
CONFIG.app_access = process.env.APP_ACCESS || 'local';
CONFIG.debug = (process.env.DEBUG == 'true' ? true : false) || false;

CONFIG.dialect = process.env[string[0]] || 'mysql';
CONFIG.host = process.env[string[1]] || 'localhost';
CONFIG.port = process.env[string[2]] || '3306';
CONFIG.database = process.env[string[3]] || 'qtrust';
CONFIG.username = process.env[string[4]] || 'root';
CONFIG.password = process.env[string[5]] || 'root';

module.exports = CONFIG;
