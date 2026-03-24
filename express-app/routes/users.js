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

router.post('/', function(req, res, next) {
    const newUser = req.body;
    return res.status(201).json(newUser);
})

module.exports = router;
