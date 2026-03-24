const express = require('express');
const router = express.Router();

const users = [{
    "id": 1,
    "name": "Илона"
}, {
    "id": 2,
    "name": "Лёша"
}];

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({items: users});
});

router.post('/', function (req, res, next) {
    const newUser = req.body;
    newUser.id = users.length > 0 ? users.length + 1 : 1;
    users.push(newUser);
    return res.status(201).json(newUser);
})

router.get('/:id', function (req, res, next) {
    const id = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === id);
    if (user) {
        return res.json(user);
    }
    return res.status(404);
})

module.exports = router;
