'use strict';

const environment = 'development';
const configuration = require('./knexfile')[environment];
const knex = require('knex')(configuration);

module.exports = knex;
