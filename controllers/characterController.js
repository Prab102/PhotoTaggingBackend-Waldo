const Character= require("../models/character");
const Level = require("../models/level");

const asyncHandler = require("express-async-handler");

exports.character_get_list = asyncHandler(async (req, res, next) => {
  
    const level = await Level.findById(req.params.levelid);
    const allCharacters= await Character.find({level: level}).sort({_id:1}).exec()


    res.json(allCharacters);

});