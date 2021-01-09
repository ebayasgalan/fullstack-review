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
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  try{
    axios.get('https://api.github.com/users/ebayasgalan/repos')
    .then(response => {
      let repos = response.data.map(res => {
        return res.name;
      });
      const repo = new Repo({
        username: 'bayasgaladf',
        repos
      });
      repo.save();
      res.status(200).send(repo);
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