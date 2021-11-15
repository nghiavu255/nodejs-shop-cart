const User = require("../models/user")
const {mutipleMongooseToObject} = require('../../util/mongoose')
const {mongooseToObject} = require('../../util/mongoose')



class DangkyController{

    dangky(req,res,next){
        res.render('dangky2')
    } 
    taotaikhoan(req,res,next){
        User.find({})
            .then(users=>{
                for(var i=0;i<users.length;i++){
                    if(users[i].user ==req.body.user){
                        console.log(users[i].user)
                        var error = 'Tài khoản đã tồn tại'
                        console.log(error)
                        
                    }
                }
                if(!error){
                    const user = new User(req.body)
                    Object.assign(user,{quyen:false})
                    console.log(user)
                    user.save()
                        .then(()=> res.redirect('/login'))
                        .catch(error =>{

                    }) 
                }
                else{
                    res.render('dangky2',{error})
                }   
            
            })
            .catch(next)
        
        
    }
    
 
   
}
module.exports = new DangkyController
