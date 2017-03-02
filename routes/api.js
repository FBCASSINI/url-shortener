/*---------------Variables----------------------------------------------*/
const url = require('../src/models/url');
//const util = require('../src/util');
const express = require('express');

/*----------------Variable module exports with function express-------------------------------------------------------*/
module.exports = function(express){
/*------------variable router with express using Router function--------------------------------------------------------*/
const router = express.Router();

//router.get('/v1/urls', function(req,res){
  //res.json({hello: 'world'});
//});

/*router.post('/v1/urls', function(req,res){
  res.json({healthy: 'true'});
});*/

/*router.get('/v1/url', (req, res) => {
   url.findAll((err) => {

     res.status(500).json(err);
   }, (data) => {

     res.status(200).json(data);
   });
 });*/

/*-----------Post method wither route adding /v1/url to link--------------------------------------------*/

router.post('/v1/url', (req, res) => {
   const generate = require('../src/util');  //variable generate requiring util.js where rand num generates
   var shorturl = generate.returnStringGen();
   res.json(shorturl)  //calls variable shorturl in res with json
   /*url.create(req.body, (err) => {
     res.status(500).json(err);
   }, (data) => {
     res.status(200).json(data);
   });*/
 });

return router;
}
