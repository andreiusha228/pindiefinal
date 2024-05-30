const { sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted } = require('../controllers/games');
const { checkAuth } = require('../middlewares/auth');
const { findAllGames, createGame, updateGame, checkEmptyFields, checkIsGameExists, checkIfCategoriesAvaliable, checkIfUsersAreSafe, findGameById, deleteGame, checkIsVoteRequest } = require('../middlewares/games');

const gamesRouter = require('express').Router();

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", checkIsGameExists, checkIfCategoriesAvaliable ,  checkEmptyFields, checkAuth, createGame, sendGameCreated);
gamesRouter.put("/games/:id", findGameById, checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvaliable , checkEmptyFields, checkAuth, updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;