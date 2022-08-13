var models = require('../models');
var express = require('express');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, result) => {
      if (err) {
        throw err;
      }
      res.send(JSON.stringify(result));
    });

  },
  post: function (req, res) {
    models.messages.create(req.body, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });

  }
};

