const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name:{type:String,required:true},
  xcoord: {type:String, required:true},
  ycoord: {type:String, required:true},
  level: {type:Schema.Types.ObjectId,ref:"Level", required:true},
});


CharacterSchema.virtual("url").get(function () {

  return `/character/${this._id}`;
});

// Export model
module.exports = mongoose.model("Character", CharacterSchema);