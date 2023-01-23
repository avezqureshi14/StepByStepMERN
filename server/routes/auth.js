const { request } = require('express');
const express = require('express');
router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello world from the server to the Home")
})
router.post('/register', (req, res) => {
    console.log(req.body);
    res.send("My regsiter Page");
})

module.exports = router