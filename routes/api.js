const express = require("express");
const router = express.Router();

const leaderboard_controller = require("../controllers/leaderboardController.js");
const level_controller = require("../controllers/levelController.js");
const character_controller = require("../controllers/characterController.js");


//gets all levels
router.get("/levels", level_controller.level_list);

//gets specific level
router.get("/levels/:levelid", level_controller.level_get);

//gets specific levels character information
router.get("/levels/:levelid/characters",character_controller.character_get_list);


// posts to a specific levels leaderboard information
router.post("/levels/:levelid/leaderboards", leaderboard_controller.leaderboard_post);

//gets specific levels leaderboard information
router.get("/levels/:levelid/leaderboards", leaderboard_controller.leaderboard_list);



module.exports = router;
