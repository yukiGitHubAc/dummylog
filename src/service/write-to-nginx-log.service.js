"use strict";

const faker = require('faker');

module.exports.writeToLog = (time) => {
  return new Promise((resolve) => {
    const data = faker.fake(`{{internet.ip}} - - [${time}] "{{helpers.randomize(["GET", "POST"])}} /{{internet.domainWord}}/{{lorem.slug}} HTTP/1.1" {{helpers.randomize(["200", "404", "301", "500"])}} {{random.number}} "-" "{{internet.userAgent}}"`);
    resolve(console.log(data));
  });
};
