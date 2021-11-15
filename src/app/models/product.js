const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
// const mongooseDelete = require('mongoose-delete');

const schema = new Schema({
  imagePath :{type:String, require:true},
  imageHover :{type:String, require:true},
  nameOptic :{type:String, require:true},
  tradeMark :{type:String, require:true},
  description:{ type: String, require:true},
  price:{type:Number,require:true},
  slug: { type: String,slug:'nameOptic',unique:true},
  soluong: { type: Number,require:true},
  soluongmua: { type: Number,require:true},
  trangthai: { type: Number,require:true},
  nguoimua:{type:String, require:true},
  diachi:{type:String, require:true},
  sodienthoai:{type:String, require:true},
  giohang:{type:Number, require:true},
},{
  timestamps:true,
});
mongoose.plugin(slug)



module.exports = mongoose.model('product',schema);