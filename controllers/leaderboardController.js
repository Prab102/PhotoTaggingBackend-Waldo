const Leaderboard= require("../models/leaderboard");
const Level= require("../models/level");

const asyncHandler = require("express-async-handler");
const {body, validationResult} = require("express-validator");


exports.leaderboard_list = asyncHandler(async (req, res, next) => {
    const level = await Level.findById(req.params.levelid);
    const allLeaderboard= await Leaderboard.find({level:level}).sort({ score: 1 }).exec()
    res.json(allLeaderboard);


});

exports.leaderboard_post = [

    body("playername", "name must not be empty.")
        .trim()
        .isLength({ min: 1 })
        .escape(),


    asyncHandler(async (req, res, next) => {

        const errors = validationResult(req);

        const level = await Level.findById(req.body.levelid).exec();


        const newleaderboard = new Leaderboard({
            username:req.body.playername,
            score:req.body.time,
            level:level
        })

        if (!errors.isEmpty()) {
            res.send("there was an error", errors)

        }else {
                await newleaderboard.save(); 
                res.json({msg: 'saved'});
            }
        
    })
    
];