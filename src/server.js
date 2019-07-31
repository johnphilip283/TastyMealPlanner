const express = require("express");
const app = express();
const config = require('./config');
const request = require('superagent');
const cors = require('cors');

app.use(cors());

app.get('/api/tags', async (req, res) => {

  const response = await request.get('https://api.tasty.co/search/tags')
  .set({
    'X-AUTH-TOKEN': config.config,
    'X-Tasty-User-Access-Token': config.config,
    'Accept': "application/json",
    "Content-Type": "application/json",
    "Fastly": 1
  });
  res.send(response);
});


app.listen(5000, () => {
  console.log('Starting server now.')
});