const url = require('../src/models/url');
const util = require('../src/util');
const express = require('express');

module.exports = (express) => {
  const router = express.Router();


// READ and Find All URLS----------------------------------------------------//
  router.get('/v1/url', (req, res) => {
    url.findAll((err) => {

      res.status(500).json(err);
    }, (data) => {

      res.status(200).json(data);
    });
  });

// READ and Find specific url by id---------------------------------------------------->
  router.get('/v1/url/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {

      res.status(500).json(err);
    }, (data) => {

      res.status(200).json(data);
    });
  });


// create and generate short url------------------------------------------------------------------->
  router.post('/v1/url', (req, res) => {
    const generate = require('../src/util');
    req.body.shorturl = generate.returnStringGen();
    url.create(req.body, (err) => {

      res.status(500).json(err);
    }, (data) => {

      res.status(200).json(data);
    });
  });


    // update specific url by finding id ------------------------------------------------------->
  router.post('/v1/url/:id', (req, res) => {
      req.body.id = req.params.id;
    url.update(req.body, (err) => {

      res.status(500).json(err);
    }, (data) => {

      res.status(200).json(data);
    });
  });

    // delete url specific url by finding id ----------------------------------------------------->
  router.delete('/v1/url/:id', (req, res) => {
      req.body.id = req.params.id;
    url.destroy(req.body, (err) => {

      res.status(500).json(err);
    }, (data) => {

      res.status(200).json(data);
    });
  });
  return router;
};
