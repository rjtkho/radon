const express = require('express');
const { welcome } = require('../logger/logger');

const { printDate, getBatchInfo } = require('../util/helper.js');
const {trim ,lowerCase,upperCase}=require('../validator/formatter')
const externalModule = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
   welcome();
   printDate();
   getBatchInfo();
   trim();
   lowerCase()
   upperCase()
    res.send('My first ever api!')
});



module.exports = router;
// adding this comment for no reason