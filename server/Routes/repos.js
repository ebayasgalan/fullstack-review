const express = require('express');
const router = express.Router();
const Repo = require('../Models/repo');

router.get('/', (req, res) => {
  res.send('get request from repo route');
});

router.post('/',async (req, res) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  const repo = new Repo({
    username: req.body.username,
    repos: req.body.repos
  });
  try{
    const savedRepo = await repo.save();
    res.status(200).send(savedRepo);
  }catch(err) {
    res.status(400).send(err);
  }
});

module.exports = router;