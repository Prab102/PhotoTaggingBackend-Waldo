const Level= require("../models/level");

const asyncHandler = require("express-async-handler");
// const {body, validationResult} = require("express-validator");


exports.level_list = asyncHandler(async (req, res, next) => {

    const allLevels= await Level.find().sort({ difficulty: 1 }).exec()
    res.json(allLevels);


});

exports.level_get = asyncHandler(async (req, res, next) => {
  
    console.log(req.params.levelid);
    const level = await Level.findById(req.params.levelid).exec()
    if (level === null) {
        // No results.
        res.send("no level exists");
      }

    res.json(level);

    
});