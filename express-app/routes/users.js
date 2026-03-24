const express = require('express');
const { useId } = require('react');
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

router.get('/', function(req, res, next){
  const users = req.body.items;
  const UserId = req.params;
  console.log(UserId);
  if (users["id"].includes(UserId)){
    return res.send(users[UserId]);
  }
  else{
    res.status(403);
  }
})

module.exports = router;
