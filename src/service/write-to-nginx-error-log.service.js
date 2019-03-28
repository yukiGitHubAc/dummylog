"use strict";

const faker = require('faker');

module.exports.writeToErrorLog = (time) => {
  return new Promise((resolve) => {
    const data = faker.fake(`[ ${time} {{random.number}}/{{random.alphaNumeric(8)}} {{internet.domainName}}/{{internet.domainWord}}/{{internet.domainSuffix}}:{{random.number(443)}} ]: {{lorem.sentences}}`);
    resolve(console.log(data));
  });
};
