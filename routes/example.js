'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();

router.get('/example', (req, res, next) => {
  knex('users')
    .select('*')
    .then((users) => {
      res.send(users)
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
