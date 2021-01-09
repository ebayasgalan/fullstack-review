const express = require('express');
const mongoose = require('mongoose');
const repoRoute = require('./Routes/repos');
const bodyParser = require('body-parser');
require('dotenv').config({path: 'variables.env'});
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/repos', repoRoute);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('mongoDB connected');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port http://localhost:${port}`);
});

