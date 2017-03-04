/*------------------variables-----------------------------------------*/
const express = require('express');
const bodyParser = require('body-parser');
const util = require('./util');
const url = require('./models/url');
const app = express();



const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // using body parser to parson json data
app.use(bodyParser.urlencoded({
  extended: true,

}));

app.use('/', require('../routes/api')(express));

const server = app.listen(port, () => {
  console.log('Server Active On', port);
});
