// represents the ninja model here

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create ninja schema and model

//Create geolocation Schema
const GeoSchema = new Schema({
  type:{
    type:String,
    default:"Point"
  },
  coordinates:{
    type:[Number],
    index:"2dsphere"
  }
});
//New class object schema named NinjaSchema
const NinjaSchema = new Schema({
  name:{
    type:String,
    required:[true,'Name field is required']
  },
  rank:{
    type:String
  },
  available:{
    type: Boolean,
    default: false
  },
  geometry:GeoSchema

  //add in geo location
});
//Ninja model
const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;
