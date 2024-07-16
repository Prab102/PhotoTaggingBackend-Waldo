const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LevelSchema = new Schema({
  name:{type:String,required:true},
  difficulty:{type:String, required:true}, 
  imgpath:{type:String,required:true},
  pixelsX:{type:String,required:true},
  pixelsY:{type:String,required:true},
});


LevelSchema.virtual("url").get(function () {

  return `/level/${this._id}`;
});

// Export model
module.exports = mongoose.model("Level", LevelSchema);