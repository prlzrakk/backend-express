const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({items: [{
      "id": 1,
      "name": "Илона"
   }, {
      "id": 2,
      "name": "Лёша"
   }]});
});

module.exports = router;
