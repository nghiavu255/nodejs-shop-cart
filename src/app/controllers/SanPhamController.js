const Product = require("../models/product")
const Session = require("../models/session")
const User = require("../models/user")
var count =  0
const {mutipleMongooseToObject} = require('../../util/mongoose')
const {mongooseToObject} = require('../../util/mongoose')
class SanPhamController{
    sanpham(req,res,next){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        var sessionId = req.cookies.sessionId
        if(!sessionId){
            res.redirect('/login')
        }
        Promise.all([Product.find({}),Session.findOne({id:sessionId.id})])
        .then(([products,sessions])=>{ 
            var arrayCart = Object.values(sessions.cart)
            console.log(arrayCart)
            var cart = arrayCart.reduce(reducer)
            // for(var c =0; c<arrayCart.length;c++){
            //     cart += arrayCart[c] -1
            //     console.log(cart)
            // }
            cart = cart -1
            console.log(cart)
            res.cookie('cart',cart)
            var page = parseInt(req.query.page) ||1;//n
            var perPage = 6;
            var start = (page-1)*perPage
            var end = page*perPage
            products = products.slice(start,end)
            // products = products.map(product=> product.toObject())
            var pt =0
            for(var i=0;i<products.length;i++){
                products[i] = products[i].toObject()
                products[i].createdAt = products[i].createdAt.getDate()

            }
            res.render(('sanpham'),{
                title:'nghia',
                products,
                cart,
                tk:req.cookies.user
                
            })
        
        })
        .catch(next)
    }
    //[GET] /sanpham/slug
    chitietsanpham(req,res,next){
        Promise.all([Product.find({}), Product.findOne({ slug: req.params.slug})])
            .then(([products,product]) =>{
                console.log(product.nameOptic)
                for(var i=0;i<products.length;i++){
                    if(product.nameOptic == products[i].nameOptic){
                        product.soluong = product.soluong - products[i].soluongmua
                    }
                }
                product = product.toObject()
                res.render('chitiet',{product,tk:req.cookies.user})
            })
            .catch(next)
    }

    // [GET]  /sanpham/create
    // themsanpham(req,res,next){
        
    //     res.render('sanpham/create',{tk:req.cookies.user})
        
    // }
    store(req,res,next){
        const product = new Product(req.body)
        console.log(product)
        product.save()
            .then(()=> res.redirect('/sanpham'))
            .catch(error =>{

            })
    }
    mua(req,res,next){
        Promise.all([Product.find({}), Product.findOne({ slug: req.params.slug})])
            .then(([products,product])=>{
                for(var i=0;i<products.length;i++){
                    if(product.nameOptic == products[i].nameOptic){
                        product.soluong = product.soluong - products[i].soluongmua
                    }
                }
                console.log(product.soluong)
                        product.soluong = product.soluong - req.body.soluongmua

                console.log(product.soluong)
                return product.soluong
            })
            .then(kiemtra=>{
                if(kiemtra<0){
                    res.send('xin lỗi quý khách hiện tại shop đã hết mặt hàng này.Kính mong quý khách lựa sản phẩm phù hợp khác')
                }
                else{
                    const product = new Product(req.body)
                    console.log(product)
                    Object.assign(product,{trangthai:0})
                    console.log(product)
                    product.save()
                        .then(()=> res.redirect('/sanpham'))
                        .catch(error =>{

                    })
                }
                
            })
            .catch(next)
            
            

        
        }
  
    thanhtoangiohang(req,res,next){
        var obj ={}
        res.cookie('cart',{expires: Date.now()})
        console.log(req.body.nameOptic.length)
        for(var i=0;i<req.body.nameOptic.length;i++){
            obj['price'] = req.body.price[i]
            obj['nameOptic'] = req.body.nameOptic[i]
            obj['soluongmua'] = req.body.soluong[i]
            obj['nguoimua'] = req.body.nguoimua
            obj['diachi'] = req.body.diachi
            obj['sodienthoai'] = req.body.sodienthoai
            obj['trangthai'] = 0
            const product = new Product(obj)
                console.log(product)
                product.save()
                    .then(()=> res.redirect('/sanpham'))
                    .catch(error =>{

                })
        }
    }

    addToCart(req,res,next){
        
        var sessionId = req.cookies.sessionId
        Promise.all([Product.findOne({slug:req.params.slug}),Session.findOne({id:sessionId.id})])
            .then(([products,sessions]) =>{
                var carts = sessions
                if(!carts.cart[products.slug]){
                    carts.cart[products.slug] = 1
                }
                else{
                    carts.cart[products.slug] = carts.cart[products.slug] +1
                }
                
                console.log(carts)
                return carts
            })
            .then(d =>{
                console.log(Session)
                console.log(d)
                Session.updateOne({id:sessionId.id},d)
                    .then(update=>{
                        res.redirect('/sanpham')
                    })
                
            })
            .catch(next)
        

    }
    giohang(req,res,next){
        var sessionId = req.cookies.sessionId
        var tong =0
        Promise.all([Product.find({}),Session.findOne({id:sessionId.id})])
        .then(([products,sessions])=>{ 
        //    var a = Object.keys(sessions.cart)

        //    var b = Object.values(sessions.cart)
            for(var i=0;i<products.length;i++){
                products[i] = products[i].toObject()
                if(sessions.cart[products[i].slug]){
                    console.log(sessions.cart[products[i].slug])
                    products[i].soluong = sessions.cart[products[i].slug]
                    products[i].createdAt =products[i].createdAt.getDate() +'/' + (products[i].createdAt.getMonth()+1)  +'/'+products[i].createdAt.getFullYear()
                    tong = tong + (products[i].price * products[i].soluong)
                
                }
                else
                {
                    products[i].nameOptic = false
                }
            }
            
            res.render(('giohang'),{
                title:'nghia',
                products,
                tk:req.cookies.user,
                tong,
                cart:req.cookies.cart

                
            })
        
        })
        .catch(next)
        
    }
}
module.exports = new SanPhamController
