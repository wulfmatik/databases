var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, result) => {
      if (err) {
        throw err;
      }
      res.send(JSON.stringify(result));
    });
  },
  post: function (req, res) {
    models.users.create(req.body, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });

  } // a function which handles posting a message to the database
};
