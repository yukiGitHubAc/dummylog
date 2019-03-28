"use strict";

const ts = require('./service/create-timestamp.service');
const access = require('./service/write-to-nginx-log.service');
const error = require('./service/write-to-nginx-error-log.service');
const logType = process.argv[2];

const main = () => {
  switch(logType){
    case "access_log":
      for (let n = 0; n < 10000; n++) {
        setTimeout(() => {
          access.writeToLog(ts.timestamp(logType));
        },50000);
      }
      break;
    case "error_log":
      for (let n = 0; n < 100; n++) {
        setTimeout(() => {
          error.writeToErrorLog(ts.timestamp(logType));
        },10000);
      }
      break;
    default:
      console.log('none.');
      break;
  }
};
main();