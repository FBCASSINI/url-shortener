const express = require('express');
const bodyParser = require('body-parser');
const util = require('./util');
const app = express();



const port = 3000;

app.use('/api', require('../routes/api.js')(express));



app.listen(port, () => {
  console.log('Server Active On', port);
});
