const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (name) => {
  let repos = [];
  console.log('hello from helper func!');
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  // `https://api.github.com/users/${name}/repos`
  let options = {
    method: 'get',
    url: 'https://api.github.com/users/ebayasgalan/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  axios(options)
    .then(result => {
      repos = [...result.data];
    })
    .catch(err => console.log(err));
  return repos;
}

const result = getReposByUsername();
console.log('result: ', result);

module.exports.getReposByUsername = getReposByUsername;