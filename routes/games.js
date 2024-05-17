
const gamesRouter = require("express").Router(); 
const { deleteGame, sendAllGames, sendUpdatedGames } = require("../controllers/games");
const { getAllGames, findGameById, updateGamesFile, checkIsTitleInArray, updateGamesArray } = require("../middlewares/games");



gamesRouter.get("/games", getAllGames, sendAllGames)
gamesRouter.delete("/games/:id", getAllGames, findGameById, deleteGame, updateGamesFile, sendUpdatedGames);
gamesRouter.post("/games", getAllGames, checkIsTitleInArray, updateGamesArray, updateGamesFile, sendUpdatedGames);

module.exports = gamesRouter;
     