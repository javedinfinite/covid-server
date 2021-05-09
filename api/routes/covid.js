const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/auth');

const covidController = require('../controllers/covid');

router.get("/", checkAuth, covidController.get_all_data);

module.exports = router;
