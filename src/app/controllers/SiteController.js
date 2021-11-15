// const Product = require('../models/product')
const {mutipleMongooseToObject} = require('../../util/mongoose')
const Product = require("../models/product")
class SiteController {
    trangchu(req,res,next){
        Product.find({})
        .then(products=>{ 
            for(var i=0;i<products.length;i++){
                for(var j=0;j<products.length;j++){
                    if(products[i].nameOptic == products[j].nameOptic && products[j].trangthai==0){
                        products[i].soluong = products[i].soluong - products[j].soluongmua
                    }
                }
                products[i] = products[i].toObject()
                products[i].createdAt =products[i].createdAt.getDate() +'/' + products[i].createdAt.getMonth()  +'/'+products[i].createdAt.getFullYear() 
                console.log(products[i].createdAt)
            }
            console.log(req.cookies.user)
            res.render(('trangchu'),{
                title:'nghia',
                products,
                tk:req.cookies.user,
                cart:req.cookies.cart
            })
        
        })
        .catch(next)
    }
    dangky(req,res){
        res.render('dangky')
    }
    domat(req,res){
        res.render('domat',{tk:req.cookies.user,cart:req.cookies.cart})
    }
    gioithieu(req,res){
        res.render('gioithieu',{tk:req.cookies.user,cart:req.cookies.cart})
    }
    thanhtoan(req,res){
        res.render('thanhtoan',{tk:req.cookies.user,cart:req.cookies.cart})
    }
    thiluc(req,res){
        res.render('thiluc',{tk:req.cookies.user,cart:req.cookies.cart})
    }
    thuonghieu(req,res){
        res.render('thuonghieu',{tk:req.cookies.user,cart:req.cookies.cart})
    }
    trongkinh(req,res){
        res.render('trongkinh',{tk:req.cookies.user,cart:req.cookies.cart})
    }
    
    
}
module.exports = new SiteController();
