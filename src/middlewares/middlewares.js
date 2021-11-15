
const User = require('../app/models/user')
const {mutipleMongooseToObject} = require('../util/mongoose')
const {mongooseToObject} = require('../util/mongoose')


module.exports.requireAuth =function(req,res,next){
    if(!req.cookies.userId){
        console.log('co id')
        res.redirect('/login')
        return
    } 

    next()
 
    
}

module.exports.adminCheck =function(req,res,next){
        if(!req.cookies.user){
            res.redirect('/login')
        }
        else{
        User.findOne({user : req.cookies.user})
            .then(users=>{
                
                if(!users.quyen){
                    res.send('ban ko the truy cap vao trang nay')
                }

            })
            .catch(()=>{})
        }
        next()

 
    
}