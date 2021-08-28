const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const User = require('../models/User.model');
const createError = require('http-errors')
const jwt = require('jsonwebtoken')

const axios = require('axios').default;


router.get('/', (req, res, next) => {
  res.send('index');
});

router.get('/test', (req, res, next) => {
  res.send('this is a test');
});

router.get('/getEvents', (req, res, next) => {
  axios.get("https://datos.madrid.es/egob/catalogo/300107-0-agenda-actividades-eventos.json")
  .then((r) => {res.send(r.data)})
  .catch((e) => {res.send(e)})
});

router.get('/getEvent/:id', (req, res, next) => {
  axios.get("https://datos.madrid.es/egob/catalogo/tipo/evento/"+req.params.id+".json")
  .then((r) => {res.send(r.data)})
  .catch((e) => {res.send(e)})
});


module.exports = router;
