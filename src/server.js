/*------------------variables-----------------------------------------*/
const express = require('express');
const bodyParser = require('body-parser');
const util = require('./util');
const app = express();



const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,

}));

app.use('/api', require('../routes/api')(express));

const server = app.listen(port, () => {
  console.log('Server Active On', port);
});
