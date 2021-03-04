const {Router} = require('express');
const playerRouter = Router();

const PlayerController = require('../controllers/PlayerController')

playerRouter.get('/', PlayerController.getPlayers)

module.exports = playerRouter