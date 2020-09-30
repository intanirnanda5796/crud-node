'use strict';

const express = require('express');
const config = require('./config/config');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: 'true'}));
app.use(bodyParser.json());
app.use(require('./routes/routes'));

app.listen(config.app_port, () => console.log(`server listening on port ${config.app_port}`));

module.exports = app;
