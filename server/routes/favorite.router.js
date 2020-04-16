const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM favorite';
  pool.query(queryText)
    .then((result) => { 
      console.log( 'Got fav on server', result.rows );
      res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT favorite query', err);
      res.sendStatus(500);
    });
});
// add a new favorite 
router.post('/', (req, res) => {
  console.log('post body',req.body)
  const fav = req.body;
  console.log(fav.imageurl)
  const queryText = `INSERT INTO favorite ("URL")
                    VALUES ($1)`;
  const queryValues = [
    fav.imageurl
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing insert fav query', err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const data = req.body;
  const id = req.body;
  const queryText = `UPDATE favorites
                      SET category = ($1)
                      WHERE id = ($2)`;
  const queryValues = [
    data.category,
    id
  ]
  pool.query(queryText, queryValues)
    .then(() => {res.sendStatus(201);})
    .catch((err) => {
      console.log('Error completing put category',err);
      res.sendStatus(500)
    })
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
