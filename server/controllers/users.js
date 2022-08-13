var models = require('../models');

module.exports = {
  get: function (req, res) {
    var promise = models.users.getAll;
    promise.then((data) => {
      res.send(data);
    });
  },
  post: function (req, res) {
    models.users.create(req.body).then((data) => {
      res.send(data);
    });

  } // a function which handles posting a message to the database
};
