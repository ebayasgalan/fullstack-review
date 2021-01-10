const express = require('express');
const router = express.Router();
const Repo = require('../Models/repo');
const axios = require('axios');
// const {getReposByUsername} = require('../../helpers/github');

router.get('/', async (req, res) => {
  const repos = await Repo.find()
  res.status(200).send(repos);
});

router.post('/', async (req, res) => {
  const username = req.body.name;
  console.log('name: ', username);
  try{
    axios.get(`https://api.github.com/users/${username}/repos`)
    .then(response => {
      // console.log('response from github: ', response.data);
      const repo = new Repo({
        username,
        repos: response.data
      });
      repo.save();
      res.status(200).send('saved');
    })
  }catch(err) {
    res.status(400).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  try{
    const repos = await Repo.deleteOne({_id: id});
    res.status(200).send('deleted');
  }catch(err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;