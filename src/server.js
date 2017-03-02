/*------------------variables-----------------------------------------*/
const express = require('express');
const bodyParser = require('body-parser');
const util = require('./util');
const app = express();



const port = 3000;

app.use('/api', require('../routes/api.js')(express)); //api routes

app.use(bodyParser.json());  //parses json
app.use(bodyParser.urlencoded({
  extended: true,

}));



const server = app.listen(port, () => {   //server listens to port 3000
  console.log('Server Active On', port);
});
