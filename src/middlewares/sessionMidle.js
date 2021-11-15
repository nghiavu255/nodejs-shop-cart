var shortid = require('shortid')
const Product = require('../app/models/product')
const Session = require('../app/models/session')
module.exports.cook=function(req,res,next){
    
    if(!req.cookies.sessionId){
        var sessionId  = {id:shortid.generate()}
        res.cookie('sessionId',sessionId,{singed:true})
        var sessionId = Object.assign(sessionId,{cart:{trangthai:1}})
        var session = new Session(sessionId)
        console.log(session)
        session.save()
    }
    next()

}