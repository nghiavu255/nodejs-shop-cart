const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/middlewares');

const sanphamController = require('../app/controllers/sanphamController');
router.post('/:slug',sanphamController.addToCart)
router.get('/giohang',authMiddleware.requireAuth,sanphamController.giohang)
router.post('/thanhtoangiohang/:slug',sanphamController.thanhtoangiohang)
router.post('/mua/:slug',sanphamController.mua)
router.get('/:slug',sanphamController.chitietsanpham)
router.get('/',sanphamController.sanpham)
router.post('/',sanphamController.sanpham)
module.exports = router