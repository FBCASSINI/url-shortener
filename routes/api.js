module.exports = function(express){
const router = express.Router()

router.get('/v1/urls', function(req,res){
  res.json({hello: 'world'});
});

router.post('/v1/urls', function(req,res){
  res.json({healthy: 'true'});
});

return router;
}
