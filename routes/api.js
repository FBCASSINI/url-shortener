const url = require('../src/models/url');
const util = require('../src/util');
const express = require('express');

module.exports = (express) => {
  const router = express.Router();

/*-------------This route will lauch shortend url in browser-----------------------------------*/

  router.get('/go/:shorturl', (req, res) => {
    req.body.shorturl = req.params.shorturl;
    url.findShortURL(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.redirect('http://www.' + data.longurl);
    });
  });




// READ and Find All URLS----------------------------------------------------//
  router.get('/api/v1/url', (req, res) => {
    url.findAll((err) => {

      res.status(500).json(err);
    }, (data) => {

      res.status(200).json(data);
    });
  });

// READ and Find specific url by id---------------------------------------------------->
  router.get('/api/v1/url/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {

      res.status(500).json(err);
    }, (data) => {

      res.status(200).json(data);
    });
  });


// create and generate short url------------------------------------------------------------------->
  router.post('/api/v1/url', (req, res) => {
    const generate = require('../src/util');
    req.body.shorturl = generate.returnStringGen();
    url.create(req.body, (err) => {

      res.status(500).json(err);
    }, (data) => {

      res.status(200).json(data);
    });
  });


    // update specific url by finding id ------------------------------------------------------->
  router.post('/api/v1/url/:id', (req, res) => {
      req.body.id = req.params.id;
    url.update(req.body, (err) => {

      res.status(500).json(err);
    }, (data) => {

      res.status(200).json(data);
    });
  });

    // delete url specific url by finding id ----------------------------------------------------->
  router.delete('/api/v1/url/:id', (req, res) => {
      req.body.id = req.params.id;
    url.destroy(req.body, (err) => {

      res.status(500).json(err);
    }, (data) => {

      res.status(200).json(data);
    });
  });
  return router;
};
