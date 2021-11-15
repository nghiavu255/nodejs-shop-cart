const express = require('express')
const router = express.Router()

const userController = require('../app/controllers/UserController');
router.use('/signin',userController.dangnhap)
router.use('/signup',userController.dangky)
router.get('/cookie',function(req,res,next){
    res.cookie('user-id',12345)
    res.send('hihi')
})
router.use('/profile',userController.profile)
router.get('/',userController.profile)

module.exports = router