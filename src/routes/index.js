const Product = require("../app/models/product")
// const newRoute = require('./home')
const siteRoute = require('./site')
const sanphamRoute = require('./sanpham')
const userRoute = require('./user')
const loginRoute = require('./login')
const adminRoute = require('./admin')
const authMiddleware = require('../middlewares/middlewares')
const cookId = require('../middlewares/sessionMidle')
const dangkyRoute = require('./dangky')
function route(app){
   
    app.use('/user',authMiddleware.requireAuth,userRoute)
    app.use('/login',loginRoute)
    app.use('/dangky',dangkyRoute)
    app.use('/admin',authMiddleware.adminCheck,adminRoute)
    app.use('/sanpham',cookId.cook,sanphamRoute)
    app.use('/',cookId.cook,siteRoute)

}
module.exports = route