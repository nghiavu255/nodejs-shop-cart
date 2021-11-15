// const product = require("../models/product")


// class NewController{
//     // index(req,res){
//     //     product.find(function(err,docs){
//     //         res.render('home',{title:'shadow',products:docs})
//     //     })
//     // }
//     index(req,res,next){
//       product.find({})
//         .then(products=>{
//             products = products.map(product=>product.toObject())
//             res.render(('home'),{title:'nghia',products})
//         })
//         .catch(next)
    
//     }
//     home(req,res,next){

//     }
// }
// module.exports = new NewController
