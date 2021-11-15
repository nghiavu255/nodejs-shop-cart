const User = require("../models/user")
const {mutipleMongooseToObject} = require('../../util/mongoose')
const {mongooseToObject} = require('../../util/mongoose')



class LoginController{
    login(req,res,next){
        res.render('dangky',{tk:req.cookies.user,cart:req.cookies.cart})
    } 
    postLogin(req,res,next){
        User.find({})
        .then(users=>{ 
            var taikhoan = req.body.user
            var matkhau = req.body.passWord
            for(var i=0;i<users.length;i++){
                if(users[i].user !== taikhoan || users[i].passWord !== matkhau){
                    res.render('dangky',{error:'Tài khoản hoặc mật khẩu bạn vừa nhập không chính xác'})
                }
                else{
                    res.cookie('userId',users[i]._id.toString())
                    res.cookie('user',users[i].user)
                    
                    res.redirect('/')
                }
                
            }
            
        
        })
        .catch()


        
    }
    
 
   
}
module.exports = new LoginController
