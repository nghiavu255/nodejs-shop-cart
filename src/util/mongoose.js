module.exports = {
    mutipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },// cong cu xu li data mongose
    mongooseToObject: function (mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    },
}