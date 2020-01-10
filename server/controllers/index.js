var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((result) => {
        res.end(result);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.data.text);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get();
      res.end();
    },
    post: function (req, res) {
      models.users.post();
      res.end();
    }
  }
};

