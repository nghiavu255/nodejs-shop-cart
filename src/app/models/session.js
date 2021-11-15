const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const mongooseDelete = require('mongoose-delete');

const session = new Schema({
  id :{type:String, require:true},
  cart:{type:Object,require:true}
},{
  timestamps:true,
});


module.exports = mongoose.model('session',session);