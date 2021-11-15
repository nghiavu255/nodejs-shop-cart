const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const mongooseDelete = require('mongoose-delete');

const user = new Schema({
  user :{type:String, require:true},
  passWord :{type:String, require:true},
  quyen :{type:Boolean, require:true},
  hoten :{type:String, require:true},
  diachi :{type:String, require:true},
  sodienthoai :{type:String, require:true},
},{
  timestamps:true,
});


module.exports = mongoose.model('user',user);