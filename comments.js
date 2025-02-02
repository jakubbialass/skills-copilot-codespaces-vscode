// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const comments = require('./comments.json');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API endpoint
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.json(req.body);
});

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});