import express from 'express';

const router = express.Router();
const connection = require('./config');


router.get('/', (req, res) => {
  connection.query('SELECT name, childrenprice, adultprice, description, picture, id FROM numeros', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

router.get('/price', (req, res) => {
  connection.query('SELECT name, childrenprice, adultprice, description FROM numeros', (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

router.get('/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT name, childrenprice, adultprice, description, picture FROM numeros where id=?', id, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(results[0]);
    }
  });
});

router.post('/', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO numeros SET ?', formData, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});


router.put('/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  connection.query('UPDATE numeros SET ? WHERE id=?', [body, id], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM numeros  WHERE id=?', id, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;
