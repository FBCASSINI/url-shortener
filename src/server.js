/* ------------------variables-----------------------------------------*/
const express = require('express');
const bodyParser = require('body-parser');
const util = require('../lib/debug');
const app = express();


const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // using body parser to parson json data
app.use(bodyParser.urlencoded({
  extended: true,

}));

app.use('/', require('../test/__api')(express));

const server = app.listen(port, () => {
  util.debug('Server Active On', port);
});

module.exports = server;
