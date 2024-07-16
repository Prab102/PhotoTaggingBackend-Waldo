const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeaderboardSchema = new Schema({
  username:{type:String,required:true},
  score: {type:String, required:true}, //this is going to be in seconds than converted to proper time
  level: {type:Schema.Types.ObjectId,ref:"Level", required:true},
});


LeaderboardSchema.virtual("url").get(function () {

  return `/leaderboard/${this._id}`;
});

// Export model
module.exports = mongoose.model("Leaderboard", LeaderboardSchema);