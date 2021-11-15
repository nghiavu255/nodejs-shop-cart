const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/AdminController');
router.use('/thongke',adminController.thongke)
router.use('/doanhthu',adminController.doanhthu)
router.get('/create',adminController.themsanpham)
router.post('/store',adminController.store)
router.use('/',adminController.admin)

module.exports = router