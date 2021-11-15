const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController');
router.use('/domat',siteController.domat)
router.use('/gioithieu',siteController.gioithieu)
router.use('/thanhtoan',siteController.thanhtoan)

router.use('/thiluc',siteController.thiluc)
router.use('/thuonghieu',siteController.thuonghieu)
router.use('/trongkinh',siteController.trongkinh)
router.use('/dangky',siteController.dangky)

router.get('/',siteController.trangchu)

module.exports = router