var express = require('express');
var router = express.Router();
var youubeController = require('../controllers/downloadController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get youtube video info */
router.post('/youtube/info', function (req, res) {
  youubeController.getInfo(req, res);
});

/* get youtube download */
router.post('/youtube/download', function (req, res, next) {
  youubeController.download(req, res);
});

module.exports = router;
