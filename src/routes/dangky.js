const express = require('express')
const router = express.Router()

const dangkyController = require('../app/controllers/DangkyController');

router.get('/',dangkyController.dangky)
router.post('/taotaikhoan',dangkyController.taotaikhoan)

module.exports = router