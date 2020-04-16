const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
require('dotenv').config();
const router = express.Router();

// search and returns searched images
router.get('/:id', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${req.params.id}&api_key=${process.env.GIPHY_API_KEY}&limit=5`).then((response) => {
      res.send(response.data);
    }).catch( err => {
      res.sendStatus(500);
    });
  })
  
module.exports = router;
