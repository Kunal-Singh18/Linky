const express = require('express');
const router = express.Router();
const {newURL,handle_analytics} = require("../controllers/url")

router.post('/',newURL);

router.get('/analytics/:var1',handle_analytics);

module.exports = router;