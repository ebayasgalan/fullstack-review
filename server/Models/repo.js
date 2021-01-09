const mongoose = require('mongoose');

let repoSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  repos: {
    type: Array
  }
});

module.exports = mongoose.model('Repo', repoSchema);