#! /usr/bin/env node

console.log(
    'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
  );
  
  // Get arguments passed on command line
  const userArgs = process.argv.slice(2);
  
  const Level = require("./models/level.js");
  const Character = require("./models/character.js");
//   const Leaderboard = require("./models/leaderboard");

  
  const levels = [];
  const characters = [];
//   const leaderboards = [];
  
  
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false);
  
  const mongoDB = userArgs[0];
  
  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createLevels();
    await createCharacters();
    // await createLeaderBoards();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }
  


  async function levelCreate(index, name, difficulty,imgpath, pixelsX, pixelsY) {
    const leveldetail = { 
        name: name,
        difficulty: difficulty,
        imgpath:imgpath,
        pixelsX:pixelsX,
        pixelsY:pixelsY, 
     };
    const level = new Level(leveldetail);
    await level.save();

    levels[index] = level;
    console.log(`Added level: ${name}`);
  }
  
  async function characterCreate(index, name, xcoord, ycoord, level) {
    const characterdetail = {
      name: name,
      xcoord: xcoord,
      ycoord: ycoord,
      level: level,
    };
   
  
    const character = new Character(characterdetail);
    await character.save();
    characters[index] = character;
    console.log(`Added character: ${name}`);
  }
  
  
  
  async function createLevels() {
    console.log("Adding Level");
    await Promise.all([
      // levelCreate(0, "level 1","1","public/images/Waldo1.png","1686","1068"),
      // levelCreate(1, "level 2","2","public/images/Waldo2.png","1686","1070"),
      // levelCreate(2, "level 3","3","public/images/Waldo3.png","1688","1068"),
      // levelCreate(3, "level 4","4","public/images/Waldo4.png","1688","1066"),
      // levelCreate(4, "level 5","5","public/images/Waldo5.png","1686","1070"),

    ]);
  }
  
  async function createCharacters() {
    console.log("Adding Characters");
    await Promise.all([
      // characterCreate(0, "Waldo", "471", "388",levels[0]),
      // characterCreate(1, "Wizard", "1627", "881",levels[0]),
      // characterCreate(2, "Wilma", "1503", "723", levels[0]),
      // characterCreate(3, "Odlaw", "164", "721", levels[0]),
      // characterCreate(4, "Waldo", "464", "352",levels[1]),
      // characterCreate(5, "Wizard", "1037", "940",levels[1]),
      // characterCreate(6, "Wilma", "412", "780", levels[1]),
      // characterCreate(7, "Odlaw", "1014", "693", levels[1]),
      // characterCreate(8, "Waldo", "1511", "719",levels[2]),
      // characterCreate(9, "Wizard", "918", "594",levels[2]),
      // characterCreate(10, "Wilma", "1292", "699", levels[2]),
      // characterCreate(11, "Odlaw", "242", "681", levels[2]),
      // characterCreate(12, "Waldo", "1478", "826",levels[3]),
      // characterCreate(13, "Wizard", "1018", "751",levels[3]),
      // characterCreate(14, "Wilma", "904", "747", levels[3]),
      // characterCreate(15, "Odlaw", "612", "792", levels[3]),
      // characterCreate(16, "Waldo", "677", "688",levels[4]),
      // characterCreate(17, "Wizard", "1337", "632",levels[4]),
      // characterCreate(18, "Wilma", "484", "567", levels[4]),
      // characterCreate(19, "Odlaw", "92", "764", levels[4]),
     
    ]);
  }