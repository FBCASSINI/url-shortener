const chalk = require('chalk');


exports.debug = (title, obj, status) => {
  const seperator = '\n===================================\n';
  const output = seperator + title + seperator;


const error = chalk.bold.red
const success = chalk.green

  if (!status) {
    status = '';
  }


  if (process.env.DEBUG) {
    console.log(success(output), obj, status);
  }
};
