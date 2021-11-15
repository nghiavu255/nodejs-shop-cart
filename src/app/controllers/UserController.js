const User = require("../models/user")
const {mutipleMongooseToObject} = require('../../util/mongoose')
const {mongooseToObject} = require('../../util/mongoose')



class UserController{


    dangnhap(req,res,next){
       
        res.render('user/signin',{tk:req.cookies.user})
    }
    dangky(req,res,next){
        
        res.render('user/signin',{tk:req.cookies.user})
        
    }
    profile(req,res,next){
        
        res.render('user/profile',{tk:req.cookies.user})
        
    }
 
   
}
module.exports = new UserController
