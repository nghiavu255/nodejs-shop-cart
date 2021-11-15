const express = require('express')
const router = express.Router()

const loginController = require('../app/controllers/LoginController');

router.get('/',loginController.login)
router.post('/',loginController.postLogin)

module.exports = router