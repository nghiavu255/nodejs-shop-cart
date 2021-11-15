const Product = require("../models/product")
const User = require("../models/user")
const Session = require("../models/session")
const {mutipleMongooseToObject} = require('../../util/mongoose')
class AdminController{
    
    admin(req,res,next){
        var tk = req.cookies.user
        res.render('admin')
    }
    thongke(req,res,next){
        var tk = req.cookies.user
        Promise.all([Product.find({}),User.find({})])
            .then(([products,users])=>{
                for(var i=0;i<products.length;i++){
                    for(var j=0;j<products.length;j++){
                        if(products[i].nameOptic == products[j].nameOptic && products[j].trangthai==0){
                            products[i].soluong = products[i].soluong - products[j].soluongmua
                        }
                    }
                    products[i] = products[i].toObject()
                    products[i].createdAt =products[i].createdAt.getDate() +'/' + (products[i].createdAt.getMonth()+1)  +'/'+products[i].createdAt.getFullYear() 

                }

                for(var i=0;i<users.length;i++){
                  
                    users[i] = users[i].toObject()
                    if(tk == users[i].user){
                        res.cookie('admin',users[i].user)
                    }
                }
                res.render(('thongke'),{
                    title:'nghia',
                    products,
                    users,
                    tk,
                    admin:req.cookies.admin
                   
                })
            })
            .catch(next)
    }
    doanhthu(req,res,next){
        Product.find({})
        .then(products=>{ 
            var doanhthu =0
            console.log(req.query.thang)
            var thang = req.query.thang
            for(var i=0;i<products.length;i++){
                if(products[i].trangthai==0 && thang==(products[i].createdAt.getMonth() +1)){
                    
                    products[i] = products[i].toObject()
                    products[i].price = products[i].soluongmua * products[i].price
                    products[i].createdAt =  products[i].createdAt.getDate() +'/' +( products[i].createdAt.getMonth()+1)  +'/'+products[i].createdAt.getFullYear() +'-'+products[i].createdAt.getHours() +':'+products[i].createdAt.getMinutes() +':'+ products[i].createdAt.getSeconds()
                    console.log(products[i].createdAt)
                    doanhthu = doanhthu + products[i].price
                }
                
                
                
            }
           
            
            res.render(('doanhthu'),{
                title:'nghia',
                products,
                doanhthu,
                thang,
                tk:req.cookies.user,
              
            })
        
        })
        .catch(next)
    }
    themsanpham(req,res,next){
        Product.find({})
            .then(products=>{
                for(var i=0;i<products.length;i++){
                    products[i] = products[i].toObject()
                }
                res.render('sanpham/create',{products,tk:req.cookies.user})
            })
            .catch(next)
        
        
    }
    store(req,res,next){
        const product = new Product(req.body)
        console.log(product)
        product.save()
            .then(()=> res.redirect('/admin/create'))
            .catch(error =>{

            })
    }
    
}
module.exports = new AdminController
