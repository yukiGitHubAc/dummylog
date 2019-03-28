"use strict";

const faker = require('faker');
const moment = require('moment');

module.exports.timestamp = (format) => {
    const ts = faker.date.recent(7);
    let str;
    switch(format){
      case "access_log":
          str = moment(ts).format('DD/MMM/YYYY:HH:mm:ss ZZ');
          break;
      case "error_log":
          str = moment(ts).format('YYYY-MM-DD HH:mm:ss.SSSS');
          break;
      default:
        str = moment(ts).format('DD/MMM/YYYY:HH:mm:ss ZZ');
    }
    return str;
};

console.log(this.timestamp('errorLog'));